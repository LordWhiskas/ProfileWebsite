'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import styles from './Home.module.css'; // Импорт CSS модуля

export default function Home() {
    const pathname = usePathname();
    const timelineRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
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
            <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
                <Link href="/">
                    <div
                        className={`h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white ${
                            pathname === "/" ? "border-2 border-white-400" : ""
                        }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </div>
                </Link>

                <Link href="/projects">
                    <div
                        className={`h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white ${
                            pathname === "/projects" ? "border-2 border-white-400" : ""
                        }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                </Link>
            </aside>

            <div className="w-full h-full flex flex-col justify-between">
                <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
                    <div className="flex flex-shrink-0 items-center space-x-4 text-white">
                        <div className="flex flex-col items-end">
                            <div className="text-md font-medium">Kyryl Zuiev</div>
                        </div>
                        <Link href="/">
                            <img
                                className="h-10 w-10 rounded-full cursor-pointer border-2 border-blue-400"
                                src="/avatar.png" // Укажите путь к вашему изображению
                                alt="Profile"
                            />
                        </Link>
                    </div>
                </header>

                <main className="max-w-full h-full flex flex-col items-center justify-start p-8 bg-gray-100 overflow-y-auto" ref={timelineRef}>
                    <div className="w-full max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-white">
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
                                    <h2 className="text-xl font-semibold mb-2">[Bachelor's degree]</h2>
                                    <p>I began my studies at Technical University in Kosice, majoring in Intelligent
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
                                    <h2 className="text-2xl font-semibold">HackKosice 2023</h2>
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
                                    <h2 className="text-2xl font-semibold">Analysis of Hierarchical Structures in Capsule Neural Networks</h2>
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
                                    <h2 className="text-2xl font-semibold">E-Commerce AI Web Application</h2>
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
