"use client";

import { MouseEventHandler, useState } from "react";

export function ClientButton({
    onClick,
    children,
    className,
}: {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
}

export function CopyToClipboardButton({ text, className }: { text: string; className?: string }) {
    const [didCopy, setDidCopy] = useState(false);
    const handleTapToCopy: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        try {
            navigator.clipboard.writeText(text).then((v) => {
                setDidCopy(true);
            });
        } catch (e) {}
    };
    const label = didCopy ? "Copied!" : "Tap to copy";
    return (
        <>
            <ClientButton className={className} onClick={handleTapToCopy}>
                <span className="no-phone-link">{text}</span>
            </ClientButton>
            <div className="font-medium opacity-50 text-[16px] -mt-2">({label})</div>
        </>
    );
}
