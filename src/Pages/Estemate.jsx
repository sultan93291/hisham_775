import { useTranslation } from "react-i18next";
import EstimateForm from "../Components/HomePageComponents/EstimateForm";

const Estemate = () => {
  const { t } = useTranslation();
  return (
    <section className="pb-10 xl:pb-20 2xl:pb-40 pt-5 md:pt-32">
      <div className="container">
        <div className="grid xl:grid-cols-12 gap-10 xl:gap-20 md:px-2 lg:px-5 2xl:px-0">
          {/* Left side */}
          <div className="xl:col-span-5">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex gap-3 items-center mb-2 lg:mb-5"
            >
              <h3 className="sub_title">{t("estemate_sub_title")}</h3>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-lg sm:text-xl lg:text-2xl 2xl:text-4xl font-medium sm:font-semibold"
            >
              {t("estemate_title")}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-1 sm:mt-3 lg:mt-5 mb-5 xl:mb-8 text-secondary-gray sm:text-lg 2xl:text-xl leading-[165%]"
            >
              {t("estemate_description")}
            </p>
          </div>

          {/* Right Side */}
          <div className="xl:col-span-7">
            <EstimateForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Estemate;
