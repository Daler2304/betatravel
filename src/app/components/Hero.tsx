import Image from "next/image";
import { CgMenuRight } from "react-icons/cg";

export default function Hero() {
    return (
        <div className="w-full h-[70vh] relative">
            <Image
                src="/hero-bg.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="eager"
            />
            <div className="absolute z-10 w-full h-full">
                <div className="flex items-center justify-between w-full h-10 px-6 py-10">
                    <div className="flex items-center">
                        <div className="relative w-10 h-10">
                            <Image
                                src="/logo.svg"
                                unoptimized
                                alt="logo"
                                fill
                            />
                        </div>

                        <p className="font-semibold text-white">BetaTravel</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button></button>
                        <CgMenuRight color="white" size="26" />
                    </div>
                </div>

                <div
                    className={`flex items-center justify-center w-full h-1/2 text-center text-white text-[30px] font-semibold`}>
                    Путешествие без проишествий
                </div>
            </div>
        </div>
    );
}
