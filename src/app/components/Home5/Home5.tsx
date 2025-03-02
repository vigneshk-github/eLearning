// const Home5 = () => {
//     type Feature = string | { text: string; highlight: string };

//     const pricingPlans: {
//         name: string;
//         description: string;
//         price: number;
//         features: Feature[];
//     }[] = [
//             {
//                 name: "AI for Intermediate",
//                 description: "A program designed to deepen understanding of AI",
//                 price: 6000,
//                 features: [
//                     "Helps to choose career in AI & data science",
//                     "Advanced AI & ML concepts",
//                     "Practical industry applications",
//                     "Career guidance workshops",
//                     "Specialized project mentorship"
//                 ]
//             },
//             {
//                 name: "AI for UG/PG",
//                 description: "Tailored for UG/PG students, focusing on advanced AI concepts, research-oriented learning, and real-world applications",
//                 price: 7000,
//                 features: [
//                     "Equipping learners with skills for innovation",
//                     "Professional growth strategies",
//                     "Advanced research methodologies",
//                     "Cutting-edge AI technologies",
//                     "Industry-aligned project development"
//                 ]
//             },
//             {
//                 name: "AI for Professionals",
//                 description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet risus fringilla, egestas elit a, consequat augue. Phasellus sollicitudin felis mi, quis egestas ex ornare sed quis adipiscing",
//                 price: 8000,
//                 features: [
//                     "Advanced AI skill enhancement",
//                     "Industry-specific AI applications",
//                     "Professional networking opportunities",
//                     "Cutting-edge technology insights",
//                     "Strategic career development"
//                 ]
//             }
//         ];

//     return (
//         <section id="price" className="bg-white dark:bg-gray-900 min-h-screen w-full px-4 py-8 sm:px-6 lg:px-8">
//             <div className="mx-auto max-w-7xl">
//                 <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
//                         Artificial Intelligence Courses
//                     </h2>
//                     <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
//                         Start from scratch with the AI prerequisites or expand your knowledge in the field of AI/ML with our AI courses. Learn Artificial Intelligence online and build an immersive AI skillset that businesses want to hire.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
//                     {pricingPlans.map((plan, index) => (
//                         <div
//                             key={index}
//                             className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-transform duration-300 hover:scale-105"
//                         >
//                             <div className="p-6 sm:p-8 flex flex-col h-full text-center">
//                                 <div className="">
//                                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                                         <strong>{plan.name}</strong>
//                                     </h3>
//                                     <p className="text-gray-500 dark:text-gray-400 mb-6">
//                                         {plan.description}
//                                     </p>
//                                     <div className="mb-6">
//                                         <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
//                                             <strong>₹{plan.price.toLocaleString()}</strong>
//                                         </span>
//                                     </div>
//                                 </div>

//                                 <ul className="space-y-3 mb-8 flex-grow text-center">
//                                     {plan.features.map((feature, featureIndex) => (
//                                         <li
//                                             key={featureIndex}
//                                             className="flex items-center justify-center text-gray-800 dark:text-gray-200"
//                                         >
//                                             <span className="text-sm sm:text-base">
//                                                 {typeof feature === 'string' ? feature : (
//                                                     <>
//                                                         {feature.text} <span className="font-semibold">{feature.highlight}</span>
//                                                     </>
//                                                 )}
//                                             </span>
//                                         </li>
//                                     ))}
//                                 </ul>

//                                 <a
//                                     href="#"
//                                     className="mt-auto inline-flex justify-center items-center px-6 py-3 text-base font-medium rounded-lg text-white bg-black hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full sm:w-auto sm:text-sm"
//                                 >
//                                     Enquiry Now
//                                 </a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Home5;
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface SyllabusItem {
    title: string;
}

const Home5: React.FC = () => {
    const syllabusItems: SyllabusItem[] = [
        { title: "What is AI?" },
        { title: "AI Applications" },
        { title: "AI with No-Code Tools" },
        { title: "AI Basic Concepts" },
        { title: "AI & Interdisciplinary Connections" },
        { title: "Foundation of AI Algorithms" }
    ];

    return (
        <div className="p-10 bg-white flex justify-center items-center min-h-screen">
            <div className="w-full max-w-3xl">
                <Card className=" rounded-3xl bg-white">
                    <CardHeader>
                        <CardTitle className="text-5xl font-extrabold text-center text-black tracking-wide">
                            Syllabus
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="space-y-6">
                            {syllabusItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 group transition-all duration-300 hover:scale-105"
                                >
                                    <div className="text-yellow-500">
                                        <Star className="w-6 h-6 fill-current" />
                                    </div>
                                    <span className="text-xl font-semibold text-black group-hover:text-gray-700 transition-colors">
                                        {item.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Home5;
