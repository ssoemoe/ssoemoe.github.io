import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import type { NavbarLink } from "./components/navbar/types";
import Contact from "./components/contact/Contact";

function App() {
    const navLinks: NavbarLink[] = [
        { label: "Home", href: "#home" },
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
                <section className="mt-50 mb-50 md:mt-50 md:mb-50 flex w-full justify-contents align-items">
                    <Home />
                </section>
                <div id="contact">
                    <Contact />
                </div>
            </div>
        </>
    );
}

export default App;
