"use client";

import { useEffect, useRef, Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Group } from "three";

gsap.registerPlugin(ScrollTrigger);

function Model() {
    const { scene } = useGLTF("/models/ai.glb");
    const modelRef = useRef<Group>(null);

    useFrame(({ clock }) => {
        if (modelRef.current) {
            const t = clock.getElapsedTime();
            const a = 0.5; // Width of the 8 shape
            const b = 0.3; // Depth of the 8 shape

            modelRef.current.position.x = a * Math.sin(t);
            modelRef.current.position.z = b * Math.sin(2 * t);
            modelRef.current.position.y = Math.sin(t * 0.5) * 0.2 - 3; // Floating effect
        }
    });

    return <primitive ref={modelRef} object={scene} scale={0.03} position={[0, -3, 0]} />;
}

export default function Home1() {
    const textRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (textRef.current && btnRef.current) {
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
        }
    }, []);

    return (
        <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 sm:h-[80vh] h-[100vh] flex items-center px-4 sm:px-8 md:px-32">
            <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
                {/* Text Content */}
                <div ref={textRef} className="flex flex-col space-y-6 text-center md:text-left max-w-lg">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                        <span className="block">
                            <p className="text-orange-400">Learn.</p>
                            <p className="text-green-400">Create.</p>
                        </span>
                        <span className="block text-blue-500">Innovate.</span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600">
                        A platform delivering innovative technological solutions and engaging learning experiences.
                    </p>

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

                {/* 3D Model */}
                <div className="w-full md:w-1/2 h-64 sm:h-80 lg:h-96 flex justify-center items-center">
                    <Canvas>
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[2, 2, 2]} />
                            <Model />
                            <OrbitControls enableZoom={false} enableRotate={false} />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </div>
    );
}
