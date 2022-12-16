
import Head from "next/head";
import Link from "next/link";
import { ArrowUUpLeft, CaretDown } from "phosphor-react";
import Slideup from "../components/Slideup";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Kaio Marx</title>
      </Head>
      <div className="w-full overflow-hidden">
        <div className="relative">
          <div className="fixed top-[10%] right-[15%]">
            <Link 
              href="/"
              className="cursor-pointer no-underline"
            >
              <div
                className={`
                  group
                  font-bold 
                  text-2xl  
                  text-white
                  hover:text-green-400
                  hover:border-green-600

                  py-2
                  px-4
                  border
                  rounded-xl
                  transition-all 
                  ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                  duration-500
                `}
              >
                <ArrowUUpLeft className="group-hover:animate-pulse" size={32}/>
              </div>
            </Link>
          </div>
        </div>
        <div className="max-w-screen-lg mx-auto text-white">
          <div className="mt-[35vh] mb-[30vh]">
            {/* CONTENT */}
            <Slideup>
              <div className="relative block overflow-hidden">
                <h2 className="text-8xl py-4 font-semibold">
                  Let&apos;s make<br />
                  something great!
                </h2>            
              </div>
            </Slideup>
            {/* SEPARATOR */}
            <Slideup>
              <div className="flex items-center gap-4 my-72">
                <div className="flex flex-1 h-1 bg-green-500" />
                <div>
                  <CaretDown className="relative top-4 animate-bounce text-green-500" size={24} />
                  <CaretDown className="relative -top-4 animate-bounce text-green-500" size={24} />
                  <CaretDown className="relative -top-6 animate-bounce text-green-500" size={24} />
                </div>
                <div className="flex flex-1 h-1 bg-green-500" />
              </div>
            </Slideup>
            {/* CONTENT */}
            <div className="flex flex-col max-w-[70%] mx-auto">
              <h4 className="mb-9 font-semibold text-5xl">
                Contact
              </h4>
              <p className="text-lg mb-7">
                I&apos;m seeking out opportunities to collaborate with companies / agencies / individuals, not just work for them. I want to bring my collective code experience to the table where we can work together to solve real business-problems in a way that optimizes all of our respective experience and knowledge.
              </p>
              <p className="text-lg mb-7">
                I want to avoid subjective pissing-matches, and favor open-minded collaborators where egos are out of the equation. If that all sounds about right, then lets for sure chat about how we can work together
              </p>
              <p className="text-lg mb-7">
                Feel free to reach out through any platforms bellow:
              </p>
              <Link
                  target="_blank"
                  href="https://github.com/KaioMarxDEV"
                  className="cursor-pointer no-underline my-4"
                >
                  <div
                    className="
                    text-green-500 
                      text-lg
                      font-bold
                      after:content-['Github']
                      hover:translate-x-10
                      transition-all 
                      ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                      duration-500
                    "
                  />
              </Link>
              <Link
                  target="_blank"
                  href="https://twitter.com/KaioMarx"
                  className="cursor-pointer no-underline my-4"
                >
                  <div
                    className="
                    text-green-500 
                      text-lg
                      font-bold
                      after:content-['Twitter']
                      hover:translate-x-10
                      transition-all 
                      ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                      duration-500
                    "
                  />
              </Link>
              <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/kaiomarx/"
                  className="cursor-pointer no-underline my-4"
                >
                  <div
                    className="
                    text-green-500 
                      text-lg
                      font-bold
                      after:content-['Linkedin']
                      hover:translate-x-10
                      transition-all 
                      ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                      duration-500
                    "
                  />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
