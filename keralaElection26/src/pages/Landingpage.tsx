import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import StatsBar from "../components/StatusBar";
import FeaturesGrid from "../components/FeaturesGrid";
import HowItWorks from "../components/HowItWorks";
import CtaBlock from "../components/CtaBlock";
 
export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-5 py-8 pb-20">
        <Navbar />
        <HeroSection />
        <StatsBar />
        <hr className="border-gray-100 my-8" />
        <FeaturesGrid />
        <hr className="border-gray-100 my-8" />
        <HowItWorks />
        <CtaBlock />
      </div>
    </div>
  );
}
 