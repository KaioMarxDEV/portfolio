import type { NextPage } from "next";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Contact } from "../Components/Contact";
import { Greetings } from "../Components/Greetings";
import { Header } from "../Components/Header";
import { Projects } from "../Components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Kaio Marx - Front End Developer</title>
        <meta name="description" content="" />
      </Head>
      <>
        <ToastContainer />
        <section>
          <Header />
        </section>
        <section className="scroll-mt-4">
          <Greetings />
        </section>
        <section className="scroll-mt-4" id="projects">
          <Projects />
        </section>
        <section className="scroll-mt-4" id="hello">
          <Contact />
        </section>
      </>
    </>
  );
};

export default Home;
