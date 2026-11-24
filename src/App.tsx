import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import type { NavbarLink } from "./components/navbar/types";
import Contact from "./components/contact/Contact";
import JobTimeline from "./components/timeline/Timeline";
import Edu from "./components/edu/Edu";
import Awards from "./components/awards/Awards";

function App() {
    const navLinks: NavbarLink[] = [
        { label: "Home", href: "#" },
        { label: "Experience", href: "#xp" },
        { label: "Contact", href: "#contact" },
    ];
    return (
        <>
            <p className="w-full bg-yellow-300 text-center">
                ⚒The website is under construction.⚒
            </p>
            <Navbar navLinks={navLinks} />
            <div className="px-10">
                <div
                    id="home"
                    className="mt-50 mb-50 md:mt-50 md:mb-50 flex w-full justify-contents align-items"
                >
                    <Home />
                </div>
                <div
                    id="about"
                    className="mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 mb-10 md:mb-15 gap-25"
                >
                    <div id="edu">
                        <Edu />
                    </div>
                    <div id="awards">
                        <Awards />
                    </div>
                </div>
                <div id="xp">
                    <JobTimeline />
                </div>
                <div id="contact" className="w-full pr-5 mb-20">
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default App;
