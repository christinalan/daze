"use client";
import Image from "next/image";
import Link from "next/link";
import burger from "../images/burger.svg";
import close from "../images/close.svg"

type MenuProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu: React.FC<MenuProps> = ({ isOpen, setIsOpen }) => {
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Conditionally render burger or close icon */}
            <span className="cursor-pointer">
            {!isOpen ? (
                <div className={`transition-opacity duration-10 ${
                    isOpen ? "opacity-0 invisible" : "opacity-100 visible"
                }`}>
                    <Image
                        src={burger}
                        alt="hamburger icon"
                        width={30}
                        height={30}
                        onClick={toggleMenu}
                        priority={true}
                        className="mr-4"
                    />
                </div>
            ) : (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex flex-col items-center justify-center text-white">
                    <div className={`transition-opacity duration-10 ${
                            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}>
                        <Image
                            src={close}
                            alt="close icon"
                            width={50}
                            height={50}
                            onClick={toggleMenu}
                            priority={true}
                            className="absolute top-4 mt-2 pt-1 right-4 px-1"
                        />
                    </div>
                    <nav className="flex flex-col gap-12 text-center">
                        <Link href="/investors" className="text-4xl drop-shadow-custom">
                            Investors
                        </Link>
                        <a href="#hiring" className="text-4xl drop-shadow-custom">Hiring</a>
                        <a href="#contact" className="text-4xl drop-shadow-custom">Contact Us</a>
                    </nav>
                </div>
            )}
            </span>
        </div>
    );
};