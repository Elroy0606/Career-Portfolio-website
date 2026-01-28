import React from 'react'
import {abilities} from "../constants/index.js";

const FeatureCards = () => {
    return (
        // Adding id="about" so the Navbar can find it
        // Adding mt-20 (Margin Top) to create space between this and the section above
        <section id="aboutme" className="w-full padding-x-lg mt-20 md:mt-32">
            <div className="mx-auto grid-3-cols">
                {abilities.map(({imgPath, title, desc})=>(
                    <div key={title} className="card-border rounded-xl p-8 flex flex-col gap-4">
                        <div className="size-14 flex items-center justify-center rounded-full bg-black-200">
                            <img src={imgPath} alt={title} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">
                            {title}
                        </h3>
                        <p className="text-white-50 text-lg">{desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default FeatureCards
