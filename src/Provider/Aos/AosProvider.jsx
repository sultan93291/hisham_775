import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
AOS.init();
import "./custom-aos.css";
import PropTypes from "prop-types";
function AosProvider({ children }) {
  useEffect(() => {
    AOS.init({
      offset: 0, // offset (in px) from the original trigger point
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
  return <>{children}</>;
}

AosProvider.propTypes = {
  children: PropTypes.node,
};

export default AosProvider;
