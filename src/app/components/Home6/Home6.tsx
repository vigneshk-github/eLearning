// const Home6 = () => {
//     type Feature = string | { text: string; highlight: string };

//     const pricingPlans: {
//         name: string;
//         description: string;
//         price?: number;
//         features: Feature[];
//     }[] = [
//             {
//             name: "Quantum Foundation with Amazon Braket",
//             description: "28 hours of learning material",
//                 features: [
//                     "Prerequisites to learn Quantum",
//                     "Computing courses",
//                     "Quantum States and Qubits",
//                     "Quantum Algorithms",
//                     "Quantum Protocols",
//                     "Quantum Hardware: Superconducting Qubits",
//                     "Foundation Quantum Projects"
//                 ]
//             },
//             {
//                 name: "Quantum Expert with Amazon Braket",
//                 description: "36 hours of learning material",
//                 price: 99,
//                 features: [
//                     "NISQ Devices",
//                     "Quantum Algorithms for Applications",
//                     "Quantum Hardware: Semiconducting Qubits",
//                     "Advanced Quantum Projects"
//                 ]
//             }
//         ];

//     return (
//         <section className="bg-white dark:bg-gray-900 min-h-screen w-full px-4 py-8 sm:px-6 lg:px-8">
//             <div className="mx-auto max-w-7xl">
//                 <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-12">
//                     <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
//                         Limitations of current approach
//                     </h2>
//                     <p className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-6xl mx-auto">
//                         Master the powerful skills of Quantum Computing with leading industry experts from IISc and QpiAI. Learn the technical basics to advanced applications of Quantum and build your resume to be industry-ready. Master the quantum computing with Amazon Braket SDK and QpiAI Labs python notebook.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
//                     {pricingPlans.map((plan, index) => (
//                         <div
//                             key={index}
//                             className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-transform duration-300 hover:scale-105"
//                         >
//                             <div className="p-6 sm:p-8 flex flex-col h-full">
//                                 <div>
//                                     <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
//                                         {plan.name}
//                                     </h3>
//                                     <p className="text-gray-500 dark:text-gray-400 mb-6">
//                                         {plan.description}
//                                     </p>
//                                 </div>

//                                 <ul className="space-y-3 mb-8 flex-grow">
//                                     {plan.features.map((feature, featureIndex) => (
//                                         <li
//                                             key={featureIndex}
//                                             className="flex items-start text-gray-800 dark:text-gray-200"
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

// export default Home6;
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface SyllabusItem {
    title: string;
}

const Home6: React.FC = () => {
    const syllabusItems: SyllabusItem[] = [
        { title: "What is AI ?" },
        { title: "AI applications" },
        { title: "AI with no-coding tools" },
        { title: "AI basic concepts" },
        { title: "AI interdisciplinary connection" },
        { title: "Foundation on AI algorithms" }
    ];

    return (
        <div className="p-8 bg-white">
            <div className="max-w-4xl mx-auto">
                <Card className="border-2 border-blue-100 rounded-3xl">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-center text-blue-600">
                            Syllabus
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <div className="space-y-6">
                            {syllabusItems.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    <div className="text-yellow-400">
                                        <Star className="w-6 h-6 fill-current" />
                                    </div>
                                    <span className="text-blue-500 text-xl font-medium hover:text-blue-600 transition-colors">
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

export default Home6;