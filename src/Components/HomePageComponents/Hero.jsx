import { useTranslation } from "react-i18next";
import hero from "../../assets/hero_frame.png";
import union from "../../assets/hero_union.png";
import { MouseSvg } from "../Svg/SvgContainer";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/lottieAnimation.json";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-no-repeat bg-center bg-cover object-cover text-center pt-20 lg:pt-28 pb-44 xl:pb-64 2xl:pb-80 relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="container">
        <div className="md:px-2 lg:px-5 2xl:px-0">
          {/* Sub title */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex gap-3 items-center justify-center mb-3 lg:mb-5"
          >
            <h3 className="sub_title">{t("hero_sub_title")}</h3>
            <MouseSvg />
          </div>

          {/* title */}
          <h1
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-3xl lg:text-5xl xl:text-[52px] 2xl:text-6xl font-semibold leading-[150%] max-w-[1000px] mx-auto"
          >
            {t("hero_title")}
          </h1>

          {/* Desc */}
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="py-8 lg:py-10 max-w-[1000px] mx-auto text-secondary-gray text-lg lg:text-xl leading-[160%]"
          >
            {t("hero_description")}
          </p>

          {/* Lottie Animation */}
          <div className="flex justify-center items-center absolute left-1/2 top-1/3 -translate-x-1/2">
            <Lottie
              animationData={groovyWalkAnimation}
              loop={false}
              autoplay={true}
              style={{ width: 300, height: 300 }}
            />
          </div>

          {/* btn */}
          <button
            data-aos="fade-up"
            data-aos-delay="700"
            className="px-5 md:px-8 lg:px-12 py-3 md:py-4 font-medium cursor-pointer shadow rounded-xl bg-primary-blue text-white transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#2466FF] hover:to-[#FF32B4] relative"
          >
            {t("hero_btn")}
          </button>
        </div>
      </div>

      {/* Union Logo */}
      <div className="hidden lg:block absolute left-10 xl:left-20 top-10">
        <img src={union} alt="union" />
      </div>
      <div className="hidden lg:block absolute right-10 xl:right-20 bottom-60">
        <img src={union} alt="union" />
      </div>
    </section>
  );
};

export default Hero;
