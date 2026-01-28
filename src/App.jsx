import React, { useState, useEffect } from 'react';
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import ConstructionTape from './components/ConstructionTape.jsx';
import MatrixBackground from "./components/MatrixBackground.jsx";

const App = () => {
    // 1. Initialize state from LocalStorage (defaults to 'true' if first visit)
    const [matrixEnabled, setMatrixEnabled] = useState(false);

    // 2. Save choice to LocalStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('matrix_enabled', JSON.stringify(matrixEnabled));
    }, [matrixEnabled]);

    return (
        <div className="relative">
            {/* 3. Conditional Rendering of the Background */}
            {matrixEnabled && <MatrixBackground />}

            <NavBar />

            {/* 4. The Settings Toggle UI */}
            <div className="fixed bottom-6 left-6 z-[999]">
                <button
                    onClick={() => setMatrixEnabled(!matrixEnabled)}
                    className="flex items-center gap-3 px-4 py-2 rounded-full border border-black-50 bg-black-100 hover:bg-black-200 transition-all group"
                >
                    <div className={`size-3 rounded-full transition-all ${matrixEnabled ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-red-500'}`} />
                    <span className="text-xs font-mono text-white-50 uppercase tracking-widest">
                        MATRIX Background: {matrixEnabled ? 'ACTIVATED' : 'DEACTIVATED'}
                    </span>
                </button>
            </div>

            <ConstructionTape />
            <Hero />
            <ShowcaseSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
        </div>
    )
}

export default App;