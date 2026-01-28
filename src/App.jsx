import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import ConstructionTape from './components/ConstructionTape.jsx';



const App = () => {
    return (
        <> 


           
            <NavBar/>
            <ConstructionTape />
            <Hero/>

            <ShowcaseSection/>
            {/*<LogoSection/>   dont forget to add your own images here*/}
            <FeatureCards/>
            <ExperienceSection/>
            <TechStack/>

        </>
    )
}
export default App
