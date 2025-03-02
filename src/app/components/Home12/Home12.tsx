"use client";
import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "@/Images/ai creators.jpg";
import img2 from "@/Images/ai insights.jpg";
import img3 from "@/Images/ai metrics.png";
import img4 from "@/Images/aiawakening.jpg";
import img5 from "@/Images/aiin action.jpg";
import img6 from "@/Images/feedback.jpg";

gsap.registerPlugin(ScrollTrigger);

interface Feature {
    title: string;
    image: StaticImageData;
}

const features: Feature[] = [
    { title: "Problem Understanding", image: img1 },
    { title: "Hands-on Learning", image: img2 },
    { title: "Mini-projects", image: img3 },
    { title: "Simplifying Complexity", image: img4 },
    { title: "Online & Offline Learning", image: img5 },
    { title: "Evaluation & Feedback", image: img6 },
];

const Home12: React.FC = () => {
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
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Why Join Our Program?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {features.map((item, index) => (
                    <div
                        key={index}
                        ref={(el) => {
                            if (el) cardRefs.current[index] = el;
                        }}
                        className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 opacity-0"
                    >
                        {/* Image */}
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={400}
                            className="w-full h-64 object-cover rounded-xl"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-white text-2xl font-semibold text-center">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home12;
