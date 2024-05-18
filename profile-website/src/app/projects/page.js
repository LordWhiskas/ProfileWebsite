'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import NavBar from "@/app/components/NavBar"; // Импорт CSS модуля

export default function Projects() {
    const pathname = usePathname();

    return (
        <div className="h-screen w-full bg-white relative flex overflow-hidden">
            <NavBar/>
            <div className="w-full h-full flex flex-col justify-between">
                <header className="h-16 w-full flex items-center relative justify-end px-5 md:px-25 space-x-4 bg-gray-800">
                    <div className="flex flex-shrink-0 items-center space-x-2 text-white">
                        <Link href="/">
                            <Image alt="profile image" src="/avatar.png" width="564" height="564"
                                   className="h-10 w-10 rounded-full cursor-pointer border-2 border-blue-400"></Image>
                        </Link>
                        <div className="flex flex-col items-end">
                            <div className="text-lg font-medium">Kyryl Zuiev</div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
}