import { useTranslation } from "react-i18next";
import { EmailSvg, PhoneSvg } from "../Svg/SvgContainer";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <section className="pb-40">
      <div className="container">
        <div className="grid grid-cols-12">
          {/* Left side */}
          <div className="col-span-4">
            <div className="flex gap-3 items-center mb-5">
              <h3 className="sub_title">{t("contact_sub_title")}</h3>
            </div>
            <h2 className="text-4xl font-semibold">{t("contact_title")}</h2>
            <p className="mt-5 mb-8 text-secondary-gray text-xl leading-[165%]">
              {t("contact_description")}
            </p>
            {/* btns */}
            <div className="flex gap-5 items-center">
              {/* Phone */}
              <p className="flex gap-2 items-center px-16 cursor-pointer py-3 rounded-xl border border-primary-blue text-primary-blue font-medium transition-all duration-300 hover:bg-primary-blue hover:text-white">
                <PhoneSvg />
                <span>{t("contact_btn_one")}</span>
              </p>

              {/* Email */}
              <p className="flex gap-2 items-center px-16 cursor-pointer py-3 rounded-xl border border-primary-blue text-primary-blue font-medium transition-all duration-300 hover:bg-primary-blue hover:text-white">
                <EmailSvg />
                <span>{t("contact_btn_two")}</span>
              </p>
            </div>
          </div>
          {/* Empty */}
          <div className="col-span-1"></div>

          {/* Right Side */}
          <div className="col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
