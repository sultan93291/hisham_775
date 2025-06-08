import { useTranslation } from "react-i18next";
import { EmailSvg, PhoneSvg } from "../Svg/SvgContainer";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <section className="pb-10 xl:pb-20 2xl:pb-40">
      <div className="container">
        <div className="grid xl:grid-cols-12 gap-10 xl:gap-20 md:px-2 lg:px-5 2xl:px-0">
          {/* Left side */}
          <div className="xl:col-span-5">
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex gap-3 items-center mb-2 lg:mb-5"
            >
              <h3 className="sub_title">{t("contact_sub_title")}</h3>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-lg sm:text-xl lg:text-2xl 2xl:text-4xl font-medium sm:font-semibold"
            >
              {t("contact_title")}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-1 sm:mt-3 lg:mt-5 mb-5 xl:mb-8 text-secondary-gray sm:text-lg 2xl:text-xl leading-[165%]"
            >
              {t("contact_description")}
            </p>
            {/* btns */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex gap-3 sm:gap-5 items-center"
            >
              {/* Phone */}
              <p className="flex gap-2 items-center px-6 sm:px-12 2xl:px-16 cursor-pointer py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-primary-blue text-primary-blue font-medium transition-all duration-300 hover:bg-primary-blue hover:text-white">
                <PhoneSvg />
                <span>{t("contact_btn_one")}</span>
              </p>

              {/* Email */}
              <p className="flex gap-2 items-center px-6 sm:px-12 2xl:px-16 cursor-pointer py-2.5 sm:py-3 rounded-lg sm:rounded-xl border border-primary-blue text-primary-blue font-medium transition-all duration-300 hover:bg-primary-blue hover:text-white">
                <EmailSvg />
                <span>{t("contact_btn_two")}</span>
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="xl:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
