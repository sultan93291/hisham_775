import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ContactSvg } from "../Components/Svg/SvgContainer";
import { Link } from "react-router-dom";


const Navbar = () => {
  // For Translation
  const { t, i18n } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    document.dir = lng === "ar" ? "rtl" : "ltr"; // 💡 set direction
  };

  // Set document direction on initial render
  useEffect(() => {
    document.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <nav className="py-4 sm:py-5 xl:py-6 bg-slate-50 sticky top-0 z-50 md:px-2 lg:px-5 2xl:px-0">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Left - Logo */}
          <Link to="/">
            <p className="text-black font-semibold text-lg sm:text-2xl">
              InsightReach
            </p>
          </Link>
          {/* Right */}
          <div className="flex gap-5 sm:gap-7 lg:gap-10 items-center">
            {/* Language Options */}
            <select
              className="border-none outline-none text-primary-blue font-medium sm:text-lg bg-transparent"
              onChange={e => changeLanguage(e.target.value)}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="ar">{t("nav_arabic")}</option>
            </select>

            {/* Contact btn */}
            <button className="flex gap-1 sm:gap-3 text-sm sm:text-base = items-center px-3 sm:px-7 lg:px-10 py-2.5 sm:py-4 font-medium cursor-pointer shadow rounded-lg sm:rounded-xl bg-primary-blue text-white transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#2466FF] hover:to-[#FF32B4]">
              <span>
                <ContactSvg />
              </span>
              <p className="hidden sm:block">{t("nav_contact")}</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
