"use client";
import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img from "@/Images/image1.png";
import img1 from "@/Images/image7.png";
import img2 from "@/Images/image10.png";

gsap.registerPlugin(ScrollTrigger);

interface Benefit {
    title: string;
    image: StaticImageData;
}

const benefits: Benefit[] = [
    { title: "AI for Juniors", image: img },
    { title: "AI for UG/PG", image: img1 },
    { title: "AI for Professionals", image: img2 },
];

const Home3: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

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
                    start: "top 90%", // Adjusted for mobile screens
                    end: "bottom 60%",
                    toggleActions: "play none none none",
                },
            }
        );

        gsap.fromTo(
            cardRefs.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%", // Adjusted for mobile
                    end: "bottom 60%",
                    toggleActions: "play none none none",
                },
            }
        );

        if (buttonRef.current) {
            gsap.fromTo(
                buttonRef.current,
                { scale: 1 },
                {
                    scale: 1.05,
                    repeat: -1,
                    yoyo: true,
                    duration: 1.5,
                    ease: "power1.inOut",
                }
            );
        }
    }, []);

    return (
        <div
            id="early"
            ref={sectionRef}
            className="flex flex-col min-h-screen px-4 md:px-8 lg:px-16 py-16 justify-center items-center gap-8 md:gap-10 opacity-0"
        >
            <div className="flex flex-col w-full max-w-4xl mx-auto text-center gap-4 md:gap-5">
                <p className="text-4xl md:text-5xl font-bold mb-4">Our Course Offerings</p>
                <p className="text-base md:text-lg lg:text-xl max-w-6xl mx-auto">
                    AI and STEM education unlock a world of possibilities, offering exciting career prospects, fostering
                    innovation, enhancing problem-solving skills, and deepening our understanding of the world. By embracing these
                    fields, you will be at the forefront of revolutionizing technology and shaping a brighter future.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-6xl">
                {benefits.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) cardRefs.current[index] = el;
                        }}
                        className="flex flex-col bg-black text-white font-bold rounded-lg overflow-hidden opacity-0"
                    >
                        <p className="text-lg md:text-xl font-medium text-center py-4">{item.title}</p>
                        <div className="relative w-full h-40 md:h-48 lg:h-56">
                            <Image src={item.image} alt={`${item.title} Icon`} fill className="object-cover" />
                        </div>
                    </div>
                ))}
            </div>

            
        </div>
    );
};

export default Home3;
