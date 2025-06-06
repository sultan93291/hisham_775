import hero from "../../assets/hero_frame.png";
import union from "../../assets/hero_union.png";
import { MouseSvg } from "../Svg/SvgContainer";

const Hero = () => {
  return (
    <section
      className="bg-no-repeat bg-center bg-cover object-cover text-center pt-28 pb-80 relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="container">
        {/* Sub title */}
        <div className="flex gap-3 items-center justify-center mb-5">
          <h3 className="sub_title">Smarter Targeting</h3>
          <MouseSvg />
        </div>

        {/* title */}
        <h1 className="text-6xl font-semibold leading-[150%] max-w-[1000px] mx-auto">
          InsightReach Smart Audience Targeting for Higher ROI
        </h1>

        {/* Desc */}
        <p className="py-10 max-w-[1000px] mx-auto text-secondary-gray text-xl leading-[160%]">
          An AI-powered marketing platform that delivers hyper-targeted ads
          using real-time data helping businesses reach the right customers at
          the lowest cost. Launch Your Campaign
        </p>

        {/* btn */}
        <button className="px-12 py-4 font-medium cursor-pointer shadow rounded-xl bg-primary-blue text-white transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#2466FF] hover:to-[#FF32B4]">
          Launch Your Campaign
        </button>
      </div>

      {/* Union Logo */}
      <div className="absolute left-20 top-10">
        <img src={union} alt="union" />
      </div>
      <div className="absolute right-20 bottom-60">
        <img src={union} alt="union" />
      </div>
    </section>
  );
};

export default Hero;
