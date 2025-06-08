import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const { t, i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
    return () => clearTimeout(timer);
  }, [i18n.language]);

  const data = [
    {
      id: 1,
      name: t("testimonial_name"),
      role: t("testimonial_role"),
      description: t("testimonial_description"),
    },
    {
      id: 2,
      name: t("testimonial_name"),
      role: t("testimonial_role"),
      description: t("testimonial_description"),
    },
    {
      id: 3,
      name: t("testimonial_name"),
      role: t("testimonial_role"),
      description: t("testimonial_description"),
    },
    {
      id: 4,
      name: t("testimonial_name"),
      role: t("testimonial_role"),
      description: t("testimonial_description"),
    },
  ];

  return (
    <section className="space-y-7" dir={isRTL ? "rtl" : "ltr"}>
      {/* First Marquee - Reversed direction for RTL */}
      <Marquee
        speed={70}
        pauseOnHover={true}
        autoFill={true}
        gradient={false} // Disable gradient as it may cause issues in RTL
        direction={isRTL ? "right" : "left"}
        className={`flex ${isRTL ? "rtl-marquee" : ""}`}
      >
        {data?.map((item, idx) => (
          <div
            key={item?.id}
            className={`p-5 sm:p-7 rounded-2xl shadow w-[350px] sm:w-[400px] md:w-[500px] ${
              isRTL ? "ml-7" : "mr-7"
            } ${
              idx % 2 === 0
                ? "bg-white"
                : "bg-[linear-gradient(235deg,_#2466FF_3.26%,_#163D99_98.02%)]"
            }`}
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            <h3
              className={`text-xl md:text-2xl font-medium leading-[150%] ${
                idx % 2 === 0 ? "" : "text-white"
              }`}
            >
              {item?.name}
            </h3>
            <p
              className={`mt-3 mb-7 md:mb-10 ${
                idx % 2 === 0 ? "text-secondary-gray" : "text-gray-300"
              }`}
            >
              {item?.role}
            </p>
            <p
              className={`leading-[160%] ${
                idx % 2 === 0 ? "" : "text-[#E8E8E8]"
              }`}
            >
              {item?.description}
            </p>
          </div>
        ))}
      </Marquee>

      {/* Second Marquee - Opposite direction */}
      <Marquee
        speed={50}
        pauseOnHover={true}
        autoFill={true}
        gradient={false}
        direction={isRTL ? "left" : "right"}
        className={`flex ${isRTL ? "rtl-marquee" : ""}`}
      >
        {data?.map((item, idx) => (
          <div
            key={item?.id}
            className={`p-5 sm:p-7 rounded-2xl shadow w-[350px] sm:w-[400px] md:w-[500px] ${
              isRTL ? "ml-7" : "mr-7"
            } ${
              idx % 2 === 0
                ? "bg-white"
                : "bg-[linear-gradient(235deg,_#2466FF_3.26%,_#163D99_98.02%)]"
            }`}
            style={{ direction: isRTL ? "rtl" : "ltr" }}
          >
            <h3
              className={`text-xl md:text-2xl font-medium leading-[150%] ${
                idx % 2 === 0 ? "" : "text-white"
              }`}
            >
              {item?.name}
            </h3>
            <p
              className={`mt-3 mb-7 md:mb-10 ${
                idx % 2 === 0 ? "text-secondary-gray" : "text-gray-300"
              }`}
            >
              {item?.role}
            </p>
            <p
              className={`leading-[160%] ${
                idx % 2 === 0 ? "" : "text-[#E8E8E8]"
              }`}
            >
              {item?.description}
            </p>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Testimonial;
