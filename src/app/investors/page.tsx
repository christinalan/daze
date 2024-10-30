import React from "react";
import Image from "next/image";
import Link from "next/link";
import back from "../../images/back.svg"
import localFont from "next/font/local";

const circularMedium = localFont({
    src: "../../fonts/CircularXXTT-Medium.ttf",
    display: "swap",
});

const gtAlpine = localFont({
    src: "../../fonts/GT-Alpina/GT-Alpina-Standard-Medium-Trial.otf",
    style: 'normal',
})

const Investors = () => {
    const investorNames = [
        "A16z",
        "Kindred Ventures",
        "Alpaca Ventures",
        "Uncommon Projects",
        "New Wave",
        "Maveron",
        "Betaworks",
        "Andy Weissman",
        "Antoine Martin",
        "Jaren Glover",
        "35 Ventures",
        "Pareto Holdings",
        "Christina Ducruet",
        "Varahd Jain",
        "Kunal Tandon",
    ];

    return (
        <div className="min-h-screen">
            <nav className="fixed z-50 w-full pt-8 px-4 ml-2 lg:px-8 flex justify-between items-center">
            <Link href="/" className="cursor-pointer">
                    <div>
                        <Image
                            src={back}
                            width={10}
                            alt="back button"
                            priority={true}
                            className="mr-4"
                        />
                    </div>
            </Link>
            </nav>
            <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
                <div className="flex flex-col items-center space-y-4 text-center p-8 mt-2">
                    <h1 className={`${gtAlpine} text-3xl md:text-4xl font-bold mb-4 drop-shadow-custom`}>Investors</h1>
                    <ul className={`${circularMedium} text-lg md:text-xl space-y-4`}>
                        {investorNames.map((name, index) => (
                            <li key={index} className="hover:text-gray-300 transition-colors duration-300">
                                {name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Investors;