"use client";

import Image from "next/image";

export default function StallRoom() {
    return (
        <div className="w-screen min-h-screen bg-blue-400 flex flex-col justify-end"
            style={{
                backgroundImage: "url('/sidewall.jpg')",
            }}>
            {/* Rectangle starts from top of trapezium and fills to top of screen */}
            <div className=" w-full h-[126px] bg-gray-700 [clip-path:polygon(0%_0%,_100%_0%,_91%_100%,_9%_100%)] border-t-4 border-b-4 border-slate-950"
                style={{
                    backgroundImage: "url('/ceiling.jpg')",
                }} />

            <div className="flex-1w-[80%] h-[665px] [clip-path:polygon(9%_0%,_91%_0%,_91%_100%,_9%_100%)]"
                style={{
                    backgroundImage: "url('/wall.png')",
                }} />

            {/* Trapezium at the bottom */}
            <div
                className=" w-full h-32 border-t-4 border-b-4 border-slate-950 bg-cover bg-center [clip-path:polygon(9%_0%,_91%_0%,_100%_100%,_0%_100%)]"
                style={{
                    backgroundImage: "url('/floor.jpg')",
                }}
            >
                {/* Image of the avatar */}
                <div className="absolute z-10 bottom-0 lg:left-[22%] md:left-[15%] max-sm:left-[24%]">
                    <Image
                        src={"/avatar.png"}
                        alt="avatar"
                        height={220}
                        width={230}
                        className="lg:h-[52vh] md:h-[50vh] h-[60vh] max-sm:h-[42vh] sm:landscape:h-[45vh] sm:landscape:w-[10vw]"
                    />
                </div>

                {/* Table Image as background */}
                <div className="absolute z-5 lg:bottom-[-65px] md:bottom-[-14vh] bottom-[-55px] sm:landscape:bottom-[-14vh] max-sm:left-[9%]">
                    <Image
                        src={"/table.png"}
                        alt="Table"
                        width={350}
                        height={100}
                        className="object-fit lg:h-[70vh] h-[90vh] md:h-[78vh] max-sm:h-[52vh] sm:landscape:h-[70vh] sm:landscape:w-[40vh]"
                    />
                </div>
            </div>

        </div>
    );
}
