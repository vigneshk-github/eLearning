"use client"
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
                <div className={`flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-10 transition-all duration-300 
                    ${isScrolled
                        ? 'bg-black/80 backdrop-blur-md shadow-lg'
                        : 'bg-black'
                    } 
                    text-white mt-2 py-3 sm:py-5 mx-4 sm:mx-8 lg:mx-12 rounded-full`}>
                    <div className="flex items-center">
                        Logo
                    </div>

                    <button
                        className="lg:hidden p-2 hover:bg-black/90 rounded-full transition-colors"
                        onClick={() => setIsSidebarOpen(true)}
                        aria-label="Open menu"
                    >
                        <Menu className="h-6 w-6" />
                    </button>

                    <div className="hidden lg:flex items-center space-x-[20vw] flex-grow justify-center">
                        <Link href="/">
                            <p className="hover:text-white/80 text-xl cursor-pointer transition-colors">Home</p>
                        </Link>

                        <Link href="#section">
                            <p className="hover:text-white/80 text-xl cursor-pointer transition-colors">Contact Us</p>
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        <SignedOut>
                            <SignInButton mode="modal">
                                <Button variant="secondary" className="hover:bg-white/90 transition-colors">
                                    Sign In
                                </Button>
                            </SignInButton>
                            <SignInButton mode="modal">
                                <Button variant="secondary" className="hover:bg-white/90 transition-colors">
                                    Sign Up
                                </Button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton
                                afterSignOutUrl="/"
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: "w-10 h-10"
                                    }
                                }}
                            />
                        </SignedIn>
                    </div>
                </div>

                <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-xl font-semibold">Menu</h2>
                        <button
                            onClick={() => setIsSidebarOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="flex flex-col p-4">
                        <div className="space-y-4">
                            <Link href="/">
                                <p className="hover:text-white cursor-pointer transition-colors px-4 py-2 hover:bg-black rounded-lg">
                                    Home
                                </p>
                            </Link>
                            <Link href="#section">
                                <p className="hover:text-white cursor-pointer transition-colors px-4 py-2 hover:bg-black rounded-lg">
                                    Contact Us
                                </p>
                            </Link>
                        </div>

                        <div className="flex flex-col space-y-2 mt-8">
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <Button className="w-full bg-black text-white hover:bg-black/90">
                                        Sign In
                                    </Button>
                                </SignInButton>
                                <SignInButton mode="modal">
                                    <Button variant="outline" className="w-full border-black text-black hover:bg-gray-100">
                                        Sign Up
                                    </Button>
                                </SignInButton>
                            </SignedOut>
                            <SignedIn>
                                <div className="flex justify-center">
                                    <UserButton
                                        afterSignOutUrl="/"
                                        appearance={{
                                            elements: {
                                                userButtonAvatarBox: "w-10 h-10"
                                            }
                                        }}
                                    />
                                </div>
                            </SignedIn>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}