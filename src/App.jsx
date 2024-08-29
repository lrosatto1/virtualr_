import FeatureSection from "./Components/FeatureSection";
import FooterSection from "./Components/FooterSection";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import PricingSection from "./Components/PricingSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import WorkflowSection from "./Components/WorkflowSection";

const App = () => {
  return (
  <>
  <Navbar/>
  <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection/>
    <FeatureSection/>
    <WorkflowSection/>
    <PricingSection/>
    <TestimonialsSection/>
    <FooterSection/>
  </div>
  </>
  );
};

export default App;
