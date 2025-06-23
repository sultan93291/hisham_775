import { useTranslation } from "react-i18next";
import { RightArrowSvg } from "../Svg/SvgContainer";
import founder from "../../../src/assets/founder.png";

const Founder = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-8 sm:pb-14 lg:pb-20 xl:pb-32 2xl:pb-40">
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-10 2xl:gap-20 items-center md:px-2 lg:px-5 2xl:px-0">
          {/* Left */}
          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex gap-3 items-center mb-2 lg:mb-5"
            >
              <h3 className="sub_title">{t("founder_sub_title")}</h3>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-lg sm:text-xl lg:text-2xl 2xl:text-4xl font-medium sm:font-semibold leading-[140%] max-w-[1000px] mx-auto"
            >
              {t("founder_title")}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="py-3 sm:py-5 xl:py-7 2xl:py-10 text-secondary-gray sm:text-lg 2xl:text-xl leading-[165%]"
            >
              {t("founder_description")}
            </p>
            <button
              data-aos="fade-up"
              data-aos-delay="100"
              className="w-fit flex gap-1 sm:gap-2 items-center justify-center text-center text-primary-blue sm:text-lg lg:text-xl font-medium cursor-pointer xl:mb-20"
            >
              <p>{t("founder_btn")}</p>
              <RightArrowSvg />
            </button>
          </div>

          {/* Right */}
          <div className="">
            <figure className="lg:h-[846px]">
              <img src={founder} className="h-full" />
            </figure>

            <h3 className="text-lg mt-5 sm:text-xl lg:text-2xl 2xl:text-4xl font-medium sm:font-semibold leading-[140%] max-w-[1000px] mx-auto">
              {t("founder_name")}
            </h3>
            <p className="text-secondary-gray sm:text-lg 2xl:text-xl leading-[165%]">
              {t("founder_role")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
