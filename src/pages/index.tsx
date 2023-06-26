import Hero from "@/components/pages/Hero";
import Header from "@/components/widgets/Header";
import Title from "@/components/widgets/Title";

const Home = () => {
  return (
    <>
      <Title />
      <Header />
      <main className={``}>
        <Hero />
        🐪 Ola k ase?
      </main>
    </>
  )
}

export default Home;