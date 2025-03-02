"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import img from "@/Images/imgae.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home2() {
    const textRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            }
        );

        gsap.fromTo(
            imgRef.current,
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    return (
        <div id="about" className="container mx-auto px-4 sm:px-6 lg:px-[10vw] py-6 md:py-12 flex flex-col md:flex-row items-center gap-6">
            {/* Text Section */}
            <div ref={textRef} className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center gap-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Us</h1>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                    [Company Name] is a dynamic technology company that empowers businesses to unlock actionable insights
                    through our full custom AI/ML solutions in Signal, Image, and Video processing analytics. Our platform
                    also provides an immersive learning experience, equipping school students, undergraduate and graduate
                    students, and working professionals with the latest skills in STEM fields, AI/ML, and emerging technologies.
                </p>
            </div>

            {/* Image Section */}
            <div ref={imgRef} className="w-full md:w-1/2 flex justify-center items-center">
                <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-48 sm:h-64 md:h-80 lg:h-[50vh]">
                    <Image
                        src={img}
                        alt="AI Learning Illustration"
                        className="object-contain"
                        fill
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
