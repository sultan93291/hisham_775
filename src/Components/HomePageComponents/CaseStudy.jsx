import { useTranslation } from "react-i18next";
import { WOneSvg } from "../Svg/SvgContainer";

const CaseStudy = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      icon: <WOneSvg />,
      title: t("case_title_one"),
      description: t("case_description_one"),
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
              <h3 className="sub_title">{t("case_study_sub_title")}</h3>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-lg sm:text-xl lg:text-2xl 2xl:text-4xl font-medium sm:font-semibold leading-[140%] max-w-[1000px] mx-auto"
            >
              {t("case_study_title")}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="py-3 sm:py-5 xl:py-7 2xl:py-10 text-secondary-gray sm:text-lg 2xl:text-xl leading-[165%]"
            >
              {t("case_study_description")}
            </p>
          </div>

          {/* Right */}
          <div>
            {data?.map(item => (
              <div
                key={item?.id}
                className="border border-[#2466FF80] p-5 2xl:p-10 rounded-2xl shadow bg-white"
              >
                {/* Icon */}
                <p className="w-20 2xl:w-[90px] h-20 2xl:h-[90px] rounded-full grid place-items-center bg-[#F5F8FC]">
                  {item?.icon}
                </p>
                {/* Title */}
                <h3 className="text-lg 2xl:text-xl font-medium py-3 2xl:py-5">
                  {item?.title}
                </h3>
                {/* Description */}
                <p className="text-secondary-gray leading-[150%] mb-5">
                  {item?.description}
                </p>
                {/* btn */}
                <button className="px-6 sm:px-12 2xl:px-14 cursor-pointer py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-primary-blue hover:text-primary-blue font-medium transition-all duration-300 hover:bg-transparent bg-primary-blue text-white w-fit flex justify-end items-center ms-auto">
                  <span>{t("read_more_btn")}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
