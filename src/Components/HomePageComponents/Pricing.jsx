import { CheckSvg } from "../Svg/SvgContainer";

const data = [
  {
    id: 1,
    package_name: "Free",
    price: "0",
    title: "Perfect for small teams just getting started.",
    feathers: [
      "AI Audience Segmentation",
      "Up to 3 Ad Campaigns",
      "Real-Time Performance Dashboard",
      "Email Support",
    ],
    eligibility: "Perfect for small teams just getting started.",
    btn_text: "Get started with free",
    is_popular: false,
  },
  {
    id: 2,
    package_name: "Growth",
    price: "149",
    title: "Designed for growing businesses needing more power.",
    feathers: [
      "Unlimited Campaigns",
      "Multi-Channel Ad Delivery",
      "Smart Budget Allocation",
      "Priority Email + Chat Support",
    ],
    eligibility: "Perfect for small teams just getting started.",
    btn_text: "Get started with growth",
    is_popular: true,
  },
  {
    id: 3,
    package_name: "Enterprise",
    price: "599",
    title: "Advanced features for large teams with high ad spend.",
    feathers: [
      "Everything in Growth Plan",
      "Custom Integrations",
      "Dedicated Account Manager",
      "Advanced Analytics & Reporting",
    ],
    eligibility: "Perfect for small teams just getting started.",
    btn_text: "Get started with enterprise",
    is_popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-40">
      <div className="container">
        {/* Upper part */}
        <div>
          <div className="flex gap-3 items-center mb-5">
            <h3 className="sub_title text-center mx-auto">Pricing</h3>
          </div>
          <h2 className="text-[34px] font-semibold leading-[150%] text-center mb-3">
            Flexible Pricing Plans That Scale With Your Growth
          </h2>
          <p className="text-secondary-gray text-xl leading-[160%] max-w-[900px] mx-auto text-center mb-16">
            Whether you're a startup or an enterprise, we have a plan tailored
            to your needs. Get maximum value with transparent,
            performance-driven pricing.
          </p>
        </div>

        {/* Lower part */}
        <div className="grid grid-cols-3 gap-8">
          {data?.map(item => (
            <div
              key={item?.id}
              className="p-9 shadow rounded-xl bg-white flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-1000 ease-in-out border border-gray-100 hover:border-primary-blue"
            >
              <div>
                {/* Package Name */}
                <h3 className="text-3xl font-medium">{item?.package_name}</h3>
                {/* Price */}
                <h4 className="text-[64px] font-semibold">${item?.price}</h4>
                <p className="text-secondary-gray pt-5 pb-10">
                  Per User / Per month
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
    </section>
  );
};

export default Pricing;
