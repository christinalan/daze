"use client";

import { useState } from "react";

export function ClientButton({
    onClick,
    children,
    className,
}: {
    onClick: () => void;
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
    function handleTapToCopy() {
        navigator.clipboard.writeText(text).then((v) => {
            setDidCopy(true);
        });
    }
    const label = didCopy ? "Copied!" : "Tap to copy";
    return (
        <>
            <ClientButton className={className} onClick={handleTapToCopy}>
                {text}
            </ClientButton>
            <div className="font-medium opacity-50 text-[16px] -mt-2">({label})</div>
        </>
    );
}
