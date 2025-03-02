"use client"
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const Faq: React.FC = () => {
    const faqs: FAQItem[] = [
        {
            question: 'Who can participate in this program?',
            answer: 'The program is designed for students in 8th, 9th, and 10th grades. We welcome curious students interested in exploring AI and technology.'
        },
        {
            question: 'What are the program timings?',
            answer: 'The program runs during April and May, specifically on Fridays, Saturdays, and Sundays. Online sessions total 48 hours, with 24 hours of offline engagement.'
        },
        {
            question: 'How is the program structured?',
            answer: 'We offer a hybrid learning model with both online and offline components. This includes interactive sessions, hands-on projects, and collaborative learning experiences.'
        },
        {
            question: 'What will students learn?',
            answer: 'Students will be introduced to AI fundamentals, problem-solving techniques, basic programming concepts, and practical applications of AI across various domains.'
        },
        {
            question: 'Is prior coding experience necessary?',
            answer: 'No prior coding experience is required. The program is designed to be beginner-friendly and will provide foundational knowledge for students.'
        },
        {
            question: 'What is the cost of the program?',
            answer: 'The entire program is priced at 6,000 INR, which includes all learning materials, online and offline session access, and project support.'
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id="faq" className="min-h-screen  flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-white  rounded-2xl overflow-hidden">
                {/* FAQ Header */}
                <div className=" p-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg md:text-xl">
                        Got questions? We ve got answers! Here are some commonly asked queries about our AI Summer Program.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="p-8 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border-b border-gray-200 pb-4"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center text-left focus:outline-none"
                            >
                                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUpIcon className="w-6 h-6 text-blue-600" />
                                ) : (
                                    <ChevronDownIcon className="w-6 h-6 text-blue-600" />
                                )}
                            </button>

                            {openIndex === index && (
                                <p className="text-gray-600 mt-4 animate-fade-in">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;