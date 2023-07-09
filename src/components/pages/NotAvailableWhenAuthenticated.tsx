import supabase from '@/services/api'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'
import { Session } from "@supabase/gotrue-js/src/lib/types"
import { type } from 'os'


type Props = {
  render: (session: Session | null) => ReactNode
}

const NotAvailableWhenAuthenticated = ({ render }: Props) => {

  const router = useRouter()
  const [session, setSession] = useState<Session | null>(null)
  const [firstRender, setFirstRender] = useState<boolean>(true)
  
  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getSession()
      if (data.session) {
        router.push("/")
      }else{
        setFirstRender(false)
      }
    })()
  }, [])
  
  if (session || firstRender) {
    return <></>
  }

  return render(session);
}

export default NotAvailableWhenAuthenticated