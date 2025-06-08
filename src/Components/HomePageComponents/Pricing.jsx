import { useTranslation } from "react-i18next";
import { CheckSvg } from "../Svg/SvgContainer";

const Pricing = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      package_name: t("free_package_name"),
      price: t("free_package_price"),
      title: t("free_upper_title"),
      feathers: [
        t("free_feather_one"),
        t("free_feather_two"),
        t("free_feather_three"),
        t("free_feather_four"),
      ],
      eligibility: t("free_lower_title"),
      btn_text: t("free_btn"),
      is_popular: false,
    },
    {
      id: 2,
      package_name: t("growth_package_name"),
      price: t("growth_package_price"),
      title: t("growth_upper_title"),
      feathers: [
        t("growth_feather_one"),
        t("growth_feather_two"),
        t("growth_feather_three"),
        t("growth_feather_four"),
      ],
      eligibility: t("growth_lower_title"),
      btn_text: t("growth_btn"),
      is_popular: true,
    },
    {
      id: 3,
      package_name: t("enterprise_package_name"),
      price: t("enterprise_package_price"),
      title: t("enterprise_upper_title"),
      feathers: [
        t("enterprise_feather_one"),
        t("enterprise_feather_two"),
        t("enterprise_feather_three"),
        t("enterprise_feather_four"),
      ],
      eligibility: t("enterprise_lower_title"),
      btn_text: t("enterprise_btn"),
      is_popular: false,
    },
  ];

  return (
    <section className="pt-20 pb-20 xl:pb-32 2xl:py-40">
      <div className="container">
        <div className="px-5 2xl:px-0">
          {/* Upper part */}
          <div>
            <div className="flex gap-3 items-center mb-5">
              <h3
                data-aos="fade-up"
                data-aos-delay="100"
                className="sub_title text-center mx-auto"
              >
                {t("pricing_upper_sub_title")}
              </h3>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-2xl xl:text-3xl 2xl:text-[34px] font-semibold leading-[150%] text-center mb-3"
            >
              {t("pricing_upper_title")}
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-secondary-gray text-xl leading-[160%] max-w-[900px] mx-auto text-center mb-12 xl:mb-16"
            >
              {t("pricing_upper_description")}
            </p>
          </div>

          {/* Lower part */}
          <div className="grid grid-cols-2 xl:grid-cols-3 gap-5 2xl:gap-8">
            {data?.map(item => (
              <div
                key={item?.id}
                className="p-5 2xl:p-9 shadow rounded-xl bg-white flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-1000 ease-in-out border border-gray-100 hover:border-primary-blue"
              >
                <div>
                  {/* Package Name */}
                  <h3 className="text-2xl 2xl:text-3xl font-medium">{item?.package_name}</h3>
                  {/* Price */}
                  <h4 className="text-4xl mt-3 2xl:mt-0 2xl:text-[64px] font-semibold">${item?.price}</h4>
                  <p className="text-secondary-gray pt-5 pb-5 2xl:pb-10">
                    {t("free_per_month")}
                  </p>
                  <p className="text-lg font-medium mb-5">{item?.title}</p>
                  <ul className="space-y-5 text-secondary-gray">
                    {item?.feathers?.map((feather, idx) => (
                      <li key={idx} className="flex gap-2 items-center">
                        <CheckSvg />
                        <p>{feather}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg font-medium mt-5 mb-10">
                    {item?.eligibility}
                  </p>
                </div>
                <button className="block group-hover:bg-gray-800 group-hover:text-white transition-all duration-300 w-full py-4 rounded-xl border cursor-pointer">
                  {item?.btn_text}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
