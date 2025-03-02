"use client";
import React, { JSX, useEffect, useRef } from "react";
import { FaUsers, FaLaptopCode, FaBrain, FaLightbulb } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Section {
    title: string;
    description: string;
    icon: JSX.Element;
}

const sections: Section[] = [
    {
        title: "Who can join?",
        description: "Perfect for students in grades 8-10 who are eager to explore AI.",
        icon: <FaUsers className="text-4xl text-blue-500" />,
    },
    {
        title: "Prerequisites?",
        description: "No prior programming experience required. Just a curious mind and a passion to learn.",
        icon: <FaLaptopCode className="text-4xl text-green-500" />,
    },
    {
        title: "Early Exposure?",
        description: "Nurtures critical thinking, creativity, and innovation in young minds.",
        icon: <FaBrain className="text-4xl text-red-500" />,
    },
    {
        title: "Learning",
        description: "Interactive and engaging learning experiences.",
        icon: <FaLightbulb className="text-4xl text-yellow-500" />,
    },
];

const Home11: React.FC = () => {
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
                duration: 1.2,
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
                stagger: 0.3,
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
                <h2 className="text-4xl md:text-5xl font-bold mb-6">What is AI for Juniors?</h2>
                <p className="text-lg md:text-xl leading-relaxed">
                    This is a live, online and offline 2-month program for school students in Artificial Intelligence, curated by the
                    faculty and alumnus of IIT Hyderabad. We will be teaching the students the foundational AI concepts, and their
                    underlying philosophy. Through interactive, engaging, and hands-on learning experiences, students will gain a
                    comprehensive understanding of AI principles and their applications.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl w-full">
                {sections.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) cardRefs.current[index] = el;
                        }}
                        className="bg-gray-100 p-6 rounded-lg shadow-lg text-center flex flex-col items-center transition-transform duration-300 hover:scale-105 opacity-0"
                    >
                        {item.icon}
                        <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
                        <p className="text-lg mt-2">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home11;
