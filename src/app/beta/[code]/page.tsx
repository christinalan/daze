import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import arrow from "../../../images/arrow.png";
import caption from "../../../images/caption.webp";
import daze from "../../../images/daze.webp";
import daze_icon from "../../../images/daze_icon.png";
import discord from "../../../images/discord.svg";
import send from "../../../images/send.png";
import testflight from "../../../images/testflight.png";

export const runtime = "edge";

const API_ROOT = process.env.API_ROOT;
const TESTFLIGHT_URL = process.env.TESTFLIGHT_URL!;

async function getData(code: string): Promise<boolean> {
    if (!API_ROOT) throw new Error("API_ROOT is not defined");

    const res = await fetch(`${API_ROOT}/referrals/${code}`);
    if (!res.ok) throw new Error("Failed to fetch data");

    return res.json().then(({ result }) => result?.data);
}

export default async function Beta({ params: { code } }: { params: { code: string } }) {
    const isValid = typeof code === "string" ? await getData(code) : false;

    console.log({ API_ROOT, TESTFLIGHT_URL, code });

    if (!isValid) {
        notFound();
    }

    return (
        <main className="bg-custom-radial flex min-h-screen flex-col">
            <div className="flex flex-col items-center mt-10 mb-12 mx-auto justify-center">
                {/* logo & cloud */}
                <div className="z-10 flex flex-col items-center -space-y-4 w-full max-w-md sm:w-9/12 lg:w-9/12 sm:max-w-xl">
                    <Image
                        src={caption}
                        width={120}
                        height={120}
                        priority={true}
                        alt="caption cloud"
                        className="my-0 py-0"
                    />
                    <Image
                        src={daze}
                        width={155}
                        height={155}
                        priority={true}
                        alt="Picture of Daze logo"
                        className="my-0 py-0"
                    />
                </div>
                <div className="mt-2 w-[220px] h-[58px] text-white text-[20px] text-center font-medium">
                    Congrats! You’re in the 1st group of Beta users!
                </div>

                {/* buttons  */}
                <div className="relative z-10 flex flex-col justify-center items-center mt-8 mb-0 py-4 px-8">
                    <div className="absolute inset-0 bg-white opacity-10 rounded-3xl drop-shadow-lg"></div>
                    <div className="relative z-20 flex flex-col justify-center items-center">
                        <Image
                            src={testflight}
                            width={100}
                            priority={true}
                            alt="Picture of Daze logo"
                            className="my-0 py-0"
                        />
                        <div className="text-center text-white pt-0">
                            <div className="font-large text-[25px]">Step 1</div>
                            <div className="font-medium text-[21px]">Download Testflight</div>
                            <div className="font-medium text-[18px] opacity-50 w-[290px]">
                                This is where you will download the Daze app from
                            </div>
                            <Link href={TESTFLIGHT_URL}>
                                <button className="mt-3 border-2 border-[1.5px] border-[#66BBFF] border-current rounded-[6.8px] px-4 py-1 text-[#66BBFF] text-[13px] inline-flex items-center">
                                    View in Appstore{" "}
                                    <Image src={arrow} alt="arrow" className="text-[10px] ml-1" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center mt-8 mb-0 py-4 px-8">
                    <div className="absolute inset-0 bg-white opacity-10 rounded-3xl drop-shadow-lg"></div>
                    <div className="relative z-20 flex flex-col justify-center items-center">
                        <Image
                            src={daze_icon}
                            width={100}
                            priority={true}
                            alt="Picture of Daze logo"
                            className="my-0 py-0"
                        />
                        <div className="text-center text-white pt-0">
                            <div className="font-large text-[25px]">Step 2</div>
                            <div className="font-medium text-[21px]">Join the Beta</div>
                            <div className="font-medium text-[18px] opacity-50 w-[290px]">
                                When signing up you will need to input this referral code:
                            </div>
                            <div className="font-large text-[40px]">{code}</div>
                            <div className="font-medium opacity-50 text-[16px] -mt-2">
                                (Tap to copy)
                            </div>
                            <Link href={TESTFLIGHT_URL}>
                                <button className="mt-3 border-2 border-[1.5px] border-[#66BBFF] border-current rounded-[6.8px] px-4 py-1 text-[#66BBFF] text-[13px] inline-flex items-center">
                                    Start testing{" "}
                                    <Image src={arrow} alt="arrow" className="text-[10px] ml-1" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center mt-8 mb-0 py-4 px-8">
                    <div className="absolute inset-0 bg-white opacity-10 rounded-3xl drop-shadow-lg"></div>
                    <div className="relative z-20 flex flex-col justify-center items-center">
                        <Image
                            src={send}
                            width={100}
                            priority={true}
                            alt="Picture of Email send"
                            className="my-0 py-0"
                        />
                        <div className="text-center text-white pt-0">
                            <div className="font-large text-[25px]">Step 3</div>
                            <div className="font-medium text-[21px]">Getting your friends on!</div>
                            <div className="font-medium text-[18px] opacity-50 w-[290px]">
                                When you sign up, you will get invite links on your profile. Every
                                beta tester gets 5 invites!
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="relative z-10 flex flex-col justify-center items-center mt-8 mb-0 py-4 px-8">
                    <div className="absolute inset-0 bg-white opacity-10 rounded-3xl drop-shadow-lg"></div>
                    <div className="relative z-20 flex flex-col justify-center items-center">
                        <Image
                            src={cow}
                            width={80}
                            priority={true}
                            alt="Picture of Daze logo"
                            className="my-0 py-0"
                        />
                        <div className="text-center text-white pt-0">
                            <div className="font-large text-[25px]">Step 4</div>
                            <div className="font-medium text-[21px]">
                                Get your merch!
                            </div>
                            <div className="font-medium text-[18px] opacity-50 w-[290px]">
                                Input your shipping info, the email you signed
                                up with etc and we’ll ship you your merch!
                            </div>
                            <button className="mt-3 border-2 border-[1.5px] border-[#66BBFF] border-current rounded-[6.8px] px-4 py-1 text-[#66BBFF] text-[13px] inline-flex items-center">
                                MERCH{" "}
                                <Image
                                    src={arrow}
                                    alt="arrow"
                                    className="text-[10px] ml-1"
                                />
                            </button>
                        </div>
                    </div>
                </div> */}

                <div className="relative z-10 flex flex-col justify-center items-center mt-8 mb-0 py-4 px-8">
                    <div className="absolute inset-0 bg-white opacity-10 rounded-3xl drop-shadow-lg"></div>
                    <div className="relative z-20 flex flex-col justify-center items-center">
                        <Image
                            src={discord}
                            width={80}
                            priority={true}
                            alt="Picture of Daze logo"
                            className="my-0 py-0"
                        />
                        <div className="text-center text-white pt-0">
                            <div className="font-large text-[25px]">Step 4</div>
                            <div className="font-medium text-[21px]">Exclusive Beta discord</div>
                            <div className="font-medium text-[18px] opacity-50 w-[290px]">
                                Only beta users are in this discord channel! Give us feedback + talk
                                about ideas with the Daze team!
                            </div>
                            <Link href="https://discord.com/invite/Z4dWvVARxh">
                                <button className="mt-3 border-2 border-[1.5px] border-[#66BBFF] border-current rounded-[6.8px] px-4 py-1 text-[#66BBFF] text-[13px] inline-flex items-center">
                                    Join our Discord{" "}
                                    <Image src={arrow} alt="arrow" className="text-[10px] ml-1" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="text-white text-center font-medium text-[18px] opacity-50 w-[290px] mt-8">
                    The app is still early, so please be patient and give us feedback when stuff
                    breaks! Thanks for being on this journey with us!
                </div>
            </div>
        </main>
    );
}
