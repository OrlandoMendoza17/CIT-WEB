import BestTools from "@/components/pages/BestTools";
import Hero from "@/components/pages/Hero";
import MainDescription from "@/components/pages/MainDescription";
import Projects from "@/components/pages/Projects";
import Header from "@/components/widgets/Header";
import Title from "@/components/widgets/Title";

const Home = () => {
  return (
    <>
      <Title />
      <Header transparent />
      <main className={``}>
        <Hero />
        <MainDescription />
        <Projects />
        <BestTools />
        🐪 Ola k ase?
      </main>
      
    </>
  )
}

export default Home;