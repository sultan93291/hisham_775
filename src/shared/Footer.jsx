import { SocialSvg } from "../Components/Svg/SvgContainer";

const Footer = () => {
  return (
    <footer className="pb-20">
      <div className="container">
        {/* Logo */}
        <h2 className="text-[250px] font-medium bg-gradient-to-r from-[#C8D9FF] to-[#F0F5FF] bg-clip-text text-transparent font-karla text-center tracking-tight mb-10">
          InsightReach
        </h2>

        {/* Lower Part */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-black font-semibold text-2xl mb-5">
              InsightReach logo.
            </p>
            <p className="text-secondary-gray text-xl max-w-[520px]">
              "2025 [Your Company Name]. All rights reserved.  Built with
              intelligence. Driven by results. Privacy Policy | Terms of
              Service"
            </p>
          </div>

          <div className="w-32 h-32 bg-gradient-to-b from-[#2466FF] to-[#163D99] rounded-full grid place-items-center text-white cursor-pointer">
            <SocialSvg />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
