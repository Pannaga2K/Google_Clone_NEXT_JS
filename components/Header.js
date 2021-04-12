import { XIcon, MicrophoneIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useRouter } from "next/router";
import { useRef } from 'react';
import {SearchIcon} from "@heroicons/react/outline";
import Avatar from './Avatar';
import HeaderOptions from './HeaderOptions';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-dark-900" >
            <div className="flex w-full p-6 items-center " >
                <Image className="cursor-pointer" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" height={40} width={120} onClick={() => router.push("/")} />
                <form className="flex flex-grow border border-gray-500 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5" >
                    <input ref={searchInputRef} className="flex-grow w-full focus:outline-none bg-dark-900 text-white" type="text" />
                    <XIcon className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 sm:mr-3" onClick={() => searchInputRef.current.value = ""} />
                    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex " />
                    <button hidden type="submit" onClick={search} >SEARCH</button>
                </form>
                <Avatar className="ml-auto" url="https://i.psnprofiles.com/games/5ab0bd/L94b503.png" />
            </div>
            <HeaderOptions/>
        </header>
    )
}

export default Header;
