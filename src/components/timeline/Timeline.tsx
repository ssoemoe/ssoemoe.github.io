import { BriefcaseBusiness } from "lucide-react";
import { EXPERIENCES } from "./experiences";

export interface JobExperience {
    id: string;
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    isCurrent?: boolean;
    summary: string;
    skills: string[];
}

interface JobTimelineProps {
    items?: JobExperience[];
}

export default function JobTimeline({ items = EXPERIENCES }: JobTimelineProps) {
    return (
        <section className="mx-auto max-w-3xl px-4 fade-in-slide">
            <h1 className="w-full flex align-items justify-center heading mb-3 md:mb-10">
                <BriefcaseBusiness size={35} className="mr-2" />
                Experience
            </h1>
            {/* Vertical Timeline Rail */}
            <ol className="relative border-s-2 border-slate-200">
                {items.map((job) => (
                    <li key={job.id} className="mb-5 ms-6 last:mb-0">
                        {/* Timeline Node / Dot */}
                        <span
                            aria-hidden="true"
                            className={`absolute -start-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white ${
                                job.isCurrent
                                    ? "bg-slate-600"
                                    : "bg-slate-300"
                            }`}
                        ></span>

                        {/* Card Container */}
                        <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-slate-300">
                            {/* Header: Role, Company & Date */}
                            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                                <div>
                                    <h3 className="text-[0.9rem] md:text-lg font-semibold text-slate-900">
                                        {job.role}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-x-2 text-[0.8rem] md:text-[0.9rem]">
                                        {job.companyUrl ? (
                                            <a
                                                href={job.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:underline"
                                            >
                                                {job.company}
                                            </a>
                                        ) : (
                                            <span>{job.company}</span>
                                        )}
                                    </div>
                                </div>

                                <time
                                    className="mt-1 inline-flex w-fit items-center rounded-lg bg-slate-100 px-2.5 py-1 text-slate-700 sm:mt-0
                                    text-[0.7rem] md:text-[0.8rem]"
                                >
                                    {job.period}
                                </time>
                            </div>
                            {/* Summary */}
                            <p className="hidden md:block mt-3 text-sm leading-relaxed text-slate-600">
                                {job.summary}
                            </p>
                            {/* Tech / Skill Tags */}
                            {job.skills.length > 0 && (
                                <div className="hidden md:flex mt-4 flex-wrap gap-1.5">
                                    {job.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
