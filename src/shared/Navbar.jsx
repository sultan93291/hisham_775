import { ContactSvg } from "../Components/Svg/SvgContainer";

const Navbar = () => {
  return (
    <nav className="py-8 sticky top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Left - Logo */}
          <div>
            <p className="text-black font-semibold text-2xl">
              InsightReach logo.
            </p>
          </div>
          {/* Right */}
          <div className="flex gap-10 items-center">
            {/* Language Options */}
            <select className="border-none outline-none text-primary-blue font-medium text-lg">
              <option value="">
                <p>English</p>
              </option>
              <option value="">Arabic</option>
            </select>

            {/* Contact btn */}
            <button className="flex gap-3 items-center px-10 py-4 font-medium cursor-pointer shadow rounded-xl bg-primary-blue text-white transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-[#2466FF] hover:to-[#FF32B4]">
              <ContactSvg />
              <p>Contact Us</p>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
