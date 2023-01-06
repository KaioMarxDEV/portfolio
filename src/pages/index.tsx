import Link from 'next/link';
import Slideup from '../components/Slideup';

import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import big from '../assets/big.png';
import SizeDown from '../components/SizeDown';
import SlideLeft from '../components/SlideLeft';

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      const page = pageRef.current;
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;

      //@ts-ignore
      page.style.transform = `translate(${x * 12}px, ${y * 12}px) rotate(${
        x * 6
      }deg)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Kaio Marx Developer</title>
      </Head>
      <div className="max-h-screen w-full">
        <div className="absolute flex h-full items-center">
          <h1 className="fixed left-[25%] z-50 text-9xl font-bold leading-tight tracking-tight">
            <div className="relative block overflow-hidden">
              <SlideLeft>
                <Link
                  href="/about"
                  className="group cursor-pointer no-underline"
                >
                  <div
                    className="
                        text-white
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                        after:content-['Hello.']  
                        hover:ml-10 
                        hover:after:content-['About.']
                      "
                  />
                </Link>
              </SlideLeft>
              <Slideup>
                <Link href="/work" className="cursor-pointer no-underline">
                  <div
                    className="
                        text-red-600
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.2,0.6,0.2,1)]
                        after:content-['I_am'] 
                        hover:ml-10 
                        hover:after:content-['Work']
                      "
                  />
                </Link>
              </Slideup>
              <Slideup>
                <Link href="/contact" className="cursor-pointer no-underline">
                  <div
                    className="
                        text-red-600
                        transition-all
                        duration-500
                        ease-[cubic-bezier(0.2,0.6,0.2,1)]
                        after:content-['Kaio'] 
                        hover:ml-10 
                        hover:after:content-['Contact']
                      "
                  />
                </Link>
              </Slideup>
            </div>
          </h1>
        </div>
        <SizeDown>
          <div
            ref={pageRef}
            className="
            translate-x-z
            translate-y-z 
            fixed 
            left-1/2 
            top-10 
            -z-50 
            flex 
            rotate-6 
            flex-col items-center  
            justify-center
            overflow-hidden
            rounded-full
            p-3
            antialiased
            shadow-xl
            shadow-red-500
            blur
            before:absolute
            before:-z-10
            before:h-[200%]
            before:w-[200%]
            before:animate-spin_slow
            before:bg-glow-border
            after:absolute
            after:inset-0
            after:-z-10
            after:rounded-xl
            after:bg-transparent
            after:bg-clip-content
          "
          >
            <Image className="rounded-full" width={580} alt="dale" src={big} />
          </div>
        </SizeDown>
      </div>
    </>
  );
}
