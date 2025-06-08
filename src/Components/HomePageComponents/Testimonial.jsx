import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";

const Testimonial = () => {
  const { t } = useTranslation();
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
    <section className="space-y-7">
      <Marquee speed={70} pauseOnHover={true} autoFill={true} className="flex">
        {data?.map((item, idx) => (
          <div
            key={item?.id}
            className={`p-5 sm:p-7 rounded-2xl shadow w-[350px] sm:w-[400px] md:w-[500px] mr-7 ${
              idx % 2 === 0
                ? "bg-white"
                : "bg-[linear-gradient(235deg,_#2466FF_3.26%,_#163D99_98.02%)]"
            }`}
          >
            {/* Name */}
            <h3
              className={`text-xl md:text-2xl font-medium leading-[150%] ${
                idx % 2 === 0 ? "" : "text-white"
              }`}
            >
              {item?.name}
            </h3>

            {/* Role */}
            <p
              className={`mt-3 mb-7 md:mb-10  ${
                idx % 2 === 0 ? "text-secondary-gray" : "text-gray-300"
              }`}
            >
              {item?.role}
            </p>

            {/* Description */}
            <p
              className={`leading-[160%]  ${
                idx % 2 === 0 ? "" : "text-[#E8E8E8]"
              }`}
            >
              {item?.description}
            </p>
          </div>
        ))}
      </Marquee>

      <Marquee
        speed={50}
        pauseOnHover={true}
        autoFill={true}
        className="flex"
        direction="right"
      >
        {data?.map((item, idx) => (
          <div
            key={item?.id}
            className={`p-5 sm:p-7 rounded-2xl shadow w-[350px] sm:w-[400px] md:w-[500px] mr-7 ${
              idx % 2 === 0
                ? "bg-white"
                : "bg-[linear-gradient(235deg,_#2466FF_3.26%,_#163D99_98.02%)]"
            }`}
          >
            {/* Name */}
            <h3
              className={`text-xl md:text-2xl font-medium leading-[150%] ${
                idx % 2 === 0 ? "" : "text-white"
              }`}
            >
              {item?.name}
            </h3>

            {/* Role */}
            <p
              className={`mt-3 mb-7 md:mb-10  ${
                idx % 2 === 0 ? "text-secondary-gray" : "text-gray-300"
              }`}
            >
              {item?.role}
            </p>

            {/* Description */}
            <p
              className={`leading-[160%]  ${
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
