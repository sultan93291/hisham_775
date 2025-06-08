import { useTranslation } from "react-i18next";
import { HOneSvg, HThreeSvg, HTwoSvg } from "../Svg/SvgContainer";

const HowItWorks = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      icon: <HOneSvg />,
      title: t("work_title_one"),
      description: t("work_description_one"),
    },
    {
      id: 2,
      icon: <HTwoSvg />,
      title: t("work_title_two"),
      description: t("work_description_two"),
    },
    {
      id: 3,
      icon: <HThreeSvg />,
      title: t("work_title_three"),
      description: t("work_description_three"),
    },
  ];

  return (
    <section className="text-center">
      <div className="container">
        <div className="md:px-2 lg:px-5 2xl:px-0">
          {/* Upper part */}
          <div>
            <div className="flex gap-3 items-center mb-2 lg:mb-5">
              <h3
                data-aos="fade-up"
                data-aos-delay="100"
                className="sub_title text-center mx-auto"
              >
                {t("work_upper_title")}
              </h3>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-[34px] font-medium sm:font-semibold leading-[150%] max-w-[1190px] text-center mx-auto mb-7 sm:mb-10 xl:mb-16"
            >
              {t("work_upper_description")}
            </h2>
          </div>

          {/* Lower part */}
          <div className="grid md:grid-cols-3 gap-7 lg:gap-10 xl:gap-16">
            {data?.map(item => (
              <div key={item?.id} className="">
                {/* Icon */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="w-20 2xl:w-24 h-20 2xl:h-24 rounded-full grid place-items-center bg-white mx-auto"
                >
                  {item?.icon}
                </p>
                {/* Title */}
                <h3
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-lg lg:text-xl 2xl:text-2xl font-medium leading-[150%] py-3 sm:py-5 group-hover:text-white"
                >
                  {item?.title}
                </h3>
                {/* Description */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-secondary-gray leading-[165%] group-hover:text-[#E8E8E8]"
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

export default HowItWorks;
