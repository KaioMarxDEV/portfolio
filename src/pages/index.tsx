import Link from "next/link";
import Slideup from "../components/Slideup";

import Head from "next/head";
import Image from "next/image";
import big from '../assets/big.png';
import SizeDown from "../components/SizeDown";
import SlideLeft from "../components/SlideLeft";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="android-chrome" sizes="192x192" href="/android-chrome-192x192.png"/>
        <link rel="android-chrome" sizes="512x512" href="/android-chrome-512x512.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="icon" href='/favicon.ico' />
        <link rel="manifest" href="/site.webmanifest" />   
      </Head>
      <div className="h-full w-full ">
          <div className="h-full flex absolute items-center">
            <h1 className="font-bold fixed z-50 left-[25%] leading-tight tracking-tight text-9xl">
              <div className="relative block overflow-hidden">
                <SlideLeft>
                  <Link 
                    href="/about"
                    className="cursor-pointer no-underline"
                  >
                    <div
                      className="
                        after:content-['Hello.']
                        hover:ml-10
                        hover:after:content-['About.']
                        text-white 
                        transition-all 
                        ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                        duration-500
                      "
                    />
                  </Link>
                </SlideLeft>
                <Slideup>
                  <Link 
                    href="/work"
                    className="cursor-pointer no-underline"
                  >
                    <div 
                      className="
                        after:content-['I_am'] 
                        hover:ml-10
                        hover:after:content-['Work']
                        text-red-600
                        transition-all 
                        ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                        duration-500
                      " 
                    />
                  </Link>
                </Slideup>
                <Slideup>
                  <Link 
                    href="/contact"
                    className="cursor-pointer no-underline"
                  >
                    <div
                      className="
                        after:content-['Kaio'] 
                        hover:ml-10
                        hover:after:content-['Contact']
                        text-red-600
                        transition-all 
                        ease-[cubic-bezier(0.2,0.6,0.2,1)] 
                        duration-500
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
          className="-z-50 fixed scale-90 left-[40%] shadow-blue-600 shadow-2xl rounded-full antialiased  bg-no-repeat"
          alt='dale'
          src={big}
        />
      </SizeDown>
    </>
  )
}
