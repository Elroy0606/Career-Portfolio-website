import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TrashAction = ({ buttonRef, onComplete }) => {
    const overlayRef = useRef();
    const flyingBtnRef = useRef();
    const binRef = useRef();
    const lidRef = useRef();

    useGSAP(() => {
        if (!buttonRef.current) return;

        // 1. Get the starting position of the real navbar button
        const rect = buttonRef.current.getBoundingClientRect();

        const tl = gsap.timeline({
            onComplete: () => {
                // Wait a second then tell parent to unmount this overlay
                gsap.to(overlayRef.current, {
                    opacity: 0,
                    delay: 0.5,
                    onComplete: onComplete
                });
            }
        });

        // 2. The Animation Sequence
        tl.set(flyingBtnRef.current, {
            x: rect.left,
            y: rect.top,
            width: rect.width,
            height: rect.height,
        })
            .fromTo(binRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 })
            .to(flyingBtnRef.current, {
                x: window.innerWidth / 2 - rect.width / 2,
                y: window.innerHeight / 2 - 100,
                duration: 0.7,
                ease: "back.inOut(1.7)",
                rotation: 15,
            })
            .to(lidRef.current, { rotation: -45, transformOrigin: "left bottom", duration: 0.2 }, "-=0.2")
            .to(flyingBtnRef.current, {
                y: window.innerHeight / 2,
                opacity: 0,
                scale: 0.5,
                duration: 0.3,
                ease: "power2.in"
            })
            .to(lidRef.current, { rotation: 0, duration: 0.2, ease: "bounce.out" })
            .to(binRef.current, { y: 10, repeat: 3, yoyo: true, duration: 0.05 });

    }, { scope: overlayRef });

    return (
        <div ref={overlayRef} style={styles.overlay}>
            {/* This is the "Ghost" button that actually flies */}
            <div ref={flyingBtnRef} style={styles.flyingButton}>
                Contact me
            </div>

            {/* The Garbage Bin in Center */}
            <div ref={binRef} style={styles.bin}>
                <svg width="80" height="100" viewBox="0 0 60 80">
                    <path ref={lidRef} d="M5 15H55V10H40V5H20V10H5V15Z" fill="#333" />
                    <path d="M10 20H50L45 75H15L10 20Z" fill="#666" />
                    <line x1="22" y1="30" x2="22" y2="65" stroke="#444" strokeWidth="2" />
                    <line x1="38" y1="30" x2="38" y2="65" stroke="#444" strokeWidth="2" />
                </svg>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'fixed',
        top: 0, left: 0, width: '100vw', height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.1)',
        zIndex: 9999,
        pointerEvents: 'none'
    },
    flyingButton: {
        position: 'absolute',
        background: '#e53e3e',
        color: 'white',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '14px',
        fontWeight: 'bold'
    },
    bin: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
};

export default TrashAction;