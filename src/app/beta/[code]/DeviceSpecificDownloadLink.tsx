"use client";

import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren, useEffect, useState } from "react";
import arrow from "../../../images/arrow.png";

const linkConfig = {
    ios: {
        downloadURL: process.env.TESTFLIGHT_URL!,
    },
    android: {
        downloadURL: process.env.GOOGLE_PLAY_URL!,
    },
};

export function useDeviceDetect() {
    const [device, setDevice] = useState("ios");

    useEffect(() => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isAndroid = /android/.test(userAgent);
        const isIos = /iphone|ipad|ipod/.test(userAgent);

        if (isAndroid) {
            setDevice("android");
        } else if (isIos) {
            setDevice("ios");
        } else {
            setDevice("other");
        }
    }, []);

    return device;
}

export function DeviceSpecificDownloadLink() {
    const device = useDeviceDetect();

    const getLink = () => {
        switch (device) {
            case "android":
                return linkConfig.android.downloadURL;
            case "ios":
                return linkConfig.ios.downloadURL;
            default:
                return linkConfig.ios.downloadURL;
        }
    };

    return (
        <Link href={getLink()}>
            <button className="mt-3 border-2 border-[1.5px] border-[#66BBFF] border-current rounded-[6.8px] px-4 py-1 text-[#66BBFF] text-[13px] inline-flex items-center">
                Start testing <Image src={arrow} alt="arrow" className="text-[10px] ml-1" />
            </button>
        </Link>
    );
}

export function DeviceSpecificTitle() {
    const device = useDeviceDetect();

    return (
        <div className="font-medium text-[21px]">
            {device === "ios" ? "Download the app via Testflight" : "Download the app"}
        </div>
    );
}
