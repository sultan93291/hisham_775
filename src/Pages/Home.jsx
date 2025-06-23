import Hero from "../Components/HomePageComponents/Hero";
import Video from "../Components/HomePageComponents/Video";
import KeyFeathers from "../Components/HomePageComponents/KeyFeathers";
import HowItWorks from "../Components/HomePageComponents/HowItWorks";
import Pricing from "../Components/HomePageComponents/Pricing";
import Testimonial from "../Components/HomePageComponents/Testimonial";
import WhyChoose from "../Components/HomePageComponents/WhyChoose";
import ContactUs from "../Components/HomePageComponents/ContactUs";
import CaseStudy from "../Components/HomePageComponents/CaseStudy";
import FAQ from "../Components/HomePageComponents/FAQ";
import Founder from "../Components/HomePageComponents/Founder";

const Home = () => {
  return (
    <>
      <Hero />
      <Video />
      <KeyFeathers />
      <HowItWorks />
      <Pricing />
      <Testimonial />
      <WhyChoose />
      <CaseStudy />
      <FAQ />
      <Founder />
      <ContactUs />
    </>
  );
};

export default Home;
