import Head from 'next/head';
import Image from 'next/image';
import Avatar from '../components/Avatar';
import {MicrophoneIcon, ViewGridIcon} from "@heroicons/react/solid";
import {SearchIcon} from "@heroicons/react/outline";
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term) return;
    router.push(`/search?term=${term}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen" >
      <Head>
        <title>GOOGLE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEADER */}
        <header className="flex w-full p-5 justify-between text-sm text-gray-500 bg-dark-900" >
          <div className="flex space-x-4 items-center" >
            <p className="link" >ABOUT</p> 
            <p className="link">STORE</p> 
          </div>
          <div className="flex space-x-4 items-center" >
            <p className="link">GMAIL</p>
            <p className="link">IMAGES</p>
            <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-black cursor-pointer" />
            <Avatar url="https://i.psnprofiles.com/games/5ab0bd/L94b503.png" />
          </div>
        </header>
      {/* BODY */}
        <form className="bg-dark-900 flex flex-col items-center h-96 w-full flex-grow" >
          <Image src="https://upload.wikimedia.org/wikipedia/commons/9/95/Transparent_google_logo_2015.png" height="100" width="300" />
          <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-full max-w-md rounded-full border-gray-700 border px-5 py-3 items-center sm:max-w-xl lg:mx-w-2xl" >
            <SearchIcon className="h-5 mr-3 text-gray-500" />
            <input ref={searchInputRef} type="text" className="flex-grow bg-[#0f0f0f] text-white focus:outline-none" />
            <MicrophoneIcon className="h-5 text-gray-500" />
          </div>
          <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 items-center" >
            <button className="button" onClick={search} >Google Search</button>
            <button className="button" onClick={search} >I'm Feeling Lucky</button>
          </div>
        </form>
      {/* FOOTER */}
      <Footer/>
    </div>
  )
}
