import { useState } from "react";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(null);
  const toggleFaq = id => {
    setActiveId(prev => (prev === id ? null : id));
  };
  const data = [
    {
      id: 1,
      question: t("faq_title_one"),
      answer: t("faq_description_one"),
    },
    {
      id: 2,
      question: t("faq_title_two"),
      answer: t("faq_description_two"),
    },
    {
      id: 3,
      question: t("faq_title_three"),
      answer: t("faq_description_three"),
    },
    {
      id: 4,
      question: t("faq_title_four"),
      answer: t("faq_description_four"),
    },
    {
      id: 5,
      question: t("faq_title_five"),
      answer: t("faq_description_five"),
    },
  ];

  return (
    <section className="pt-10 pb-8 sm:py-14 lg:py-20 xl:py-32 2xl:py-40">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 2xl:gap-20 items-center md:px-2 lg:px-5 2xl:px-0">
          {/* Left */}
          <div>
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="flex gap-3 items-center mb-2 lg:mb-5"
            >
              <h3 className="sub_title">{t("faq_sub_title")}</h3>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-lg sm:text-xl lg:text-2xl 2xl:text-4xl font-medium sm:font-semibold leading-[140%] max-w-[1000px] mx-auto"
            >
              {t("faq_title")}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="py-3 sm:py-5 xl:py-7 2xl:py-10 text-secondary-gray sm:text-lg 2xl:text-xl leading-[165%]"
            >
              {t("faq_description")}
            </p>
          </div>

          {/* Right - FAQ */}
          <div className="space-y-5">
            {data?.map((faq, idx) => {
              const isActive = activeId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`border border-gray-200 rounded-3xl bg-transparent py-3 lg:py-5 3xl:py-[33px] px-3 lg:px-7 2xl:px-8 cursor-pointer transition-all duration-300`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="flex justify-between items-center">
                    <p
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className="font-medium text-lg lg:text-xl xl:text-[22px] lg:leading-10 text-primary-text-blue"
                    >
                      {idx + 1}. {faq.question}
                    </p>
                    {isActive ? (
                      <div className="flex-shrink-0">
                        <ChevronUp
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="w-8 lg:w-10 h-8 lg:h-10 text-gray-600 flex-shrink-0"
                        />
                      </div>
                    ) : (
                      <div className="flex-shrink-0">
                        <ChevronDown
                          data-aos="fade-up"
                          data-aos-delay="100"
                          className="w-8 lg:w-10 h-8 lg:h-10 text-gray-600"
                        />
                      </div>
                    )}
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isActive
                        ? "max-h-[500px] opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className=" text-secondary-text"
                    >
                      {faq.question}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
