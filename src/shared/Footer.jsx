import { useTranslation } from "react-i18next";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GrShareOption } from "react-icons/gr";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="pb-20 relative">
      <div className="container">
        {/* Logo */}
        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[250px] font-medium bg-gradient-to-r from-[#C8D9FF] to-[#F0F5FF] bg-clip-text text-transparent font-karla text-center tracking-tight mb-10"
        >
          InsightReach
        </h2>

        {/* Lower Part */}
        <div className="flex items-center justify-between">
          <div>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-black font-semibold text-2xl mb-5"
            >
              InsightReach logo.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-secondary-gray text-xl max-w-[520px]"
            >
              {t("footer_text")}
            </p>
          </div>
        </div>
      </div>

      {/* Floating Share Button + Hover Menu */}
      <div className="fixed bottom-20 right-20 z-50 group">
        {/* Social Links - show on hover */}
        <div className="absolute bottom-24 right-1/2 translate-x-1/2 flex flex-col items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        <button className="w-20 h-20 bg-gradient-to-b from-[#2466FF] to-[#163D99] rounded-full grid place-items-center text-white shadow-xl hover:scale-105 transition cursor-pointer">
          <GrShareOption className="text-4xl" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
