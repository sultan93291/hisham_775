import { HOneSvg, HThreeSvg, HTwoSvg } from "../Svg/SvgContainer";
const data = [
  {
    id: 1,
    icon: <HOneSvg />,
    title: "Intelligent Data Analysis",
    description:
      "Our AI dives deep into audience behavior to uncover patterns, preferences, and performance signals—fueling smarter decisions.",
  },
  {
    id: 2,
    icon: <HTwoSvg />,
    title: "Automated Setup",
    description:
      "Our AI builds high-performing ad campaigns from scratch and selects the best platforms to reach your ideal audience.",
  },
  {
    id: 3,
    icon: <HThreeSvg />,
    title: "Live Optimization",
    description:
      "Budgets and strategies adapt instantly based on live performance data—maximizing results without manual effort.",
  },
];

const HowItWorks = () => {
  return (
    <section className="text-center">
      <div className="container">
        {/* Upper part */}
        <div>
          <div className="flex gap-3 items-center mb-5">
            <h3 className="sub_title text-center mx-auto">How It Works</h3>
          </div>
          <h2 className="text-[34px] font-semibold leading-[150%] max-w-[1190px] text-center mx-auto mb-16">
            Our AI analyzes audience behavior, builds optimized campaigns, and
            fine-tunes performance in real time so you don’t have to.
          </h2>
        </div>

        {/* Lower part */}
        <div className="grid grid-cols-3 gap-16">
          {data?.map(item => (
            <div key={item?.id} className="">
              {/* Icon */}
              <p className="w-24 h-24 rounded-full grid place-items-center bg-white mx-auto">
                {item?.icon}
              </p>
              {/* Title */}
              <h3 className="text-2xl font-medium leading-[150%] py-5 group-hover:text-white">
                {item?.title}
              </h3>
              {/* Description */}
              <p className="text-secondary-gray leading-[165%] group-hover:text-[#E8E8E8]">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
