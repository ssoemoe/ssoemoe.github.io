import { CircleArrowRight } from "lucide-react";

interface ProjectCardProps {
    imgSrc: string;
    alt: string;
    name: string;
    desc: string;
    isWinner: boolean;
    onClick: () => void;
}

export default function ProjectCard({
    imgSrc,
    alt,
    name,
    desc,
    isWinner,
    onClick,
}: ProjectCardProps) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
            <img
                src={imgSrc}
                alt={alt}
                className="mb-4 h-45 w-full rounded-xl object-cover"
            />
            <div className="flex justify-start items-center gap-2">
                <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
                {isWinner ? (
                    <h4 className="rounded-full h-5 bg-[#FFD700] px-2.5 py-0.5 text-xs font-medium text-slate-800">
                        Winner
                    </h4>
                ) : (
                    <></>
                )}
            </div>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
            <button
                className="mt-4 rounded-lg px-2 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 cursor-pointer
                        flex justify-center items-center gap-1"
                onClick={onClick}
            >
                View Details <CircleArrowRight size={15} />
            </button>
        </div>
    );
}