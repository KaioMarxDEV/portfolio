import Link from 'next/link';
import Slideup from '../components/Slideup';

import Head from 'next/head';
import Image from 'next/image';
import big from '../assets/big.png';
import SizeDown from '../components/SizeDown';
import SlideLeft from '../components/SlideLeft';

export default function Home() {
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
                <Link href="/about" className="cursor-pointer no-underline">
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
      </div>
      <SizeDown>
        <Image
          className="fixed left-1/2 top-10 -z-50 rounded-full antialiased shadow-2xl shadow-red-600 2xl:top-56  2xl:left-[50%]"
          width={600}
          alt="dale"
          src={big}
        />
      </SizeDown>
    </>
  );
}
