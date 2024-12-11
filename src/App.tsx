import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import EthicalBanking from "./components/EthicalBanking/EthicalBanking"
import Community from "./components/Community/Community"
import Stats from "./components/Stats/Stats"
import FeaturesGrid from "./components/FeatureCard/FeatureCard"
import CallToAction from "./components/CTA/CallToAction"
import Footer from "./components/Footer/Footer"


function App() {
  

  return (
    <>
    <Navbar />
    <Hero />
    <EthicalBanking />
    <Community />
    <Stats />
    <FeaturesGrid />
    <CallToAction />
    <Footer />
    </>
  )
}

export default App
