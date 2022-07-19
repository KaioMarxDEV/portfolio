import Image from 'next/image';

export function Greetings() {

  return (
    <div className="mt-20">
      <div className="flex flex-col px-4 items-center sm:px-6 sm:flex-row sm:justify-between mx-auto max-w-4xl">
        <div className="sm:max-w-md max-h-md">
          <div className="flex flex-row items-center">
            <h1 className="text-black text-3xl font-monoton">
              {"Hi, I'm Kaio Marx"}
            </h1>
            <div className='animate-wave'>
              <strong className="ml-2 text-3xl text-my-blue">👋</strong>
            </div>
          </div>
          <h1 className="text-5xl my-4 text-transparent bg-clip-text bg-gradient-to-r from-my-blue to-indigo-600 font-lob">
            Front-end Developer based in Brazil
          </h1>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-3'>
              <strong className='text-xl'>✍</strong>
              <span className="text-gray-700 block text-xl">
                ~6 months web development experiences
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
            priority
            width={320} 
            height={320} 
            src="/kaio.jpeg" 
            alt="kaio's 3d picture"
          />
        </div>
      </div>
    </div>
  )
}