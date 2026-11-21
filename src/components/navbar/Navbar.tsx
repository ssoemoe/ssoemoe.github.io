import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { NavbarLink } from "./types";

export default function Navbar(props: { navLinks: NavbarLink[] }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prev) => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="sticky top-0 z-50 bg-white">
            <div className="hidden md:block mx-auto max-w-xl px-4 py-3 fade-in-slide">
                {/* Desktop Navigation */}
                <nav
                    className="flex items-center justify-between"
                    aria-label="Primary"
                >
                    {props.navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-md font-normal hover:font-bold">
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="md:hidden">
                {/* Mobile Toggle Button */}
                <button
                    type="button"
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
                >
                    {isOpen ? (
                        <X className="h-6 w-6" />
                    ) : (
                        <Menu className="h-6 w-6" />
                    )}
                </button>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <nav
                    id="mobile-menu"
                    aria-label="Mobile"
                    className="border-t border-slate-200 bg-white px-4 py-3 md:hidden"
                >
                    <ul className="flex flex-col space-y-2">
                        {props.navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={closeMenu}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
