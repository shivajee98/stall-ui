"use client";

export default function StallRoom() {
    return (
        <div className="w-screen min-h-screen bg-pink-500 flex flex-col justify-end">
            {/* Rectangle starts from top of trapezium and fills to top of screen */}
            <div className="w-full h-[126px] bg-blue-500 [clip-path:polygon(0%_0%,_100%_0%,_91%_100%,_9%_100%)] border-t-4 border-b-4 border-slate-950" />

            <div className="flex-1w-[80%] h-[665px] bg-green-500 [clip-path:polygon(9%_0%,_91%_0%,_91%_100%,_9%_100%)]" />

            {/* Trapezium at the bottom */}
            <div className="w-full h-32 bg-blue-500 [clip-path:polygon(9%_0%,_91%_0%,_100%_100%,_0%_100%)] border-t-4 border-b-4 border-slate-950" />
        </div>
    );
}
