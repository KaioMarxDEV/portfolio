
import Link from "next/link";
import { ArrowUUpLeft, CaretDown } from "phosphor-react";
import Slideup from "../components/Slideup";

export default function About() {
  return (
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
                hover:text-orange-400
                hover:border-orange-600

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
                I design & build <br />
                systems for Web
              </h2>            
            </div>
          </Slideup>
          {/* SEPARATOR */}
          <Slideup>
            <div className="flex items-center gap-4 my-72">
              <div className="flex flex-1 h-1 bg-orange-400" />
              <div>
                <CaretDown className="relative top-4 animate-bounce text-orange-400" size={24} />
                <CaretDown className="relative -top-4 animate-bounce text-orange-400" size={24} />
                <CaretDown className="relative -top-6 animate-bounce text-orange-400" size={24} />
              </div>
              <div className="flex flex-1 h-1 bg-orange-400" />
            </div>
          </Slideup>
          {/* CONTENT */}
          <div className="flex flex-col max-w-[70%] mx-auto">
            <h4 className="mb-9 font-semibold text-5xl">
              About...
            </h4>
            <p className="intro text-2xl mb-7">
              Hi, I&apos;m Kaio. I&apos;m a multi-talented human with over 3+ years<br />
              of practice in building wide range of systems, websites.
            </p>
            <p className="text-lg mb-7">
              You can also call me a programmer, coder, developer, IT guy
              or by any other market defined function-title. I&apos;m also a  multi-disciplinary 
              with over 3 years of study and development in wide range of marketing disciplines, back-end developer, 
              economy, entrepreneur, front-end developer, music enthusiast, geek, reader and more.
            </p>
            <p className="text-lg mb-7">
              I don&apos;t like to define myself by the code I’ve done. I define myself by the code I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter and are useful for others.
            </p>
            <p className="text-lg mb-7">
            Fueled by high energy levels and boundless enthusiasm, I’m easily inspired and more then willing to follow my fascinations wherever they take me. I’m passionate, expressive, multi-talented spirit with a natural ability to entertain and inspire. I’m never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.
            </p>
            <p className="text-lg mb-7">
            My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. I’m a fast learner, able to pick up new skills and juggle different projects and roles with relative ease.
            </p>
            <p className="text-lg mb-7">
            I like to develop expertise in a number of areas over the course of my life and career. My personality type is ENTP.
            </p>
            <p className="text-lg mb-7">
              You can read more about my biography, experience, skills, education and much more in the PDF attached bellow:
            </p>
            <Link
                target="_blank"
                href="https://docs.google.com/document/d/17cOKn-OEIvWS9zxgSHkCe0ZDcfnwn9y1LQrHknd7UiE/edit?usp=sharing"
                className="cursor-pointer no-underline"
              >
                <div
                  className="
                  text-orange-600 
                    text-lg
                    font-bold
                    after:content-['My_resume_(Google_Docs)']
                    hover:text-2xl
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
  )
}
