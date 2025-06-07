import NavBar from "./components/NavBar"
import Contact from "./sections/Contact"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCard from "./sections/FeatureCard"
import Hero from "./sections/Hero"
import LogoSection from "./sections/LogoSection"
import ShowcaseSection from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"
import Footer from "./sections/Footer"
const App = () => {
  return (
    <>
    <NavBar/>
      <Hero/>
      <ShowcaseSection />
      <LogoSection />
      <FeatureCard/>
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact/>
      <Footer />
    </>

  )
}

export default App
  