import Image, { StaticImageData } from 'next/image'
import img1 from "@/Images/image11.png"
import img2 from "@/Images/image12.png"

interface Leader {
    name: string;
    role: string;
    imageUrl: StaticImageData;
}

interface LeadershipTeamProps {
    leaders?: Leader[];
}

const defaultLeaders: Leader[] = [
    {
        name: "Rahul LR",
        role: "PhD student, IIT Hyderabad",
        imageUrl: img1,
    },
    {
        name: "Megavath Praveen",
        role: "BTech, IIT Hyderabad",
        imageUrl: img2,
    },
    // {
    //     name: "Prof. Soumya Jana",
    //     role: "IIT Hyderabad",
    //     imageUrl: img3,
    // },
    // {
    //     name: "Prof. Asudeb Dutta",
    //     role: "IIT Hyderabad",
    //     imageUrl: img4,
    // },
];

const Home7: React.FC<LeadershipTeamProps> = ({ leaders = defaultLeaders }) => {
    return (
        <div id="team" className="bg-white py-12 sm:py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:gap-12 lg:gap-16 xl:grid-cols-3">
                    <div className="max-w-xl mx-auto text-center xl:text-left">
                        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                            Meet our leadership
                        </h2>
                        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
                            We re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 xl:col-span-2">
                        {leaders.map((leader, index) => (
                            <li key={index} className="group hover:bg-gray-50 rounded-lg p-4 transition-colors duration-200">
                                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 text-center sm:text-left">
                                    <div className="relative size-28 flex-shrink-0">
                                        <Image
                                            className="rounded-full object-cover ring-2 ring-gray-200 group-hover:ring-indigo-500 transition-colors duration-200"
                                            src={leader.imageUrl}
                                            alt={leader.name}
                                            fill
                                            sizes="(max-width: 640px) 64px, (max-width: 768px) 64px, 64px"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold tracking-tight text-gray-900">
                                            {leader.name}
                                        </h3>
                                        <p className="text-sm font-semibold text-indigo-600 mt-1">
                                            {leader.role}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home7;