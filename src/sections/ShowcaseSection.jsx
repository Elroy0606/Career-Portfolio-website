import React, {useRef} from 'react'
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import Button from "../components/Button.jsx";

gsap.registerPlugin( ScrollTrigger );
const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(()=> {

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index +1),
                    scrollTrigger: {
                        trigger: card,
                        start:'top bottom-=100',
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            {opacity:0},
            {opacity:1, duration:1.5})
    },[])
    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div
                        className="first-project-wrapper"
                        ref={project1Ref}
                        onClick={() => window.open("https://github.com/Elroy0606", "_blank")}
                        style={{
                            cursor: 'pointer',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            backgroundColor: '#111',
                            transition: 'all 0.3s ease',
                            border: '1px solid #333',
                            maxWidth: '50%', // Prevents the container from being "too big"
                            margin: '20px auto', // Centers the container on your page
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 128, 128, 0.3)';
                            e.currentTarget.style.borderColor = 'cyan';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = '#333';
                        }}
                    >
                        {/* Image Section: Perfect Square & Centered */}
                        <div className="image-wrapper" style={{
                            backgroundColor: 'darkgray',
                            height: '200px', // Fixed height for a consistent look
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative'
                        }}>
                            <img
                                src="/images/cyberSecReport.png"
                                alt="Ryde"
                                style={{
                                    width: '100%', // Explicit size for the logo
                                    objectFit: 'contain'
                                }}
                            />
                        </div>

                        {/* Text Section: Clean and Minimal */}
                        <div className="text-content" style={{ padding: '20px', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#fff', lineHeight: '1.4' }}>
                                My Penetration Testing Reports.
                            </h2>
                            <p style={{ color: 'teal', fontSize: '0.9rem', fontWeight: 'bold', margin: 0 }}>
                                VIEW REPORTS ↗
                            </p>
                        </div>
                    </div>

                    <div
                        className="first-project-wrapper"
                        ref={project1Ref}
                        onClick={() => window.open("https://tetris.elcybersec.com", "_blank")}
                        style={{
                            cursor: 'pointer',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            backgroundColor: '#111',
                            transition: 'all 0.3s ease',
                            border: '1px solid #333',
                            maxWidth: '50%', // Prevents the container from being "too big"
                            margin: '20px auto', // Centers the container on your page
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 128, 128, 0.3)';
                            e.currentTarget.style.borderColor = 'cyan';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = '#333';
                        }}
                    >
                        {/* Image Section: Perfect Square & Centered */}
                        <div className="image-wrapper" style={{
                            backgroundColor: 'darkgray',
                            height: '200px', // Fixed height for a consistent look
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative'
                        }}>
                            <img
                                src="/images/tetris.png"
                                alt="Ryde"
                                style={{
                                    width: '100%', // Explicit size for the logo
                                    objectFit: 'contain'
                                }}
                            />
                        </div>

                        {/* Text Section: Clean and Minimal */}
                        <div className="text-content" style={{ padding: '20px', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#fff', lineHeight: '1.4' }}>
                                Tetris Game
                            </h2>
                            <p style={{ color: 'teal', fontSize: '0.9rem', fontWeight: 'bold', margin: 0 }}>
                                VISIT GAME ↗
                            </p>
                        </div>
                    </div>

                    <div
                        className="first-project-wrapper"
                        ref={project1Ref}
                        onClick={() => window.open("https://elcybersec.com", "_blank")}
                        style={{
                            cursor: 'pointer',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            backgroundColor: '#111',
                            transition: 'all 0.3s ease',
                            border: '1px solid #333',
                            maxWidth: '50%', // Prevents the container from being "too big"
                            margin: '20px auto', // Centers the container on your page
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 128, 128, 0.3)';
                            e.currentTarget.style.borderColor = 'cyan';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = '#333';
                        }}
                    >
                        {/* Image Section: Perfect Square & Centered */}
                        <div className="image-wrapper" style={{
                            backgroundColor: 'darkgray',
                            height: '200px', // Fixed height for a consistent look
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative'
                        }}>
                            <img
                                src="/images/port3d.png"
                                alt="Ryde"
                                style={{
                                    width: '100%', // Explicit size for the logo
                                    objectFit: 'contain'
                                }}
                            />
                        </div>

                        {/* Text Section: Clean and Minimal */}
                        <div className="text-content" style={{ padding: '20px', textAlign: 'center' }}>
                            <h2 style={{ fontSize: '1.25rem', marginBottom: '8px', color: '#fff', lineHeight: '1.4' }}>
                                My Official Portfolio Website
                            </h2>
                            <p style={{ color: 'teal', fontSize: '0.9rem', fontWeight: 'bold', margin: 0 }}>
                                VIEW WEBSITE ↗
                            </p>
                        </div>
                    </div>

                    {/*<div className="first-project-wrapper"*/}
                    {/*     ref={project1Ref}*/}
                    {/*     onClick={() => window.open("https://github.com/Elroy0606", "_blank")}*/}
                    {/*     style={{ cursor: 'pointer' }}*/}
                    {/*>*/}
                    {/*    <div className="image-wrapper" style={{ backgroundColor: 'teal'}}>*/}
                    {/*        <img src="/images/cyberSecReport.png" alt="Ryde"*/}
                    {/*             style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}/>*/}
                    {/*    </div>*/}
                    {/*    <div className="text-content">*/}
                    {/*    <h2>Detailed write-ups and technical analysis for my security findings.</h2>*/}
                    {/*        <Button*/}
                    {/*            className="md:w-80 md:h-16 w-60 h-12"*/}
                    {/*            id="button"*/}
                    {/*            text="See my Work"*/}

                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/* Right */}
                    {/*<div className="project-list-wrapper overflow-hidden">*/}
                    {/*    <div className="project>" ref={project2Ref}>*/}
                    {/*        <div className="image-wrapper bg-[#ffefdb]">*/}
                    {/*            <img src="/images/project2.png" alt="Library Management Platform"/>*/}
                    {/*        </div>*/}
                    {/*        <h2>Library Management Platform</h2>*/}

                    {/*    </div>*/}

                    {/*    <div className="project>" ref={project3Ref}>*/}
                    {/*    <div className="image-wrapper bg-[#ffe7db]">*/}
                    {/*        <img src="/images/project3.png" alt="YC directory"/>*/}
                    {/*    </div>*/}
                    {/*    <h2>YC Directory - A Startup showcase App</h2>*/}

                    {/*</div>*/}
                    {/*</div>*/}
                </div>

            </div>
        </div>
    )
}
export default ShowcaseSection
