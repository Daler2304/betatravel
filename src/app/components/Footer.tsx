import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full rounded-t-[50px] md:rounded-t-[100px] bg-[#191919] p-8.75 text-white font-semibold">
            <div className="flex items-center">
                <div className="relative w-10 h-10">
                    <Image src="/logo.svg" unoptimized alt="logo" fill />
                </div>
                <p className="font-semibold text-white">BetaTravel</p>
            </div>

            <div className="flex">
                <div className="mt-7.5">
                    <p>Компании</p>
                    <nav className="flex flex-col text-[#979797] gap-1 mt-2">
                        <Link href="/">О нас</Link>
                        <Link href="/">Вакансии</Link>
                        <Link href="/">Контакты</Link>
                        <Link href="/">Новости</Link>
                        <Link href="/">Правовая информация</Link>
                    </nav>
                </div>
                <div className="mt-7.5">
                    <p>Приложение BetaTravel</p>
                    <nav className="flex items-center mt-2 gap-1 flex-wrap">
                        <div className="flex items-center justify-center bg-white rounded-full w-8 h-8">
                            <div className="relative w-5 h-5">
                                <Image
                                    src="apple.svg"
                                    alt=""
                                    unoptimized
                                    fill
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center bg-white rounded-full w-8 h-8">
                            <div className="relative w-5 h-5">
                                <Image
                                    src="play-market.svg"
                                    alt=""
                                    unoptimized
                                    fill
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center bg-white rounded-full w-8 h-8">
                            <div className="relative w-5 h-5">
                                <Image
                                    src="huawei.svg"
                                    alt=""
                                    unoptimized
                                    fill
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center bg-white rounded-full w-8 h-8">
                            <div className="relative w-5 h-5">
                                <Image
                                    src="rustore.svg"
                                    alt=""
                                    unoptimized
                                    fill
                                />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div>
                <div className="mt-7.5">
                    <p>Помощь</p>
                    <nav className="flex flex-col text-[#979797] gap-1 mt-2">
                        <Link href="/">Справочная</Link>
                        <Link href="/">Обратная связь</Link>
                    </nav>
                </div>
            </div>

            <hr className="mt-6 text-[#979797]" />
            <div className="mt-6">
                <p>Мы в соц. сетях</p>
                <nav className="flex items-center text-[#979797] gap-1 mt-2">
                    <div className="flex items-center justify-center bg-white rounded-full w-8 h-8">
                        <div className="relative w-5 h-5">
                            <Image src="telegram.svg" alt="" unoptimized fill />
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-full w-8 h-8">
                        <div className="relative w-5 h-5">
                            <Image src="vk.svg" alt="" unoptimized fill />
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-full w-8 h-8">
                        <div className="relative w-5 h-5">
                            <Image src="youtube.svg" alt="" unoptimized fill />
                        </div>
                    </div>
                </nav>
            </div>
            <div className="flex w-full flex-col justify-center items-center mt-6 font-normal">
                <p>&copy; 2026 BetaTravel</p>
                <p className="italic opacity-65">
                    Powered by{" "}
                    <span className="text-[#145ED5] font-semibold">Daler</span>
                </p>
            </div>
        </footer>
    );
}
