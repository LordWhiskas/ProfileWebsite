'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import styles from './Home.module.css';
import Image from "next/legacy/image";
import NavBar from "@/app/components/NavBar"; // Импорт CSS модуля

const timelineData = [
    {
        side: "left",
        title: "Started University",
        subtitle: "[Bachelor's degree]",
        description: "I began my studies at Technical University in Kosice, majoring in Intelligent Systems.",
        link: {
            href: "https://www.tuke.sk/wps/portal/tuke/!ut/p/z1/dYzBCsIwEES_ptfsUttSvAW8WNrag9C6F0klpsWYlDQa8OsNeBJ0bm94M0AwABnxnJXwszVCRz5Rca55nqVVhs2hLFLk3f7Y7rKma3OEHggoKvgnHKECUtqOnzduxk2pgJy8Sicde7hYT94v6zbBBEMITFmrtGQXe0_w12Syq4fh24TlZl617Pkbm8CYdQ!!/dz/d5/L0lDUmlTUSEhL3dHa0FKRnNBLzROV3FpQSEhL2Vu/",
        },
        date: "September 2021 - till now",
        technologies: []
    },
    {
        side: "right",
        title: "HackKosice 2023",
        subtitle: "[Full-stack Developer]",
        description: "My team and I take part in HackKosice, 2023. Our theme was an AI comics generator. It was a great experience!",
        link: {
            href: "https://hackkosice.com/2023/",
        },
        date: "April 2023",
        technologies: ["JavaScript", "Node.js", "React", "MongoDB Atlas", "Git"]
    },
    {
        side: "left",
        title: "Analysis of Hierarchical Structures in Capsule Neural Networks",
        subtitle: "[Bc. thesis work]",
        description: "",
        link: {
            href: "https://github.com/LordWhiskas/Visualization-Capsule-Neural-Networks",
        },
        date: "September 2023 - till now",
        technologies: ["Python", "Pytorch", "Flask", "Dash", "NetworkX", "Git"]
    },
    {
        side: "right",
        title: "UvoCorp",
        subtitle: "[Middle developer]",
        description: "UvoCorp is an academic platform, where people can place orders and writers can complete them.",
        link: {
            href: "https://www.uvocorp.com/",
        },
        date: "March 2024 - June 2024",
        technologies: ["Python", "Git", "JavaScript", "C", "C#"]
    },
    {
        side: "left",
        title: "Infobip",
        subtitle: "[Software Engineer Intern]",
        description: "Infobip is a global leader in omnichannel communication. Worked as part of a team to develop an internal tool that aggregates data from multiple databases into a single web application, simplifying the data analysis process for the business side of the company.",
        link: {
            href: "https://www.infobip.com/company",
        },
        date: "June 2024 - September 2024",
        technologies: ["C#", "JavaScript", "TypeScript", "React", "Agile", "TeamWork", "Bridging"]
    },
    {
        side: "right",
        title: "Infobip",
        subtitle: "[Junior Software Engineer]",
        description: "After successfully completing the internship, I join the same team, but as a Junior Software Engineer.",
        link: {
            href: "https://www.infobip.com/company",
        },
        date: "September 2024 - till now",
        technologies: ["C#", "JavaScript", "TypeScript", "React", "Agile", "TeamWork"]
    },
];

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

        if (timelineRef.current) {
            timelineRef.current.scrollTop = timelineRef.current.scrollHeight;
            setTimeout(() => {
                timelineRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 1000);
        }

        return () => {
            items.forEach(item => observer.unobserve(item));
        };
    }, []);

    return (
        <div className="h-screen w-full bg-white relative flex overflow-hidden">
            <NavBar />
            <div className="w-full h-full flex flex-col justify-between">
                <header
                    className="h-16 w-full flex items-center relative justify-end px-5 md:px-25 space-x-4 bg-gray-800">
                    <div className="flex flex-shrink-0 items-center space-x-2 text-white">
                        <Link href="/">
                            <Image alt="profile image" src="/avatar.png" width={50} height={50} priority={true}
                                   className="h-10 w-10 rounded-full cursor-pointer border-2 border-blue-400"></Image>
                        </Link>
                        <div className="flex flex-col items-end">
                            <div className="text-lg font-medium">Kyryl Zuiev</div>
                        </div>
                    </div>
                </header>
                <main className="w-full h-full flex flex-col justify-start p-4 md:p-8 bg-gray-100 overflow-y-auto" ref={timelineRef}>
                    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 rounded-lg shadow-lg bg-white">
                        <h1 className="text-4xl font-bold mb-12 text-center">My Professional Timeline</h1>
                        <div className={styles.timeline}>
                            {timelineData.map((item, index) => (
                                <div key={index} className={`${styles.timelineItem} ${styles[item.side]}`}>
                                    <div className={styles.timelineIcon}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className={styles.timelineContent}>
                                        {item.link ? (
                                            <Link href={item.link.href} className="text-cyan-600">
                                                <h2 className="text-2xl font-semibold">{item.title}</h2>
                                            </Link>
                                        ) : (
                                            <h2 className="text-2xl font-semibold">{item.title}</h2>
                                        )}
                                        <h2 className="text-xl font-semibold mb-2">{item.subtitle}</h2>
                                        <p>{item.description}</p>
                                        {item.technologies.length > 0 && (
                                            <>
                                                <p>Technologies:</p>
                                                <p className="font-semibold">{item.technologies.join(", ")}</p>
                                            </>
                                        )}
                                        <span className={styles.timelineDate}>{item.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
