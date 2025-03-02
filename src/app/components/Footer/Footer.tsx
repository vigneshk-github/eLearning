"use client"
import React, { useState } from 'react';
import Link from 'next/link';

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
    <Link
        href={href}
        className="text-gray-400 hover:text-white transition-colors duration-300"
    >
        {children}
    </Link>
);

interface FooterColumnProps {
    title: string;
    links: Array<{
        text: string;
        href: string;
    }>;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-800 md:border-none">
            <div
                className="flex justify-between items-center py-4 md:block cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4 className="text-base font-semibold text-white uppercase tracking-wider">
                    {title}
                </h4>
                <span className="md:hidden">
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    )}
                </span>
            </div>
            <ul className={`
                ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 md:max-h-96 md:opacity-100'}
                overflow-hidden transition-all duration-300 ease-in-out space-y-3 pb-4 md:pb-0
            `}>
                {links.map((link, index) => (
                    <li key={index}>
                        <FooterLink href={link.href}>{link.text}</FooterLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Footer: React.FC = () => {
    const footerSections: FooterColumnProps[] = [
        {
            title: "Pagedone",
            links: [
                { text: "Home", href: "/" },
                { text: "About", href: "/#about" },
                { text: "AI for Juniors", href: "/#juniors" },
                // { text: "Pricing", href: "/#price" },
                // { text: "Motivation", href: "/#motivation" },
            ]
        },
        {
            title: "Products",
            links: [
                { text: "Early exposure to AI", href: "/#early" },
                { text: "Plan of Action", href: "/#action" },
                { text: "Limitations", href: "/#limitations" },

            ]
        },
        {
            title: "Resources",
            links: [
                { text: "FAQs", href: "/#faq" },
                { text: "Team", href: "/#team" },
            ]
        },
    ];

    const socialLinks = [
        {
            name: "Twitter",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" />
                </svg>
            ),
            href: "/"
        },
        {
            name: "Facebook",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M19 10.0001C19 5.02947 14.9706 1 10 1C5.02944 1 1 5.02947 1 10.0001C1 14.4802 4.29117 18.1595 8.59375 18.8816V12.5939H6.30806V10.0001H8.59375V7.97197C8.59375 5.72291 9.93722 4.47822 11.9892 4.47822C12.9779 4.47822 14.0148 4.65157 14.0148 4.65157V6.86479H12.8691C11.7424 6.86479 11.4062 7.54019 11.4062 8.23375V10.0001H13.9023L13.5148 12.5939H11.4062V18.8816C15.7088 18.1595 19 14.4802 19 10.0001Z" />
                </svg>
            ),
            href: "/"
        },
        {
            name: "Instagram",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 1C12.717 1 13.056 1.01 14.122 1.06C15.187 1.11 15.912 1.277 16.55 1.525C17.21 1.779 17.766 2.123 18.322 2.678C18.8305 3.1779 19.224 3.78259 19.475 4.45C19.722 5.087 19.89 5.813 19.94 6.878C19.987 7.944 20 8.283 20 11C20 13.717 19.99 14.056 19.94 15.122C19.89 16.187 19.722 16.912 19.475 17.55C19.2247 18.2178 18.8311 18.8226 18.322 19.322C17.822 19.8303 17.2173 20.2238 16.55 20.475C15.913 20.722 15.187 20.89 14.122 20.94C13.056 20.987 12.717 21 10 21C7.283 21 6.944 20.99 5.878 20.94C4.813 20.89 4.088 20.722 3.45 20.475C2.78233 20.2245 2.17753 19.8309 1.678 19.322C1.16941 18.8222 0.775931 18.2175 0.525 17.55C0.277 16.913 0.11 16.187 0.06 15.122C0.013 14.056 0 13.717 0 11C0 8.283 0.01 7.944 0.06 6.878C0.11 5.813 0.277 5.088 0.525 4.45C0.775236 3.78218 1.16884 3.17732 1.678 2.678C2.17767 2.16923 2.78243 1.77563 3.45 1.525C4.088 1.277 4.812 1.11 5.878 1.06C6.944 1.013 7.283 1 10 1ZM10 5.378C8.58831 5.378 7.23459 5.93716 6.22494 6.94681C5.21529 7.95646 4.65613 9.31018 4.65613 10.7219C4.65613 12.1336 5.21529 13.4873 6.22494 14.4969C7.23459 15.5066 8.58831 16.0657 10 16.0657C11.4117 16.0657 12.7654 15.5066 13.7751 14.4969C14.7847 13.4873 15.3439 12.1336 15.3439 10.7219C15.3439 9.31018 14.7847 7.95646 13.7751 6.94681C12.7654 5.93716 11.4117 5.378 10 5.378Z" />
                </svg>
            ),
            href: "/"
        },
        {
            name: "YouTube",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M18.7 5.8C18.5 5.1 18 4.6 17.3 4.4C16 4 10 4 10 4C10 4 4 4 2.7 4.4C2 4.6 1.5 5.1 1.3 5.8C1 7.1 1 10 1 10C1 10 1 12.9 1.3 14.2C1.5 14.9 2 15.4 2.7 15.6C4 16 10 16 10 16C10 16 16 16 17.3 15.6C18 15.4 18.5 14.9 18.7 14.2C19 12.9 19 10 19 10C19 10 19 7.1 18.7 5.8ZM8 12.5V7.5L13 10L8 12.5Z" />
                </svg>
            ),
            href: "/"
        }
    ];

    return (
        <footer className="bg-black text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
                    {/* Logo and Contact Section */}
                    <div className="md:col-span-2 text-center md:text-left mb-8 md:mb-0">
                        <Link href="/" className="inline-block mb-6">
                            <span className="text-2xl font-bold">eLearning</span>
                        </Link>
                        <p className="text-gray-400 mb-6 max-w-xs mx-auto md:mx-0">
                            Have any query?
                        </p>
                        <Link
                            href="#section"
                            className="inline-block bg-bgray-700 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 w-full md:w-auto text-center"
                        >
                            Contact us
                        </Link>
                    </div>

                    {/* Footer Columns */}
                    {footerSections.map((section, index) => (
                        <FooterColumn key={index} {...section} />
                    ))}
                </div>

                {/* Copyright and Social Links */}
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <span className="text-sm text-gray-400 mb-4 md:mb-0 text-center w-full md:w-auto">
                        ©<Link href="/" className="hover:text-white">eLearning</Link> {new Date().getFullYear()}, All rights reserved.
                    </span>
                    <div className="flex justify-center space-x-4 w-full md:w-auto">
                        {socialLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                {link.icon}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;