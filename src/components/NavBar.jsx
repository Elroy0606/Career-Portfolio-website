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
            <div className="inner">
                <a href="#hero" className="logo">Elroy Fernandes</a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* --- FIX PLACED HERE --- */}
                {/* We keep the div rendered ALWAYS so the space is reserved */}
                <div style={{
                    visibility: isDeleted ? 'hidden' : 'visible',
                    pointerEvents: isDeleted ? 'none' : 'auto',
                    display: 'flex' // Ensures it behaves like the button did
                }}>
                    <a
                        href="#contact"
                        ref={contactBtnRef}
                        onClick={startDeleteSequence}
                        className={`contact-btn group ${isDeleting ? 'opacity-0 pointer-events-none' : ''}`}
                        style={{ transition: 'opacity 0.2s' }}
                    >
                        <div className="inner">
                            <span>Contact me</span>
                        </div>
                    </a>
                </div>
                {/* --- END OF FIX --- */}
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