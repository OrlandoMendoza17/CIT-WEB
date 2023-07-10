import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Session } from "@supabase/gotrue-js/src/lib/types"
import supabase from "@/services/api"
import { useRouter } from "next/router"

type Props = {
  ProtectRoute?: boolean
}

type UseSession = (props: Props) => [Session | null, Dispatch<SetStateAction<Session | null>>]

const useSession: UseSession = ({ ProtectRoute = false }) => {

  const [session, setSession] = useState<Session | null>(null)
  console.log(session)

  const router = useRouter()

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) setSession(session)
    })()

    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "INITIAL_SESSION") {
        if (session) {
          setSession(session)
        } else {
          setSession(null)
          if (ProtectRoute) {
            router.push("/")
          }
        }
      }

      if (event === "SIGNED_OUT") {
        setSession(null)
        router.push("/")
      }

      console.log('session', session)
      console.log('event', event)
    })
    
  }, [])

  return [session, setSession]
}

export default useSession;