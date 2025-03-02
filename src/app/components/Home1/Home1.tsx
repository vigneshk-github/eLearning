"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import img from "@/Images/image2.png";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home1() {
    const textRef = useRef(null);
    const btnRef = useRef(null);
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
                },
            }
        );

        gsap.fromTo(
            btnRef.current,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: btnRef.current,
                    start: "top 85%",
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
                    start: "top 75%",
                },
            }
        );
    }, []);

    return (
        <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 sm:h-[80vh] h-[100vh] flex items-center">
            <div className="container mx-auto px-4 lg:px-16 py-16 md:py-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div ref={textRef} className="flex flex-col space-y-6 text-center md:text-left">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-4">
                                <span className="block">
                                    <p className="text-orange-400">Learn.</p>
                                    <p className="text-green-400">Create.</p>
                                </span>
                                <span className="block text-blue-500">Innovate.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:mx-0">
                                A platform delivering innovative technological
                                solutions and engaging learning experiences.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div ref={btnRef} className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                            <Button className="w-full sm:w-auto shadow-md hover:shadow-lg transition-all duration-300">
                                <Link href="/#early">Explore Courses</Link>
                            </Button>
                            <Button className="w-full sm:w-auto shadow-md hover:shadow-lg transition-all duration-300" variant="outline">
                                <Link href="/#enroll">Plan of Action</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Image Container */}
                    <div ref={imgRef} className="flex justify-center items-center">
                        <div className="relative w-full max-w-md mx-auto">
                            <Image
                                src={img}
                                alt="Hero Image"
                                layout="responsive"
                                priority
                                className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-200 rounded-full blur-3xl animate-pulse"></div>
            </div>
        </div>
    );
}
