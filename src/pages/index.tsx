import type { NextPage } from "next";
import Head from "next/head";
import { Greetings } from "../Components/Greetings";
import { Header } from "../Components/Header";
import { Projects } from "../Components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio Kaio Marx</title>
        <meta name="description" content="" />
      </Head>
      <>
        <section className="scroll-mt-2">
          <Header />
        </section>
        <section className="scroll-mt-32">
          <Greetings />
        </section>
        <section className="scroll-mt-32" id="projects">
          <Projects />
        </section>
      </>
    </>
  );
};

export default Home;
