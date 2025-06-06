import { SocialSvg } from "../Components/Svg/SvgContainer";

const Footer = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <h2 className="text-[64px] sm:text-[120px] lg:text-[250px] font-bold bg-gradient-to-r from-[#C8D9FF] to-[#F0F5FF] bg-clip-text text-transparent font-karla text-center tracking-tight leading-none">
          InsightReach
        </h2>

        {/* Lower Part */}
        <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="text-black font-semibold text-xl sm:text-2xl text-center sm:text-left">
            InsightReach logo.
          </p>

          <div className="w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-b from-[#2466FF] to-[#163D99] rounded-full grid place-items-center text-white">
            <SocialSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
