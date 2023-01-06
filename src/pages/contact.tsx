import Head from 'next/head';
import Link from 'next/link';
import { ArrowUUpLeft, CaretDown } from 'phosphor-react';
import Slideup from '../components/Slideup';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Kaio Marx</title>
      </Head>
      <div className="w-full overflow-hidden">
        <div className="relative">
          <div className="fixed top-[10%] right-[15%]">
            <Link href="/" className="cursor-pointer no-underline">
              <div
                className={`
                  group
                  rounded-xl 
                  border  
                  py-2
                  px-4
                  text-2xl

                  font-bold
                  text-white
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                  hover:border-green-600 
                  hover:text-green-400
                `}
              >
                <ArrowUUpLeft className="group-hover:animate-pulse" size={32} />
              </div>
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-screen-lg text-white">
          <div className="mt-[35vh] mb-[30vh]">
            {/* CONTENT */}
            <Slideup>
              <div className="relative block overflow-hidden">
                <h2 className="py-4 text-8xl font-semibold">
                  Let&apos;s make
                  <br />
                  something great!
                </h2>
              </div>
            </Slideup>
            {/* SEPARATOR */}
            <Slideup>
              <div className="mb-72 mt-28 flex items-center gap-4">
                <div className="flex h-1 flex-1 bg-green-500" />
                <div>
                  <CaretDown
                    className="relative top-4 animate-bounce text-green-500"
                    size={24}
                  />
                  <CaretDown
                    className="relative -top-4 animate-bounce text-green-500"
                    size={24}
                  />
                  <CaretDown
                    className="relative -top-6 animate-bounce text-green-500"
                    size={24}
                  />
                </div>
                <div className="flex h-1 flex-1 bg-green-500" />
              </div>
            </Slideup>
            {/* CONTENT */}
            <div className="mx-auto flex max-w-[70%] flex-col">
              <h4 className="mb-9 text-5xl font-semibold">Contact</h4>
              <p className="mb-7 text-lg">
                I&apos;m seeking out opportunities to collaborate with companies
                / agencies / individuals, not just work for them. I want to
                bring my collective code experience to the table where we can
                work together to solve real business-problems in a way that
                optimizes all of our respective experience and knowledge.
              </p>
              <p className="mb-7 text-lg">
                I want to avoid subjective pissing-matches, and favor
                open-minded collaborators where egos are out of the equation. If
                that all sounds about right, then lets for sure chat about how
                we can work together
              </p>
              <p className="mb-7 text-lg">
                Feel free to reach out through any platforms bellow:
              </p>
              <Link
                target="_blank"
                href="https://github.com/KaioMarxDEV"
                className="my-4 cursor-pointer no-underline"
              >
                <div
                  className="
                    text-lg 
                      font-bold
                      text-green-500
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                      after:content-['Github'] 
                      hover:translate-x-10
                    "
                />
              </Link>
              <Link
                target="_blank"
                href="https://twitter.com/KaioMarx"
                className="my-4 cursor-pointer no-underline"
              >
                <div
                  className="
                    text-lg 
                      font-bold
                      text-green-500
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                      after:content-['Twitter'] 
                      hover:translate-x-10
                    "
                />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/kaiomarx/"
                className="my-4 cursor-pointer no-underline"
              >
                <div
                  className="
                    text-lg 
                      font-bold
                      text-green-500
                      transition-all
                      duration-500
                      ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                      after:content-['Linkedin'] 
                      hover:translate-x-10
                    "
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
