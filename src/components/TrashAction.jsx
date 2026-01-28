import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TrashAction = ({ buttonRef, onComplete }) => {
    const [isButtonGone, setIsButtonGone] = useState(false);

    const overlayRef = useRef();
    const flyingBtnRef = useRef();
    const binRef = useRef();
    const lidRef = useRef();
    const characterRef = useRef();
    const bubbleRef = useRef();

    useGSAP(() => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();

        const tl = gsap.timeline({
            onComplete: () => {
                // Fade out the entire overlay and trigger the parent's onComplete
                gsap.to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.5,
                    onComplete: onComplete
                });
            }
        });

        // 1. Initial Setup
        tl.set([characterRef.current, bubbleRef.current], { opacity: 0, y: 50 })
            .set(flyingBtnRef.current, {
                x: rect.left,
                y: rect.top,
                width: rect.width,
                height: rect.height,
            });

        // 2. Arrival
        tl.to(characterRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" })
            .to(bubbleRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.2");

        // 3. Wait for User
        tl.add(() => {
            tl.pause();
            const resume = (e) => {
                if (e.key === 'Enter' || e.type === 'touchstart') {
                    tl.play();
                    window.removeEventListener('keydown', resume);
                    window.removeEventListener('touchstart', resume);
                }
            };
            window.addEventListener('keydown', resume);
            window.addEventListener('touchstart', resume);
        });

        // 4. Trash Sequence
        tl.to([characterRef.current, bubbleRef.current], { opacity: 0, scale: 0.5, duration: 0.3 })
            .fromTo(binRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4 })
            .to(flyingBtnRef.current, {
                x: window.innerWidth / 2 - rect.width / 2,
                y: window.innerHeight / 2 - 100,
                rotation: 15,
                duration: 0.7,
                ease: "back.inOut(1.7)"
            })
            .to(lidRef.current, { rotation: -45, transformOrigin: "left bottom", duration: 0.2 }, "-=0.2")
            // ... lid opens, button flies in
            .to(flyingBtnRef.current, {
                y: window.innerHeight / 2,
                opacity: 0,
                scale: 0.5,
                duration: 0.3,
                ease: "power2.in",
                // THIS IS THE CRITICAL PART
                onComplete: () => {
                    setIsButtonGone(true); // 1. Deletes the button from the code
                }
            })
            .to(lidRef.current, { rotation: 0, duration: 0.2, ease: "bounce.out" })
            // ... bin jiggles and disappears
            .to(binRef.current, { opacity: 0, scale: 0, duration: 0.3, delay: 0.5 })
            .add(() => {
                // 2. NOW it is safe to change the text because the button is already deleted from the state
                bubbleRef.current.innerHTML = "That button should have never been there... <br/> Anyways, please continue!";
            })
            .to([characterRef.current, bubbleRef.current], { opacity: 1, scale: 1, duration: 0.5 })
            .to({}, { duration: 2.5 }) // Wait
            .to([characterRef.current, bubbleRef.current], { opacity: 0, y: 50, duration: 0.5 });

    }, { scope: overlayRef });

    return (
        <div ref={overlayRef} style={styles.overlay}>
            <div ref={characterRef} style={styles.characterWrapper}>
                <div ref={bubbleRef} style={styles.speechBubble}>

                    🚨 ALERT! 🚨

                    <div>

                        WHY ARE YOU TRYING TO DELETE MY WEBSITE?!?!</div>

                    <div>I didn't stay up for 72 hours coding this Website just for you to 'Yeet' it into the void. <strong>Sorry but you cant be trusted with this button.</strong>

                    </div>

                    <span style={{ fontSize: '12px', color: '#666', marginTop: '10px', display: 'block' }}>
                        [ Press Enter to proceed ]
                    </span>
                </div>
                <img src="/images/squirel2.png" alt="Helper" style={styles.characterImg} />
            </div>

            {/* If the state is not true, the button exists. Once true, it is DELETED from the DOM */}
            {!isButtonGone && (
                <div ref={flyingBtnRef} style={styles.flyingButton}>
                    DELETE WEBSITE
                </div>
            )}
            <div ref={binRef} style={styles.bin}>
                <svg width="80" height="100" viewBox="0 0 60 80">
                    <path ref={lidRef} d="M5 15H55V10H40V5H20V10H5V15Z" fill="#333" />
                    <path d="M10 20H50L45 75H15L10 20Z" fill="#666" />
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
        zIndex: 2147483647,
        pointerEvents: 'none',
        padding: window.innerWidth < 768 ? '6px 12px' : '10px 20px',
        fontSize: window.innerWidth < 768 ? '10px' : '14px',

    },
    characterWrapper: {
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    characterImg: {
        width: '400px',
        height: 'auto',
    },
    speechBubble: {
        background: '#fff',
        color: '#000',
        border: '2px solid #333',
        borderRadius: '15px',
        padding: '12px',
        marginBottom: '10px',
        fontSize: '14px',
        fontWeight: '500',
        maxWidth: '180px',
        textAlign: 'center',
        boxShadow: '4px 4px 0px rgba(0,0,0,0.1)',
        position: 'relative'
    },
    flyingButton: {
        position: 'absolute',
        background: '#e53e3e',
        color: 'white',
        borderRadius: '8px',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',

        // --- RESPONSIVE LOGIC ---
        // If screen is less than 768px (standard mobile breakpoint)
        padding: window.innerWidth < 768 ? '6px 12px' : '10px 20px',
        fontSize: window.innerWidth < 768 ? '10px' : '14px',
        // ------------------------
    },
    bin: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
};

export default TrashAction;