import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Session } from "@supabase/gotrue-js/src/lib/types"
import supabase from "@/services/api"

const useSession = (): [Session | null, Dispatch<SetStateAction<Session | null>>] =>{
  const [session, setSession] = useState<Session | null>(null)
  console.log(session)
  
  useEffect(() => {
    (async () => {
      supabase.auth.onAuthStateChange((event, session) => {
        if (session) {
          setSession(session)
        }
        if(event === "SIGNED_OUT"){
          setSession(null)
        }
        
        console.log('session', session)
        console.log('event', event)
      })
    })()
  }, [])
  
  return [session, setSession]
}

export default useSession;