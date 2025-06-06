import Marquee from "react-fast-marquee";

const data = [
  {
    id: 1,
    name: "Tony Stark",
    role: "CEO , Stark Industries",
    description:
      "Budgets and strategies adapt instantly based on live performance data maximizing results without manual effort.",
  },
  {
    id: 2,
    name: "Tony Stark",
    role: "CEO , Stark Industries",
    description:
      "Budgets and strategies adapt instantly based on live performance data maximizing results without manual effort.",
  },
  {
    id: 3,
    name: "Tony Stark",
    role: "CEO , Stark Industries",
    description:
      "Budgets and strategies adapt instantly based on live performance data maximizing results without manual effort.",
  },
  {
    id: 4,
    name: "Tony Stark",
    role: "CEO , Stark Industries",
    description:
      "Budgets and strategies adapt instantly based on live performance data maximizing results without manual effort.",
  },
];

const Testimonial = () => {
  return (
    <section className="space-y-7">
      <Marquee speed={70} pauseOnHover={true} autoFill={true} className="flex">
        {data?.map((item, idx) => (
          <div
            key={item?.id}
            className={`p-7 rounded-2xl shadow w-[500px] mr-7 ${
              idx % 2 === 0
                ? "bg-white"
                : "bg-[linear-gradient(235deg,_#2466FF_3.26%,_#163D99_98.02%)]"
            }`}
          >
            {/* Name */}
            <h3
              className={`text-2xl font-medium leading-[150%] ${
                idx % 2 === 0 ? "" : "text-white"
              }`}
            >
              {item?.name}
            </h3>

            {/* Role */}
            <p
              className={`mt-3 mb-10  ${
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
            className={`p-7 rounded-2xl shadow w-[500px] mr-7 ${
              idx % 2 === 0
                ? "bg-white"
                : "bg-[linear-gradient(235deg,_#2466FF_3.26%,_#163D99_98.02%)]"
            }`}
          >
            {/* Name */}
            <h3
              className={`text-2xl font-medium leading-[150%] ${
                idx % 2 === 0 ? "" : "text-white"
              }`}
            >
              {item?.name}
            </h3>

            {/* Role */}
            <p
              className={`mt-3 mb-10  ${
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
