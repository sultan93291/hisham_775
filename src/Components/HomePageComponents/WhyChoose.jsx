import { useTranslation } from "react-i18next";
import {
  FFourSvg,
  FTwoSvg,
  RightArrowSvg,
  WOneSvg,
  WTwoSvg,
} from "../Svg/SvgContainer";

const WhyChoose = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      icon: <WOneSvg />,
      title: t("choose_title_one"),
      description: t("choose_description_one"),
    },
    {
      id: 2,
      icon: <FTwoSvg />,
      title: t("choose_title_two"),
      description: t("choose_description_two"),
    },
    {
      id: 3,
      icon: <WTwoSvg />,
      title: t("choose_title_three"),
      description: t("choose_description_three"),
    },
    {
      id: 4,
      icon: <FFourSvg />,
      title: t("choose_title_four"),
      description: t("choose_description_four"),
    },
  ];

  return (
    <section className="py-40">
      <div className="container">
        <div className="grid grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex gap-3 items-center mb-5"
            >
              <h3 className="sub_title">{t("choose_upper_sub_title")}</h3>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-4xl font-semibold leading-[140%] max-w-[1000px] mx-auto"
            >
              {t("choose_upper_title")}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="py-10 text-secondary-gray text-xl leading-[165%]"
            >
              {t("choose_upper_description")}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="100"
              className="w-fit flex gap-2 items-center justify-center text-center text-primary-blue text-xl font-medium cursor-pointer mb-20"
            >
              <p>{t("choose_upper_btn")}</p>
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
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="w-[90px] h-[90px] rounded-full grid place-items-center bg-[#F5F8FC]"
                >
                  {item?.icon}
                </p>
                {/* Title */}
                <h3
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-xl font-medium py-5 group-hover:text-white"
                >
                  {item?.title}
                </h3>
                {/* Description */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-secondary-gray leading-[150%] group-hover:text-[#E8E8E8]"
                >
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
