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
        {/* Upper part */}
        <div>
          <div className="flex gap-3 items-center mb-5">
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
            className="text-[34px] font-semibold leading-[150%] max-w-[1190px] text-center mx-auto mb-16"
          >
            {t("work_upper_description")}
          </h2>
        </div>

        {/* Lower part */}
        <div className="grid grid-cols-3 gap-16">
          {data?.map(item => (
            <div key={item?.id} className="">
              {/* Icon */}
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="w-24 h-24 rounded-full grid place-items-center bg-white mx-auto"
              >
                {item?.icon}
              </p>
              {/* Title */}
              <h3
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-2xl font-medium leading-[150%] py-5 group-hover:text-white"
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
    </section>
  );
};

export default HowItWorks;
