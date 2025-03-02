import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Brain, Lightbulb, Users, ClipboardCheck } from 'lucide-react';
import img1 from "@/Images/image15.png";
import img2 from "@/Images/image16.png";
import img3 from "@/Images/image17.png";
import img4 from "@/Images/image18.png";
import img5 from "@/Images/image19.png";
import Image, { StaticImageData } from 'next/image';

interface Feature {
    title: string;
    description: string;
    icon: React.ElementType;
    image: StaticImageData;
}

const Home4 = () => {
    const features: Feature[] = [
        {
            title: "Problem Understanding",
            description: "Learn to identify and analyze real-world problems that can be solved using AI",
            icon: Brain,
            image: img1
        },
        {
            title: "Real-world Examples",
            description: "Study practical applications of AI in various industries and everyday scenarios",
            icon: Lightbulb,
            image: img2
        },
        {
            title: "Simplifying Complexity",
            description: "Break down complex AI concepts into easily understandable components",
            icon: Brain,
            image: img3
        },
        {
            title: "Online & Offline Interaction",
            description: "Engage in both digital and physical learning experiences",
            icon: Users,
            image: img4
        },
        {
            title: "Evaluation & Feedback",
            description: "Regular assessments and constructive feedback to track progress",
            icon: ClipboardCheck,
            image: img5
        }
    ];

    return (
        <div className="bg-white text-black min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold">AI for Juniors</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg mb-6">
                            This course is designed to teach AI in an engaging and practical manner.
                            Catering to school students, this course bridges the gap between traditional
                            education and emerging technologies, equipping students with AI skills through
                            hands-on experiences, real-world applications, and innovative problem-solving approaches.
                        </p>
                    </CardContent>
                </Card>

                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle className="text-2xl font-semibold">Why Early Exposure to AI?</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">
                            Early exposure to AI at school time is crucial as it develops critical thinking,
                            fosters creativity and innovation, and prepares students for future career
                            opportunities in a rapidly changing job market, ultimately building a strong
                            foundation for lifelong learning.
                        </p>
                    </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="overflow-hidden">
                            <div className="relative h-48">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="fill"
                                />
                                <div className="absolute bottom-0 right-0 p-2 bg-white rounded-tl-lg z-10">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home4;