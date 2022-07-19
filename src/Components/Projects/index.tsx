import Image from "next/image";
import { projectsArray } from "./projects";

type IProject = typeof projectsArray[0];

export function Projects() {
  return (
    <div className="my-52 flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div>
          <div className="mb-4 px-4 sm:px-6 text-center">
            <span className="text-transparent bg-clip-text uppercase text-5xl bg-cover font-monoton font-semibold bg-[url('https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif')]">
              Projects
            </span>
          </div>
          <span className="text-center underline-offset-8 underline decoration-my-blue text-gray-700 block text-xl">
            Some of my case studies, Based on personal projects, challenges, etc.
          </span>
        </div>
        <div>
          <div className="pt-40">
            <div className="grid grid-cols-1 gap-6 sm:gap-16 sm:grid-cols-2">
              {projectsArray.map((project: IProject) => (
                <div key={project.id} className="block leading-none px-4 sm:px-6">
                  <h1 className="text-3xl sm:text-5xl text-gray-700 text-center font-monoton mb-4 underline-offset-8 decoration-2 underline decoration-indigo-600">
                    {project.title}
                  </h1>
                  <Image src={project.img} className="w-20 h-56" alt="" />
                  <p className="mt-10 mb-6 w-full text-center">
                    {project.desc}
                  </p>
                  <ul className="flex gap-2 mb-6 items-center justify-center">
                    {project.techs.map(({name, id}) => (
                      <li key={id} className="flex text-lg font-rc text-indigo-500 last:after:content-none items-center gap-3 after:h-2 after:w-2 after:rounded-full after:bg-indigo-600 after:content-['']">
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}