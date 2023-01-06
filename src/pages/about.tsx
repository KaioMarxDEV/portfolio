import Head from 'next/head';
import Link from 'next/link';
import { ArrowUUpLeft, CaretDown } from 'phosphor-react';
import Slideup from '../components/Slideup';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Kaio Marx</title>
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
                  hover:border-yellow-600 
                  hover:text-yellow-400
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
                  I think & build <br />
                  systems for Web
                </h2>
              </div>
            </Slideup>
            {/* SEPARATOR */}
            <Slideup>
              <div className="mb-72 mt-28 flex items-center gap-4">
                <div className="flex h-1 flex-1 bg-yellow-400" />
                <div>
                  <CaretDown
                    className="relative top-4 animate-bounce text-yellow-400"
                    size={24}
                  />
                  <CaretDown
                    className="relative -top-4 animate-bounce text-yellow-400"
                    size={24}
                  />
                  <CaretDown
                    className="relative -top-6 animate-bounce text-yellow-400"
                    size={24}
                  />
                </div>
                <div className="flex h-1 flex-1 bg-yellow-400" />
              </div>
            </Slideup>
            {/* CONTENT */}
            <div className="mx-auto flex max-w-[70%] flex-col justify-between">
              <h4 className="mb-10 text-5xl font-semibold">
                About <span className="font-bold text-yellow-400">me?</span> 🤯{' '}
                <span className="font-bold">Sure!</span>
              </h4>
              <p className="intro mb-7 text-2xl">
                Hi, I&apos;m Kaio. I&apos;m a multi-talented human with over 3+
                years
                <br />
                of studying and practice in building wide range of websites.
              </p>
              <p className="mb-7 text-lg">
                You can also call me a programmer, coder, developer, IT guy or
                by any other market defined function-title. I&apos;m also a
                multi-disciplinary with over 3 years of study and development in
                wide range of marketing disciplines, back-end development,
                economy, entrepreneurship, front-end development, music
                enthusiast, reader and more.
              </p>
              <p className="mb-7 text-lg">
                I don&apos;t like to define myself by the code I&apos;ve done. I
                define myself by the code I want to do. Skills can be taught,
                personality is inherent. I prefer to keep learning, continue
                challenging myself, and do interesting things that matter and
                are useful for others.
              </p>
              <p className="mb-7 text-lg">
                Fueled by high energy levels, a young heart and boundless
                enthusiasm, I&apos;m easily inspired and more then willing to
                follow my fascinations wherever they take me. I&apos;m
                passionate, expressive, multi-talented spirit with a natural
                ability to entertain and inspire. I&apos;m never satisfied to
                just come up with ideas. Instead I have an almost impulsive need
                to act on them.
              </p>
              <p className="mb-7 text-lg">
                My abundant energy fuels me in the pursuit of many interests,
                hobbies, areas of study and that is not a reason to not be
                specilized, so I can say I&apos;m specialized in Back-end with
                Go (golang) and Front-end with React.js. I&apos;m a fast
                learner, able to pick up new skills and juggle different
                projects and roles with relative ease and AUTONOMY.
              </p>
              <p className="mb-7 text-lg">
                I like to develop expertise in a number of areas over the course
                of my life and career. My personality type is INTP.
              </p>
              <p className="mb-7 text-lg">
                You can read more about my biography, experience, skills,
                education and much more in the PDF attached bellow:
              </p>
              <Link
                target="_blank"
                href="https://docs.google.com/document/d/17cOKn-OEIvWS9zxgSHkCe0ZDcfnwn9y1LQrHknd7UiE/edit?usp=sharing"
                className="cursor-pointer no-underline"
              >
                <div
                  className="
                  text-lg 
                    font-bold
                    text-yellow-400
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                    after:content-['My_resume_(Google_Docs_website)'] 
                    hover:text-2xl
                  "
                />
              </Link>
              <Link
                target="_blank"
                href="https://app.mindsight.com.br/devolutiva/cbe93b25-992e-4459-ba87-c82238e4e231/resultado/"
                className="mt-4 cursor-pointer no-underline"
              >
                <div
                  className="
                  text-lg 
                    font-bold
                    text-yellow-400
                    transition-all
                    duration-500
                    ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                    after:content-['Personality_(Mindsight.com)'] 
                    hover:text-2xl
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
