import { useTranslation } from "react-i18next";
import {
  FFourSvg,
  FOneSvg,
  FThreeSvg,
  FTwoSvg,
  RightArrowSvg,
} from "../Svg/SvgContainer";

const KeyFeathers = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      icon: <FOneSvg />,
      title: t("feather_title_one"),
      description: t("feather_description_one"),
    },
    {
      id: 2,
      icon: <FTwoSvg />,
      title: t("feather_title_two"),
      description: t("feather_description_two"),
    },
    {
      id: 3,
      icon: <FThreeSvg />,
      title: t("feather_title_three"),
      description: t("feather_description_three"),
    },
    {
      id: 4,
      icon: <FFourSvg />,
      title: t("feather_title_four"),
      description: t("feather_description_four"),
    },
  ];
  return (
    <section className="py-14 lg:py-20 xl:py-20 2xl:py-40">
      <div className="container">
        <div className="md:px-2 lg:px-5 2xl:px-0">
          {/* Upper part */}
          <div className="flex flex-col xl:flex-row justify-between items-center gap-3 xl:gap-20 2xl:gap-40 mb-5 lg:mb-10 xl:mb-12">
            <div className="w-full">
              <div className="flex gap-3 items-center mb-2 lg:mb-5">
                <h3
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="sub_title"
                >
                  {t("feather_upper_sub_title")}
                </h3>
              </div>
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-2xl xl:text-3xl 2xl:text-4xl font-semibold leading-[140%] xl:w-[500px] 2xl:w-auto mx-auto shrink"
              >
                {t("feather_upper_title")}
              </h2>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="xl:py-10 text-secondary-gray text-lg lg:text-xl leading-[160%]"
            >
              {t("feather_upper_description")}
            </p>
          </div>

          {/* Get Started btn */}
          <button
            data-aos="fade-up"
            data-aos-delay="100"
            className="w-fit mx-auto flex gap-2 items-center justify-center text-center text-primary-blue text-lg lg:text-xl font-medium cursor-pointer mb-10 xl:mb-14 2xl:mb-20"
          >
            <p>{t("feather_upper_btn")}</p>
            <RightArrowSvg />
          </button>

          {/* Lower part */}
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 2xl:gap-6">
            {data?.map(item => (
              <div
                key={item?.id}
                className="border border-[#2466FF80] p-5 2xl:p-8 rounded-2xl shadow bg-white group hover:bg-[linear-gradient(235deg,_#2466FF_3.26%,_#163D99_98.02%)] transition-all duration-500"
              >
                {/* Icon */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="w-20 2xl:w-24 h-20 2xl:h-24 rounded-full grid place-items-center bg-[#F5F8FC]"
                >
                  {item?.icon}
                </p>
                {/* Title */}
                <h3
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-xl 2xl:text-2xl font-medium leading-[150%] py-5 group-hover:text-white"
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

export default KeyFeathers;
