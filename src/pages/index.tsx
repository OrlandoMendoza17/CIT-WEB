import BestTools from "@/components/pages/BestTools";
import Hero from "@/components/pages/Hero";
import MainDescription from "@/components/pages/MainDescription";
import Projects from "@/components/pages/Projects";
import Footer from "@/components/widgets/Footer";
import Header from "@/components/widgets/Header";
import Title from "@/components/widgets/Title";
import useSession from "@/hooks/useSession";
import supabase from "@/services/api";
import PostsService from "@/services/posts";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.auth.getSession()
      console.log('data', data)
      console.log('error', error)
    })()
  }, [])

  const [session] = useSession()
  
  return (
    <>
      <Title />
      <Header session={session} position="fixed" transparent />
      <main className={``}>
        <Hero />
        <MainDescription />
        <Projects />
        <BestTools />
        🐪 Ola k ase?
      </main>
      <Footer />
    </>
  )
}

export default Home;