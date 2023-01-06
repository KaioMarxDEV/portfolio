import Head from 'next/head';
import Link from 'next/link';
import { ArrowCircleDown, ArrowUUpLeft, Flask, Warning } from 'phosphor-react';
import Badge from '../components/Badge';
import { Skills } from '../components/Skills';
import SlideLeft from '../components/SlideLeft';
import Slideup from '../components/Slideup';
import { projects } from '../utils/projects';

export default function Work() {
  return (
    <>
      <Head>
        <title>Experiences - Kaio Marx</title>
      </Head>
      <div className="w-full overflow-hidden">
        {/* RETURN BUTTON */}
        <div className="relative">
          <div className="fixed top-[10%] right-[15%]">
            <Link href="/" className="cursor-pointer no-underline">
              <div
                className={`
                  group
                  rounded-full 
                  border  
                  from-[#16BFFD]
                  to-[#CB3066]
                  p-1 
                  text-2xl 
                  font-bold

                  text-white
                  antialiased
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                  hover:border-transparent 
                  hover:bg-gradient-to-r
                `}
              >
                <ArrowUUpLeft className="group-hover:animate-pulse" size={32} />
              </div>
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-screen-lg text-white">
          <div className="mt-[20vh] mb-[30vh]">
            {/* CONTENT */}
            <div className="mx-auto flex max-w-[70%] flex-col">
              <Slideup>
                <Skills />
              </Slideup>
            </div>
            {/* SEPARATOR */}
            <SlideLeft>
              <div className="mt-24 mb-80 flex flex-row items-center justify-center gap-4">
                <div className="flex flex-row items-center gap-4">
                  <div className="animate-bounce rounded-full bg-gradient-to-r from-[#16BFFD] to-[#CB3066]">
                    <ArrowCircleDown size={32} />
                  </div>
                  <span className="text-lg">
                    The path to cool stuff you looking for is down here
                  </span>
                  <div className="animate-bounce rounded-full bg-gradient-to-r from-[#16BFFD] to-[#CB3066]">
                    <ArrowCircleDown size={32} />
                  </div>
                </div>
              </div>
            </SlideLeft>
            {/* PROJECTS ARRAY */}
            <div className="flex flex-col gap-[12vh] text-white">
              <div className="mb-28 flex flex-col">
                {projects.map((project) => (
                  <Link
                    key={project.id}
                    target="_blank"
                    href={project.url}
                    className="my-20 transition-all duration-500 ease-[cubic-bezier(0.2,0.6,0.2,1)] hover:ml-10"
                  >
                    <div className="flex flex-row items-center">
                      <h3 className="mb-6 text-8xl font-semibold">
                        {project.name}
                      </h3>
                      {project.name === 'Gofinance' && <Badge />}
                    </div>
                    <span className="bg-gradient-to-r from-[#16BFFD] to-[#CB3066] bg-clip-text text-2xl text-transparent">
                      {project.platform}
                    </span>
                  </Link>
                ))}
                <div className="mt-20 flex flex-col items-center justify-center border-4 border-dashed border-gray-500 bg-slate-900 py-10">
                  <div className="flex gap-10">
                    <Warning className="text-6xl  text-orange-500" />
                    <Flask className="animate-wave text-6xl text-orange-500" />
                    <Warning className="text-6xl text-orange-500" />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-2xl font-semibold">
                      I&apos;ll be adding more projects but first testing
                      everything,
                    </p>
                    <div className="flex flex-row items-center">
                      <p className="text-2xl font-semibold">
                        to ensure that the projects are
                      </p>
                      <div className="flex h-8 flex-col overflow-hidden text-2xl font-bold text-white">
                        <span className="block h-full animate-spin_word pl-2 text-orange-500">
                          Fantastic
                        </span>
                        <span className="block h-full animate-spin_word pl-2 text-green-500">
                          Interesting
                        </span>
                        <span className="block h-full animate-spin_word pl-2 text-red-500">
                          Amazing
                        </span>
                        <span className="block h-full animate-spin_word pl-2 text-blue-500">
                          Incredible
                        </span>
                        <span className="block h-full animate-spin_word pl-2 text-yellow-500">
                          Awesome
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
