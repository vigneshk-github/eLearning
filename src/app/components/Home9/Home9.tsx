import React from 'react';
import {  GamepadIcon, GlobeIcon, ChartBarIcon } from 'lucide-react';

const Home9: React.FC = () => {
    const programFeatures = [
        {
            title: 'Gamified Learning',
            description: 'Learning made fun and engaging through interactive games, fun activities & visualization',
            icon: GamepadIcon,
            color: 'bg-gray-100'
        },
        {
            title: 'Offline & Online Interaction',
            description: 'A balanced approach with both online and offline interactions, ensuring personalized learning and hands-on engagement for a comprehensive experience',
            icon: GlobeIcon,
            color: 'bg-gray-100'
        },
        {
            title: 'Evaluation & Feedback',
            description: 'Continuous evaluation and constructive feedback to help students track their progress and improve effectively',
            icon: ChartBarIcon,
            color: 'bg-gray-100'
        }
    ];

    return (
        <div id="juniors" className="min-h-screen  flex items-center justify-center p-4">
            <div className="w-full max-w-5xl bg-white  rounded-3xl overflow-hidden">
                {/* Main Header Section */}
                <div className="  p-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">AI for Juniors</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        A specially designed initiative to introduce school students to the fascinating world of AI.
                        This program encourages creativity, problem-solving, and innovation, empowering students
                        with future-ready skills in a way that s exciting and easy to grasp.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 p-12">
                    {programFeatures.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={index}
                                className={`${feature.color} p-6 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                            >
                                <div className="flex justify-center mb-6">
                                    <IconComponent className="w-16 h-16 text-blue-600" strokeWidth={1.5} />
                                </div>
                                <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
                                    {feature.title}
                                </h2>
                                <p className="text-center text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Home9;