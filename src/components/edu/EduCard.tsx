interface EduCardProps {
    name: string;
    lines: string[];
}

export default function EduCard({ name, lines }: EduCardProps) {
    return (
        <div>
            <div className="text-sm md:text-[1rem] text-slate-950 mb-1">
                {name}
            </div>
            {lines.map((value, index) => {
                return (
                    <p
                        key={index}
                        className="text-slate-600 text-sm md:text-[1rem]"
                    >
                        {value}
                    </p>
                );
            })}
        </div>
    );
}