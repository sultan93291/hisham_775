import { useTranslation } from "react-i18next";
import hero from "../../assets/hero_frame.png";
import union from "../../assets/hero_union.png";
import { MouseSvg } from "../Svg/SvgContainer";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-no-repeat bg-center bg-cover object-cover text-center pt-28 pb-80 relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="container">
        {/* Sub title */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex gap-3 items-center justify-center mb-5"
        >
          <h3 className="sub_title">{t("hero_sub_title")}</h3>
          <MouseSvg />
        </div>

        {/* title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-6xl font-semibold leading-[150%] max-w-[1000px] mx-auto"
        >
          {t("hero_title")}
        </h1>

        {/* Desc */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="py-10 max-w-[1000px] mx-auto text-secondary-gray text-xl leading-[160%]"
        >
          {t("hero_description")}
        </p>

        {/* btn */}
        <button
          data-aos="fade-up"
          data-aos-delay="100"
          className="px-12 py-4 font-medium cursor-pointer shadow rounded-xl bg-primary-blue text-white transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#2466FF] hover:to-[#FF32B4]"
        >
          {t("hero_btn")}
        </button>
      </div>

      {/* Union Logo */}
      <div className="absolute left-20 top-10">
        <img src={union} alt="union" />
      </div>
      <div className="absolute right-20 bottom-60">
        <img src={union} alt="union" />
      </div>
    </section>
  );
};

export default Hero;
