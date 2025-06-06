import {
  FFourSvg,
  FOneSvg,
  FThreeSvg,
  FTwoSvg,
  RightArrowSvg,
} from "../Svg/SvgContainer";
const data = [
  {
    id: 1,
    icon: <FOneSvg />,
    title: "AI-Powered Audience Segmentation",
    description:
      "Target the right people with precision using AI to segment audiences by nationality, profession, and location—automatically and at scale.",
  },
  {
    id: 2,
    icon: <FTwoSvg />,
    title: "Multi-Channel Ad Delivery",
    description:
      "Run cohesive ad campaigns across Facebook, TikTok, WhatsApp, and more—all from one unified platform.",
  },
  {
    id: 3,
    icon: <FThreeSvg />,
    title: "Real-Time Performance Monitoring",
    description:
      "Track your campaign metrics live with instant updates on clicks, conversions, reach, and ROI—so you can optimize on the go.",
  },
  {
    id: 4,
    icon: <FFourSvg />,
    title: "Smart Budget Allocation",
    description:
      "Maximize ROI with AI that automatically distributes your ad spend to the best-performing channels and audiences.",
  },
];

const KeyFeathers = () => {
  return (
    <section className="py-40">
      <div className="container">
        {/* Upper part */}
        <div className="flex justify-between items-center gap-40 mb-12">
          <div>
            <div className="flex gap-3 items-center mb-5">
              <h3 className="sub_title">Key Features</h3>
            </div>
            <h2 className="text-4xl font-semibold leading-[140%] max-w-[1000px] mx-auto">
              Revolutionize Your Advertising with AI-Driven Precision
            </h2>
          </div>
          <p className="py-10 text-secondary-gray text-xl leading-[160%]">
            Harness the Power of Advanced Audience Segmentation, Multi-Channel
            Campaigns, Real-Time Analytics, and Smart Budgeting—All in One
            Intelligent Platform
          </p>
        </div>

        {/* Get Started btn */}
        <button className="w-fit mx-auto flex gap-2 items-center justify-center text-center text-primary-blue text-xl font-medium cursor-pointer mb-20">
          <p>Get Started</p>
          <RightArrowSvg />
        </button>

        {/* Lower part */}
        <div className="grid grid-cols-4 gap-6">
          {data?.map(item => (
            <div
              key={item?.id}
              className="border border-[#2466FF80] p-8 rounded-2xl shadow bg-white group hover:bg-[linear-gradient(235deg,_#2466FF_3.26%,_#163D99_98.02%)] transition-all duration-500"
            >
              {/* Icon */}
              <p className="w-24 h-24 rounded-full grid place-items-center bg-[#F5F8FC]">
                {item?.icon}
              </p>
              {/* Title */}
              <h3 className="text-2xl font-medium leading-[150%] py-5 group-hover:text-white">
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
    </section>
  );
};

export default KeyFeathers;
