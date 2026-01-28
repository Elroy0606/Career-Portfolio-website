import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all"; // Important: Register ScrollTrigger
import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/Models/TechLogos/TechIconCardExperience.jsx";
import { languagesIK } from "../constants/index.js"; // Make sure this is the correct array

gsap.registerPlugin(ScrollTrigger);

const Polyglot = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".tech-card",
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#polyglot",
                    start: "top center",
                },
            }
        );
    }, { scope: "#polyglot" }); // Scoping prevents GSAP from looking outside this component

    return (
        <div id="polyglot" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="How Many Languages I Speak" />

                <div className="tech-grid">
                    {/* Use languagesIK here since that is what you defined */}
                    {languagesIK.map((item) => (
                        <div
                            key={item.name}
                            className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                        >
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    {/* Pass 'item' which contains your modelPath, scale, etc. */}

                                </div>
                                <div className="padding-x w-full">
                                    <p className="text-center font-bold">{item.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Polyglot;