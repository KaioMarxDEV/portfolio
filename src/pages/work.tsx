
import Link from "next/link";
import { ArrowCircleDown, ArrowUUpLeft, Flask, Warning } from "phosphor-react";
import Badge from "../components/Badge";
import { Skills } from "../components/Skills";
import SlideLeft from "../components/SlideLeft";
import Slideup from "../components/Slideup";
import { projects } from "../utils/projects";

export default function Work() {
  return (
    <div className="w-full overflow-hidden">
      {/* RETURN BUTTON */}
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
                hover:border-transparent
                hover:bg-gradient-to-r 
                from-[#16BFFD] 
                to-[#CB3066]

                p-1
                border
                antialiased
                rounded-full
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
        <div className="mt-[20vh] mb-[30vh]">
          {/* CONTENT */}
          <div className="flex flex-col max-w-[70%] mx-auto">
            <Slideup>
              <Skills />
            </Slideup>
          </div>
          {/* SEPARATOR */}
          <SlideLeft>
            <div className="flex flex-row items-center justify-center gap-4 mt-40 mb-80">
              <div className="flex flex-row items-center gap-4">
                <div className="rounded-full animate-bounce bg-gradient-to-r from-[#16BFFD] to-[#CB3066]">
                  <ArrowCircleDown size={32}/>
                </div>
                <span className="text-lg">The path to cool stuff you looking for is down here</span>
                <div className="rounded-full animate-bounce bg-gradient-to-r from-[#16BFFD] to-[#CB3066]">
                  <ArrowCircleDown size={32}/>
                </div>
              </div>
            </div>
          </SlideLeft>
          {/* PROJECTS ARRAY */}
          <div className="flex flex-col gap-[12vh] text-white">
            <div className="flex flex-col mb-28">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  target="_blank"
                  href={project.url}
                  className="my-20 hover:ml-10 transition-all ease-[cubic-bezier(0.2,0.6,0.2,1)] duration-500"
                >
                  <div className="flex flex-row items-center">
                    <h3 className="text-8xl mb-6 font-semibold">{project.name}</h3>
                    { project.name === 'Gofinance' && <Badge /> }
                  </div>
                  <span className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#16BFFD] to-[#CB3066]">
                    {project.platform}
                  </span>
                </Link>
              ))}
              <div className="flex justify-center flex-col items-center mt-20 border-4 border-dashed border-gray-500 bg-slate-900 py-10">
                <div className="flex gap-10">
                  <Warning className="text-6xl  text-orange-500" />
                  <Flask className="text-6xl animate-wave text-green-500" />
                  <Warning className="text-6xl text-orange-500" />
                </div>
                <div className="flex-col flex items-center">
                  <p className="font-semibold text-2xl">
                    I&apos;ll be adding more projects but first testing everything, 
                  </p>
                  <div className="flex flex-row items-center">
                    <p className="font-semibold text-2xl">
                      to ensure that the projects are
                    </p>
                    <div className="overflow-hidden h-8 flex-col flex font-bold text-2xl text-white">
                      <span className="text-orange-500 block animate-spin_word pl-2 h-full">Fantastic</span>
                      <span className="text-green-500 block animate-spin_word pl-2 h-full">Interesting</span>
                      <span className="text-red-500 block animate-spin_word pl-2 h-full">Amazing</span>
                      <span className="text-blue-500 block animate-spin_word pl-2 h-full">Incredible</span>
                      <span className="text-yellow-500 block animate-spin_word pl-2 h-full">Awesome</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
