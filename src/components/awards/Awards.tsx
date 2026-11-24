import { Medal } from "lucide-react";

export default function Awards() {
    return (
        <>
            <h1 className="w-full flex align-items justify-center heading mb-3 md:mb-5 fade-in-slide">
                <Medal size={30} className="mr-1" />
                Achievements
            </h1>
            <div className="mx-auto fade-in-slide">
                <ol className="list-disc pl-5 md:pl-0 text-sm md:text-[1rem]">
                    <li>Dr. Chrono Engineers Choice Award</li>
                    <li>Terp transfer scholarship</li>
                    <li>
                        Dr. Harry Harden, Jr. Student Academic Excellence Award
                    </li>
                </ol>
            </div>
        </>
    );
}