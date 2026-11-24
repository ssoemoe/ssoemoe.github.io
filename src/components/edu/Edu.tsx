import { GraduationCap } from "lucide-react";
import EduCard from "./EduCard";

export default function Edu() {
    return (
        <>
            <h1 className="w-full flex align-items justify-center heading mb-3 md:mb-5 fade-in-slide">
                <GraduationCap size={33} className="text-slate-900 mr-2" />
                Education
            </h1>
            <div className="mx-auto flex flex-col align-items justify-center gap-10 fade-in-slide">
                <EduCard
                    name={"University of Maryland, College Park"}
                    lines={[
                        "B.S. in Computer Science",
                        "Minored in Statistics",
                        "Graduated in 2020",
                    ]}
                />
                <EduCard
                    name={"Montgomery College"}
                    lines={["A.A. in Computer Science", "Graduated in 2017"]}
                />
            </div>
        </>
    );
}