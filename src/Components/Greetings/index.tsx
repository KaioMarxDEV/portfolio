import Image from 'next/image';
import kaio from '../../../public/kaio.jpeg';

export function Greetings() {
  return (
    <div className="mt-40">
      <div className="flex flex-col sm:px-5 sm:flex-row items-center mx-auto max-w-4xl justify-between">
        <div className="max-w-md">
          <div className="flex flex-row items-center">
            <h1 className="text-black text-3xl font-monoton">
              {"Hi, I'm Kaio Marx"}
            </h1>
            <div className='animate-wave'>
              <strong className="ml-2 text-3xl text-my-blue">👋</strong>
            </div>
          </div>
          <h1 className="text-5xl my-4 text-gray-700 font-lob">
            a Front-end Developer based in Brazil
          </h1>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-3'>
              <strong className='text-xl'>✍</strong>
              <span className="text-gray-700 block text-xl">
                ~1 year web development experiences
              </span>
            </div>
            <div className='flex flex-row gap-3'>
              <strong className='text-xl'>💻</strong>
              <span className="text-gray-700 block text-xl">
                Frontend specialized/full stack capable
              </span>
            </div>
            <div className='flex flex-row gap-3'>
              <strong className='text-xl'>👨‍💻</strong>
              <span className="text-gray-700 block text-xl">
                JavaScript, TypeScript,  React, Next.js
              </span>
            </div>
          </div>
        </div>
        <div className='mt-8 sm:mt-0'>
          <Image 
            className="animate-wave rounded-full" 
            width={320} 
            height={320} 
            src={kaio} 
            alt="kaio's 3d picture"
          />
        </div>
      </div>
    </div>
  )
}