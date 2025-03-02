"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home8: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Fade-in effect for section
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

        // Staggered effect for cards
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

    const limitations = [
        {
            title: "Lack of Skill Development",
            description: "Existing approaches often focus on theoretical concepts without fostering real-world problem-solving skills essential for AI applications.",
            icon: "🛠️",
        },
        {
            title: "Less Engaging",
            description: "The lack of interactive and hands-on learning methods makes AI education less engaging and harder to relate to practical scenarios.",
            icon: "🧩",
        },
        {
            title: "Interdisciplinary Connection Missing",
            description: "Current curricula fail to emphasize the interdisciplinary nature of AI, limiting students' understanding of its integration with fields like gaming, healthcare, economics, art, finance etc.",
            icon: "🔗",
        },
    ];

    return (
        <div id="limitations" ref={sectionRef} className="min-h-screen bg-white text-black flex items-center justify-center p-4 opacity-0">
            <div className="w-full max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 border-black pb-4">Limitations of Current Approach</h1>
                <div className="grid md:grid-cols-3 gap-8">
                    {limitations.map((limitation, index) => (
                        <div
                            key={index}
                            ref={(el) => {
                                if (el) cardRefs.current[index] = el;
                            }}
                            className="bg-gray-100 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl opacity-0"
                        >
                            <div className="text-5xl mb-4 text-center">{limitation.icon}</div>
                            <h2 className="text-2xl font-semibold mb-4 text-center border-b border-gray-300 pb-2">
                                {limitation.title}
                            </h2>
                            <p className="text-gray-700 text-center">{limitation.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home8;
