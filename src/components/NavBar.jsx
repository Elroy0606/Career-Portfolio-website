import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";
import TrashAction from "./TrashAction.jsx";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);
    const contactBtnRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const startDeleteSequence = (e) => {
        e.preventDefault();
        setIsDeleting(true);
    };

    const handleAnimationComplete = () => {
        setIsDeleting(false);
        setIsDeleted(true);
    };

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner flex items-center justify-between w-full px-6">

                {/* 1. Left Slot: Logo */}
                <div className="flex-1 flex justify-start">
                    <a href="#hero" className="logo flex items-center gap-2">
                        <img src="/images/squirel2.png" alt="Logo" className="w-12 h-12 object-contain" />
                        <span className="font-bold">Elroy Fernandes</span>
                    </a>
                </div>

                {/* 2. Middle Slot: Navigation (Fixed Center) */}
                <nav className="desktop flex-none">
                    <ul className="flex gap-8">
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link} className="relative">
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* 3. Right Slot: Button (Fixed Width Placeholder) */}
                <div className="flex-1 flex justify-end">
                    <div style={{
                        minWidth: '160px', // Matches your button width to prevent layout shift
                        display: 'flex',
                        justifyContent: 'flex-end',
                        visibility: isDeleted ? 'hidden' : 'visible',
                        pointerEvents: isDeleted ? 'none' : 'auto',
                    }}>
                        <a
                            href="#contact"
                            ref={contactBtnRef}
                            onClick={startDeleteSequence}
                            className={`contact-btn group ${isDeleting ? 'opacity-0 pointer-events-none' : ''}`}
                            style={{ transition: 'opacity 0.2s' }}
                        >
                            <div className="inner">
                                <span>DELETE WEBSITE</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {isDeleting && (
                <TrashAction
                    buttonRef={contactBtnRef}
                    onComplete={handleAnimationComplete}
                />
            )}
        </header>
    );
}

export default NavBar;