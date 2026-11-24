import React from "react";
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
        <section className="mx-auto max-w-3xl px-4 py-12 fade-in-slide">
            <h1 className="w-full flex align-items justify-center heading mb-3 md:mb-10">
                Experience
            </h1>
            {/* Vertical Timeline Rail */}
            <ol className="relative border-s-2 border-slate-200 dark:border-slate-800">
                {items.map((job) => (
                    <li key={job.id} className="mb-10 ms-6 last:mb-0">
                        {/* Timeline Node / Dot */}
                        <span
                            aria-hidden="true"
                            className={`absolute -start-[9px] mt-1.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-white dark:ring-slate-950 ${
                                job.isCurrent
                                    ? "bg-slate-600"
                                    : "bg-slate-300 dark:bg-slate-700"
                            }`}
                        ></span>

                        {/* Card Container */}
                        <div className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-xs transition hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700">
                            {/* Header: Role, Company & Date */}
                            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                                        {job.role}
                                    </h3>
                                </div>

                                <time className="mt-1 inline-flex w-fit items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 sm:mt-0 dark:bg-slate-800 dark:text-slate-300">
                                    {job.period}
                                </time>
                            </div>

                            <div className="flex flex-wrap items-center gap-x-2 text-sm font-medium">
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
                            {/* Summary */}
                            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                                {job.summary}
                            </p>
                            {/* Tech / Skill Tags */}
                            {job.skills.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {job.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-950/60 dark:text-slate-300"
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
