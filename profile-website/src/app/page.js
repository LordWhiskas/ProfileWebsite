'use client'

import Link from "next/link";
import {usePathname} from 'next/navigation';
import {useEffect, useRef} from 'react';
import styles from './Home.module.css';
import Image from "next/legacy/image";
import NavBar from "@/app/components/NavBar"; // Импорт CSS модуля

export default function Home() {
    const pathname = usePathname();
    const timelineRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.05,
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                } else {
                    entry.target.classList.remove(styles.visible);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const items = timelineRef.current.querySelectorAll(`.${styles.timelineItem}`);
        items.forEach(item => observer.observe(item));

        // Устанавливаем начальную позицию скролла в нижнюю часть
        if (timelineRef.current) {
            timelineRef.current.scrollTop = timelineRef.current.scrollHeight;

            // Плавный скролл вверх при загрузке страницы
            setTimeout(() => {
                timelineRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 1000); // Задержка в 1 секунду перед началом скролла вверх
        }

        return () => {
            items.forEach(item => observer.unobserve(item));
        };
    }, []);

    return (
        <div className="h-screen w-full bg-white relative flex overflow-hidden">
            <NavBar/>
            <div className="w-full h-full flex flex-col justify-between">
                <header
                    className="h-16 w-full flex items-center relative justify-end px-5 md:px-25 space-x-4 bg-gray-800">
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
                <main
                    className="w-full h-full flex flex-col justify-start p-4 md:p-8 bg-gray-100 overflow-y-auto"
                    ref={timelineRef}>
                    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 rounded-lg shadow-lg bg-white">
                        <h1 className="text-4xl font-bold mb-12 text-center">My Professional Timeline</h1>
                        <div className={styles.timeline}>
                            <div className={`${styles.timelineItem} ${styles.left}`}>
                                <div className={styles.timelineIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                                <div className={styles.timelineContent}>
                                    <h2 className="text-2xl font-semibold">Started University</h2>
                                    <h2 className="text-xl font-semibold mb-2">[Bachelor&apos;s degree]</h2>
                                    <p>I began my studies at <a className={"text-cyan-600"} href={"https://www.tuke.sk/wps/portal/tuke/!ut/p/z1/dYzBCsIwEES_ptfsUttSvAW8WNrag9C6F0klpsWYlDQa8OsNeBJ0bm94M0AwABnxnJXwszVCRz5Rca55nqVVhs2hLFLk3f7Y7rKma3OEHggoKvgnHKECUtqOnzduxk2pgJy8Sicde7hYT94v6zbBBEMITFmrtGQXe0_w12Syq4fh24TlZl617Pkbm8CYdQ!!/dz/d5/L0lDUmlTUSEhL3dHa0FKRnNBLzROV3FpQSEhL2Vu/"}>Technical University in Kosice</a>, majoring in Intelligent
                                        Systems.</p>
                                    <span className={styles.timelineDate}>September 2021</span>
                                </div>
                            </div>
                            <div className={`${styles.timelineItem} ${styles.right}`}>
                                <div className={styles.timelineIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                                <div className={styles.timelineContent}>
                                    <h2 className="text-2xl font-semibold"><a className={"text-cyan-600"} href={"https://hackkosice.com/2023/"}>HackKosice 2023</a></h2>
                                    <h2 className="text-xl font-semibold mb-2">[Full-stack Developer]</h2>
                                    <p className="mb-2">My team and I take part in HackKosice, 2023. Our theme was
                                        an <b>AI comics
                                            generator.</b> It was a great experience!</p>
                                    <p>Technologies:</p>
                                    <p className="font-semibold">JavaScript, Node.js, React, MongoDB Atlas, Git.</p>
                                    <span className={styles.timelineDate}>April 2023</span>
                                </div>
                            </div>
                            <div className={`${styles.timelineItem} ${styles.left}`}>
                                <div className={styles.timelineIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                                <div className={styles.timelineContent}>
                                    <Link className={"text-cyan-600"} href={"https://github.com/LordWhiskas/Visualization-Capsule-Neural-Networks"}>
                                        <h2 className="text-2xl font-semibold">Analysis of Hierarchical Structures in
                                            Capsule Neural Networks</h2>
                                    </Link>
                                    <h2 className="text-xl font-semibold mb-2">[Bc. thesis work]</h2>
                                    <p>Technologies:</p>
                                    <p className="font-semibold">Python, Pytorch, Flask, Dash, NetworkX, Git.</p>
                                    <span className={styles.timelineDate}>September 2023</span>
                                </div>
                            </div>
                            <div className={`${styles.timelineItem} ${styles.right}`}>
                                <div className={styles.timelineIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                                <div className={styles.timelineContent}>
                                    <h2 className="text-2xl font-semibold">Hackathon Telekom 2023</h2>
                                    <h2 className="text-xl font-semibold mb-2">[Full-stack Developer]</h2>
                                    <p className="mb-2">My team and I take part in Hackathon Telekom, 2023. Our theme
                                        was an <b>UI/UX Park
                                            System.</b></p>
                                    <p>Technologies:</p>
                                    <p className="font-semibold">JavaScript, Node.js, React, MongoDB Atlas, Git.</p>
                                    <span className={styles.timelineDate}>November, 2023</span>
                                </div>
                            </div>
                            <div className={`${styles.timelineItem} ${styles.left}`}>
                                <div className={styles.timelineIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                                <div className={styles.timelineContent}>
                                    <Link className={"text-cyan-600"} href={"https://github.com/LordWhiskas/Vercel-Web-AI-Shop-App"}>
                                    <h2 className="text-2xl font-semibold">E-Commerce AI Web Application</h2>
                                    </Link>
                                    <h2 className="text-xl font-semibold mb-2">[Full-stack Developer]</h2>
                                    <p>Technologies:</p>
                                    <p className="font-semibold">Python, React, Node.js, JavaScript, Vercel, Git,
                                        MongoDB Atlas, OpenAI API.</p>
                                    <span className={styles.timelineDate}>November 2023</span>
                                </div>
                            </div>
                            <div className={`${styles.timelineItem} ${styles.right}`}>
                                <div className={styles.timelineIcon}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M5 13l4 4L19 7"/>
                                    </svg>
                                </div>
                                <div className={styles.timelineContent}>
                                    <h2 className="text-2xl font-semibold">UvoCorp</h2>
                                    <h2 className="text-xl font-semibold mb-2">[Middle developer(Python, C, C#,
                                        JavaScript)]</h2>
                                    <p>UvoCorp is an academic platform, where people can place orders and writers can
                                        complete them.</p>
                                    <span className={styles.timelineDate}>March 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}