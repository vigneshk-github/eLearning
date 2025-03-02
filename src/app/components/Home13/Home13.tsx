"use client";
import React, { JSX, useEffect, useRef } from "react";
import { FaRobot, FaBrain, FaCogs, FaMicroscope, FaChartLine, FaLightbulb } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SyllabusItem {
    title: string;
    icon: JSX.Element;
    points: string[];
}

const syllabus: SyllabusItem[] = [
    {
        title: "AI Awakening",
        icon: <FaLightbulb className="text-4xl text-blue-600" />,
        points: ["What is AI? (And what isn't?)", "Brief history of AI", "Problems in the real-world"],
    },
    {
        title: "Machine Minds",
        icon: <FaBrain className="text-4xl text-red-600" />,
        points: ["How humans think & learn", "How machines learn?", "Machines can see and hear!"],
    },
    {
        title: "AI in Action",
        icon: <FaCogs className="text-4xl text-green-600" />,
        points: ["AI in healthcare, education", "AI in gaming, sports etc.", "AI changing the world!!!"],
    },
    {
        title: "AI Creators",
        icon: <FaRobot className="text-4xl text-purple-600" />,
        points: ["Intro to no-code platforms", "Build AI models without coding", "Visualize and analyze"],
    },
    {
        title: "AI Insights",
        icon: <FaMicroscope className="text-4xl text-yellow-600" />,
        points: ["How humans make decisions", "Bias, intuition, and logic", "Decision tree, rules, hyperplanes"],
    },
    {
        title: "AI Metrics",
        icon: <FaChartLine className="text-4xl text-pink-600" />,
        points: ["Intro to learning methods", "Evaluating AI performance", "Evaluation metrics"],
    },
];


const HyderabadMap: React.FC = () => {
    return (
        <div className="w-full flex justify-center mt-16">
            <iframe
                title="Aparna CyberZone Location"
                className="w-full max-w-4xl h-96 rounded-lg shadow-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.710974879911!2d78.3680289747196!3d17.432459483142075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93edb4c4a3cd%3A0x69bb7aaf1e4ae3f3!2sAparna%20CyberZone!5e0!3m2!1sen!2sin!4v1709394821136!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
            ></iframe>
        </div>
    );
};

const Home13: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%",
                    end: "bottom 60%",
                    toggleActions: "play none none none",
                },
            }
        );

        gsap.fromTo(
            cardRefs.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 90%",
                    end: "bottom 60%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    return (
        <div
            ref={sectionRef}
            className="bg-white text-black min-h-screen flex flex-col items-center py-16 px-6 md:px-12 lg:px-20 opacity-0"
        >
            <div className="text-center max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Syllabus</h2>
                <p className="text-lg md:text-xl text-gray-600">
                    Our comprehensive 2-month program covers the fundamentals of Artificial Intelligence through hands-on learning and real-world projects.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl">
                {syllabus.map((module, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) cardRefs.current[index] = el;
                        }}
                        className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 opacity-0"
                    >
                        {module.icon}
                        <h3 className="text-xl font-semibold mt-4">{module.title}</h3>
                        <ul className="mt-3 text-gray-700 text-sm md:text-base space-y-2">
                            {module.points.map((point, idx) => (
                                <li key={idx} className="leading-relaxed">• {point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <HyderabadMap />
        </div>
    );
};

export default Home13;
