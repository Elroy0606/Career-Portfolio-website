import { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";
import TrashAction from "./TrashAction.jsx";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isDeleted, SetIsDeletd]= useState(false);

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
        setIsDeleting(false); // Close the TrashAction overlay
        setIsDeleted(true);   // Tell the NavBar the button is gone forever
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

                {/* 1. Only render the button if isDeleted is FALSE */}
                {!isDeleted && (
                    <a
                        href="#contact"
                        ref={contactBtnRef}
                        onClick={startDeleteSequence}
                        /* 2. Hide it during animation so it doesn't look like there are two buttons */
                        className={`contact-btn group ${isDeleting ? 'opacity-0 pointer-events-none' : ''}`}
                        style={{ transition: 'opacity 0.2s' }}
                    >
                        <div className="inner">
                            <span>Contact me</span>
                        </div>
                    </a>
                )}
            </div>

            {isDeleting && (
                <TrashAction
                    buttonRef={contactBtnRef}
                    onComplete={handleAnimationComplete} // 3. Call the completion handler
                />
            )}
        </header>
    );
}

export default NavBar;