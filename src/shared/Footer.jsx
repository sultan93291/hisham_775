import { useTranslation } from "react-i18next";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";
import TawkMessenger from "../Components/TawkTo/TawkMessenger";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="pb-10 2xl:pb-20 relative md:px-2 lg:px-5 2xl:px-0">
      <div className="container">
        {/* Logo */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[48px] sm:text-[80px] md:text-[100px] lg:text-[150px] xl:text-[180px] 2xl:text-[230px] font-medium bg-gradient-to-r from-[#C8D9FF] to-[#F0F5FF] bg-clip-text text-transparent font-karla text-center tracking-tight mb-5 sm:mb-10"
        >
          InsightReach
        </h2>
        <TawkMessenger />
        {/* Lower Part */}
        <div className="flex items-center justify-between">
          <div>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-black font-semibold text-xl sm:text-2xl mb-5"
            >
              InsightReach logo.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-secondary-gray sm:text-lg xl:text-xl max-w-[520px]"
            >
              {t("footer_text")}
            </p>
          </div>
        </div>
      </div>

      {/* Floating Share Button + Hover Menu */}
      <div className="fixed bottom-24 right-8 sm:right-5 z-50 group">
        <div className="absolute bottom-20 sm:bottom-24 right-1/2 translate-x-1/2 flex flex-col items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Share Button */}
        <button className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-b from-[#2466FF] to-[#163D99] rounded-full grid place-items-center text-white shadow-xl hover:scale-105 transition cursor-pointer">
          <GrShareOption className="text-[22px] sm:text-3xl xl:text-4xl" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
