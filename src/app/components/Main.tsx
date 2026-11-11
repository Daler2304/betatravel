import Image from "next/image";

export default function Main() {
    return (
        <main className="w-full rounded-t-[50px] md:rounded-t-[100px] relative -top-20 bg-white z-10">
            <section className="flex flex-col items-center p-6 justify-center gap-2">
                <div className="flex gap-2">
                    <div className="flex justify-between items-end min-w-[44dvw] h-25 p-2 bg-[#F0F0F7] rounded-[20px]">
                        <div className="h-full">
                            <p className="p-2">Авиа</p>
                        </div>
                        <div className="relative w-15 h-15">
                            <Image src="plane.svg" alt="" unoptimized fill />
                        </div>
                    </div>

                    <div className="flex justify-between items-end min-w-[44dvw] h-25 p-2 bg-[#F0F0F7] rounded-[20px]">
                        <div className="h-full">
                            <p className="opacity-50 p-2">Ж/д</p>
                            <p className="opacity-50 p-2">Скоро...</p>
                        </div>
                        <div className="relative w-15 h-15">
                            <Image src="train.svg" alt="" unoptimized fill />
                        </div>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="flex justify-between items-end min-w-[44dvw] h-25 p-2 bg-[#F0F0F7] rounded-[20px]">
                        <div className="h-full">
                            <p className="opacity-50 p-2">Отели</p>
                            <p className="opacity-50 p-2">Скоро...</p>
                        </div>
                        <div className="relative w-15 h-15">
                            <Image src="bed.svg" alt="" unoptimized fill />
                        </div>
                    </div>

                    <div className="flex justify-between items-end min-w-[44dvw] h-25 p-2 bg-[#F0F0F7] rounded-[20px]">
                        <div className="h-full">
                            <p className="opacity-50 p-2">Туры</p>
                            <p className="opacity-50 p-2">Скоро...</p>
                        </div>
                        <div className="relative w-15 h-15">
                            <Image src="palm.svg" alt="" unoptimized fill />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
