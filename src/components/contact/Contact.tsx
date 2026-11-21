export default function Contact() {
    return (
        <>
            <h1 className="w-full flex align-items justify-center heading mb-3 md:mb-5 fade-in-slide">
                Let's connect!
            </h1>
            <div className="w-full flex align-items justify-center gap-5 fade-in-slide">
                <a
                    href="https://github.com/ssoemoe"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/github.svg"
                        alt="Shane's GitHub"
                        className="h-10 w-10 rounded-full object-contain hover:bg-slate-200"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/shane-khant-soe-moe-24ab45113/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-slate-200"
                >
                    <img
                        src="/linkedin.webp"
                        alt="Shane's LinkedIn"
                        className="h-10 object-contain"
                    />
                </a>
            </div>
        </>
    );
}
