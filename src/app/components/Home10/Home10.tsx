"use client";
import React, { useEffect, useRef } from "react";
import { CalendarIcon, ClockIcon, ComputerIcon, UsersIcon, MapPinIcon, DollarSignIcon } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Home10: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        // Fade-in effect for the section
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

        // Staggered slide-in effect for details
        gsap.fromTo(
            cardRefs.current,
            { opacity: 0, x: -30 },
            {
                opacity: 1,
                x: 0,
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

        // Button animation on hover
        if (buttonRef.current) {
            gsap.fromTo(
                buttonRef.current,
                { scale: 1 },
                {
                    scale: 1.05,
                    duration: 0.3,
                    ease: "power3.out",
                    paused: true,
                    overwrite: true,
                }
            );

            buttonRef.current.addEventListener("mouseenter", () => gsap.to(buttonRef.current, { scale: 1.1 }));
            buttonRef.current.addEventListener("mouseleave", () => gsap.to(buttonRef.current, { scale: 1 }));
        }
    }, []);

    const iconClass = "w-6 h-6 mr-3 text-blue-600";

    return (
        <div id="enroll" ref={sectionRef} className="min-h-screen flex items-center justify-center p-4 opacity-0">
            <div className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden">
                {/* Header Section */}
                <div className="p-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Enroll in AI for Juniors Program</h1>
                    <p className="flex justify-center items-center text-lg md:text-xl max-w-4xl mx-auto text-center leading-relaxed">
                        We plan to launch a summer program for gated communities in Telangana, offering both online and
                        offline learning options to provide students with a flexible, engaging, and collaborative environment
                        for exploring AI, fostering curiosity and innovation within their residential spaces.
                    </p>
                </div>

                {/* Program Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {[
                            { icon: <UsersIcon className={iconClass} />, title: "Target Audience", text: "8th, 9th & 10th Grade Students", bg: "bg-blue-50" },
                            { icon: <CalendarIcon className={iconClass} />, title: "Program Schedule", text: "April - May (Fri, Sat & Sun)", bg: "bg-green-50" },
                            { icon: <ClockIcon className={iconClass} />, title: "Class Time", text: "10 AM - 1 PM", bg: "bg-purple-50" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) cardRefs.current[index] = el;
                                }}
                                className={`flex items-center p-4 rounded-lg ${item.bg} opacity-0`}
                            >
                                {item.icon}
                                <div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-gray-600">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {[
                            { icon: <ComputerIcon className={iconClass} />, title: "Learning Modes", text: "Hybrid (Online & Offline)", bg: "bg-yellow-50" },
                            { icon: <MapPinIcon className={iconClass} />, title: "Location", text: "Aparna, Nallagandla", bg: "bg-red-50" },
                            { icon: <DollarSignIcon className={iconClass} />, title: "Program Cost", text: "6,000 INR", bg: "bg-indigo-50" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    if (el) cardRefs.current[index + 3] = el;
                                }}
                                className={`flex items-center p-4 rounded-lg ${item.bg} opacity-0`}
                            >
                                {item.icon}
                                <div>
                                    <h3 className="font-semibold">{item.title}</h3>
                                    <p className="text-gray-600">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enroll Button */}
                <div className="text-center py-6">
                    <button
                        ref={buttonRef}
                        className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
                    >
                        <Link href="/registration">Enroll Now</Link>

                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home10;
