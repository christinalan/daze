"use client";
import Image from "next/image";
import Link from "next/link";
import burger from "../images/burger.svg";
import close from "../images/close.svg"
import localFont from "next/font/local";

const gtAlpine = localFont({
    src: "../fonts/GT-Alpina/GT-Alpina-Standard-Medium-Trial.otf",
    style: 'normal',
})

type MenuProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Menu: React.FC<MenuProps> = ({ isOpen, setIsOpen }) => {
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={gtAlpine.className}>
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
                        <a href="mailto:willem@daze.nyc" className="text-4xl drop-shadow-custom">Hiring</a>
                        <Link href="https://www.figma.com/proto/WXYmQceDzIhLUpyP7Ltg0i/Senior-Software-Engineer?page-id=0%3A1&node-id=2-15&node-type=frame&viewport=628%2C1222%2C0.28&t=uWiR63SrRLH9AzJd-1&scaling=min-zoom&content-scaling=fixed" className="text-4xl drop-shadow-custom">
                            Contact Us
                        </Link>
                    </nav>
                </div>
            )}
            </span>
        </div>
    );
};