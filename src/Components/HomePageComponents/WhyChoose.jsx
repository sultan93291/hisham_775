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
    <section className="pt-10 pb-8 sm:py-14 lg:py-20 xl:py-32 2xl:py-40">
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-10 2xl:gap-20 items-center md:px-2 lg:px-5 2xl:px-0">
          {/* Left */}
          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex gap-3 items-center mb-2 lg:mb-5"
            >
              <h3 className="sub_title">{t("choose_upper_sub_title")}</h3>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-lg sm:text-xl lg:text-2xl 2xl:text-4xl font-medium sm:font-semibold leading-[140%] max-w-[1000px] mx-auto"
            >
              {t("choose_upper_title")}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="py-3 sm:py-5 xl:py-7 2xl:py-10 text-secondary-gray sm:text-lg 2xl:text-xl leading-[165%]"
            >
              {t("choose_upper_description")}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="100"
              className="w-fit flex gap-1 sm:gap-2 items-center justify-center text-center text-primary-blue sm:text-lg lg:text-xl font-medium cursor-pointer xl:mb-20"
            >
              <p>{t("choose_upper_btn")}</p>
              <RightArrowSvg />
            </button>
          </div>

          {/* Right */}
          <div className="grid sm:grid-cols-2 gap-5 2xl:gap-6">
            {data?.map(item => (
              <div
                key={item?.id}
                className="border border-[#2466FF80] p-5 2xl:p-6 rounded-2xl shadow bg-white group hover:bg-[linear-gradient(235deg,_#2466FF_3.26%,_#163D99_98.02%)] transition-all duration-500"
              >
                {/* Icon */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="w-20 2xl:w-[90px] h-20 2xl:h-[90px] rounded-full grid place-items-center bg-[#F5F8FC]"
                >
                  {item?.icon}
                </p>
                {/* Title */}
                <h3
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-lg 2xl:text-xl font-medium py-3 2xl:py-5 group-hover:text-white"
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
