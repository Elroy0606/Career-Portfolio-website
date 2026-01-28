import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import TitleHeader from "../components/TitleHeader";
import { languagesIK } from "../constants/index.js";

gsap.registerPlugin(ScrollTrigger);

const Polyglot = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".tech-card, .polyglot-definition", // Added the definition to the animation
            { y: 50, opacity: 0 },
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
    }, { scope: "#polyglot" });

    return (
        <section id="polyglot" className="flex-center section-padding flex-col">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="How Many Languages I Speak" />

                <div className="tech-grid">
                    {languagesIK && languagesIK.map((item) => (
                        <div
                            key={item.name}
                            className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                        >
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="padding-x w-full">
                                    <p className="text-center font-bold text-white">{item.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- POLYGLOT DEFINITION ADDED HERE --- */}
                <div className="polyglot-definition mt-16 text-center max-w-2xl mx-auto">
                    <h4 className="text-xl font-semibold text-yellow-400 mb-2">
                        What is a Polyglot?
                    </h4>
                    <p className="text-white-50 text-lg italic">
                        "A person who knows and is able to use several languages."
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Polyglot;