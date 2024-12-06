import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-sm bg-gradient-to-r from-[#1B263B] to-[#013272] text-white hover:from-[#1d0c69] hover:to-[#1B263B] shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          <FaArrowUp className="animate-bounce" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;