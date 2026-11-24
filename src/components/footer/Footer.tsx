export default function Footer() {
    return (
        <div className="text-center max-w w-full py-2 bg-slate-100 text-[0.7rem] md:text-[0.9rem]">
            Made with ❤️ by Shane Khant Soe Moe. &copy;{" "}
            {new Date().getFullYear()}
        </div>
    );
}