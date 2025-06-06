import {
  FFourSvg,
  FTwoSvg,
  RightArrowSvg,
  WOneSvg,
  WTwoSvg,
} from "../Svg/SvgContainer";
const data = [
  {
    id: 1,
    icon: <WOneSvg />,
    title: "Smarter AI Audience Targeting",
    description:
      "Pinpoint ideal customers using AI-driven segmentation for better performance, and improved campaign efficiency.",
  },
  {
    id: 2,
    icon: <FTwoSvg />,
    title: "Smarter AI Audience Targeting",
    description:
      "Continuously adjust your campaigns using live performance data to improve results without manual effort or guesswork.",
  },
  {
    id: 3,
    icon: <WTwoSvg />,
    title: "Unified Ad Management Platform",
    description:
      "Easily launch and manage ads across all major channels from a single, centralized and intuitive platform.",
  },
  {
    id: 4,
    icon: <FFourSvg />,
    title: "ROI Tracking Made Simple",
    description:
      "Access clear, actionable insights to measure campaign performance and return on investment with complete transparency.",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-40">
      <div className="container">
        <div className="grid grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="flex gap-3 items-center mb-5">
              <h3 className="sub_title">Why Choose InsightReach?</h3>
            </div>
            <h2 className="text-4xl font-semibold leading-[140%] max-w-[1000px] mx-auto">
              Why Thousands of Businesses Trust InsightReach to Power Their
              Marketing
            </h2>
            <p className="py-10 text-secondary-gray text-xl leading-[165%]">
              At InsightReach, we combine cutting-edge AI technology with
              real-time data and seamless multi-channel delivery to help
              businesses target smarter, spend efficiently, and grow faster. Our
              platform is designed for marketers who want to achieve more—with
              less effort, less waste, and far greater precision.
            </p>
            <button className="w-fit flex gap-2 items-center justify-center text-center text-primary-blue text-xl font-medium cursor-pointer mb-20">
              <p>Get Started</p>
              <RightArrowSvg />
            </button>
          </div>
          {/* Right */}
          <div className="grid grid-cols-2 gap-6">
            {data?.map(item => (
              <div
                key={item?.id}
                className="border border-[#2466FF80] p-6 rounded-2xl shadow bg-white group hover:bg-[linear-gradient(235deg,_#2466FF_3.26%,_#163D99_98.02%)] transition-all duration-500"
              >
                {/* Icon */}
                <p className="w-[90px] h-[90px] rounded-full grid place-items-center bg-[#F5F8FC]">
                  {item?.icon}
                </p>
                {/* Title */}
                <h3 className="text-xl font-medium py-5 group-hover:text-white">
                  {item?.title}
                </h3>
                {/* Description */}
                <p className="text-secondary-gray leading-[150%] group-hover:text-[#E8E8E8]">
                  {item?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
