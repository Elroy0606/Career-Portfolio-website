import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TrashAction = ({ buttonRef, onComplete }) => {
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
                gsap.to(overlayRef.current, {
                    opacity: 0,
                    delay: 0.5,
                    onComplete: onComplete
                });
            }
        });

        // 1. Setup Initial States
        tl.set([characterRef.current, bubbleRef.current], { opacity: 0, y: 50 })
            .set(flyingBtnRef.current, {
                x: rect.left,
                y: rect.top,
                width: rect.width,
                height: rect.height,
            });

        // 2. Character Arrival & Dialogue
        tl.to(characterRef.current, { opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" })
            .to(bubbleRef.current, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }, "-=0.2")
            .to(characterRef.current, {
                rotation: 3,
                repeat: 5,
                yoyo: true,
                duration: 0.15,
                ease: "sine.inOut"
            });

        // --- THE PAUSE FUNCTION ---
        tl.add(() => {
            tl.pause(); // Stop the animation right here

            const resumeOnEnter = (event) => {
                // Check if the pressed key is Enter
                if (event.key === "Enter") {
                    // Prevent default behavior (like submitting forms)
                    event.preventDefault();

                    tl.play(); // Resume the animation
                    window.removeEventListener('keydown', resumeOnEnter); // Clean up
                }
            };

            window.addEventListener('keydown', resumeOnEnter );
        });
        // ---------------------------

        // 3. The Exit and Trash Sequence
        // This will now only happen AFTER the user moves their mouse
        tl.to([characterRef.current, bubbleRef.current], { opacity: 0, scale: 0.5, duration: 0.3, ease: "back.in" })
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

        // ... existing trash sequence (bin jiggling)

// 4. The Final Message
        tl.to(binRef.current, { opacity: 0, scale: 0, duration: 0.3, delay: 0.5 }) // Bin disappears
            .add(() => {
                // Change the text for the final goodbye
                bubbleRef.current.innerHTML = "That button should have never been there... <br/> Anyways, please continue seeing my website!";
            })
            .to([characterRef.current, bubbleRef.current], {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: "back.out"
            })
            .to({}, { duration: 3.5 }) // Hold for 2.5 seconds so they can read it
            .to([characterRef.current, bubbleRef.current], {
                opacity: 0,
                y: 50,
                duration: 0.5,
                ease: "power2.in"
            });

    }, { scope: overlayRef });

    return (
        <div ref={overlayRef} style={styles.overlay}>
            {/* Character & Speech Bubble */}
            <div ref={characterRef} style={styles.characterWrapper}>
                <div ref={bubbleRef} style={styles.speechBubble}>
                    🚨 EMERGENCY! 🚨 User detected with zero chill!
                    <div>I didn't stay up for 72 hours coding this Website just for you to 'Yeet' it into the void. This button is going to the shadow realm. </div>

                    <span style={{ fontSize: '12px', color: '#666', marginTop: '5px', display: 'block' }}>
                        [ Press Enter to proceed ]
                    </span>
                </div>
                {/* Replace src with your imported drawing */}
                <img
                    src="/images/squirel2.png"
                    alt="Helper Character"
                    style={styles.characterImg}
                />
            </div>

            <div ref={flyingBtnRef} style={styles.flyingButton}>
                DELETE WEBSITE
            </div>

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
    characterWrapper: {
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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