'use client'

import Link from "next/link";
import { useState, useEffect } from 'react';
import NavBar from "@/app/components/NavBar";
import Image from "next/legacy/image";

// Sample projects array
const projects = [
    {
        id: 1,
        name: "Interactive-visualization-tool-for-Capsule-NN",
        imageUrl: "/capsule-project.png", // Replace with your actual image paths
        projectUrl: "",
        githubUrl: "https://github.com/LordWhiskas/Visualization-Capsule-Neural-Networks"
    },
    {
        id: 2,
        name: "Profile-Website",
        imageUrl: "/profile-website.png",
        projectUrl: "/",
        githubUrl: "https://github.com/LordWhiskas/ProfileWebsite"
    },
    {
        id: 3,
        name: "Vercel-Web-AI-Shop-App",
        imageUrl: "/vercel-ai-shop.png",
        projectUrl: "https://vercel-web-ai-shop-app.vercel.app/",
        githubUrl: "https://github.com/LordWhiskas/Vercel-Web-AI-Shop-App",
    },
    {
        id: 4,
        name: "Webots-EchoSphereRobot",
        imageUrl: "/webots.png",
        projectUrl: "",
        githubUrl: "https://github.com/LordWhiskas/Webots-EchoSphereRobot",
    },
    {
        id: 5,
        name: "ICD_Machine_Learning",
        imageUrl: "/icd.png",
        projectUrl: "",
        githubUrl: "https://github.com/LordWhiskas/ICD_Machine_Learning",
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isDesktop, setIsDesktop] = useState(false);

    // Обновление состояния при изменении размера экрана
    useEffect(() => {
        const updateMedia = () => {
            setIsDesktop(window.innerWidth >= 768); // 768px - медиазапрос для Tailwind
        };

        updateMedia();
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    }, []);

    const handleClick = (projectId, e) => {
        if (!isDesktop) {
            if (selectedProject === projectId) {
                // If the same project is clicked again, allow the default action (navigate to link)
                return;
            } else {
                // Prevent the default action and select the project
                e.preventDefault();
                setSelectedProject(projectId);
            }
        }
    };

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
                <main className="w-full h-full flex flex-col justify-start p-3 md:p-14 bg-gray-100 overflow-y-auto">
                    <div className="w-full flex flex-wrap items-start justify-start gap-20">
                        {projects.map(project => (
                            <div key={project.id}
                                 onClick={(e) => handleClick(project.id, e)}
                                 className="w-full md:w-96 h-60 rounded-lg flex-shrink-0 flex-grow bg-white shadow-lg relative group cursor-pointer md:hover:scale-110 transition duration-300 ease-in-out">
                                <Image src={project.imageUrl} alt={project.name} layout="fill" objectFit="cover" priority={true}
                                       className="rounded-lg" />
                                <div
                                    className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-50 text-white text-center rounded-b-lg">
                                    {project.name}
                                </div>
                                <div
                                    className={`absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 transition duration-300 ease-in-out space-y-4 rounded-lg ${
                                        selectedProject === project.id ? "opacity-100" : "opacity-0"
                                    } md:opacity-0 md:group-hover:opacity-100`}>
                                    <a href={project.githubUrl} onClick={(e) => isDesktop ? null : handleClick(project.id, e)} className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-700 transition">
                                        GitHub
                                    </a>
                                    {project.projectUrl && (
                                        <a href={project.projectUrl} onClick={(e) => isDesktop ? null : handleClick(project.id, e)} className="text-white bg-green-500 px-4 py-2 rounded hover:bg-green-700 transition">
                                            View Project
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
