"use client";

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
    function handleTapToCopy() {
        navigator.clipboard.writeText(text);
    }
    return (
        <ClientButton className={className} onClick={handleTapToCopy}>
            {text}
        </ClientButton>
    );
}
