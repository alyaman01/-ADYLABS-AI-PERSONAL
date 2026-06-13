import { useState, useEffect } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // 👀 Scroll handle karne ka logic
  useEffect(() => {
    const toggleVisibility = () => {
      // Agar user ne 300px se zyada niche scroll kiya hai, toh button dikhao
      if (window.scrollY > 2000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup taaki memory leaks na hon ek baar component unmount hone pe
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 🚀 Ekdum top par smooth navigation bhejone ka logic
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Isse jhatke se nahi, ekdum makkhan smooth scroll hoga
    });
  };

  return (
    <>
      {isVisible && (
        <button className="scroll-to-top-btn" onClick={scrollToTop} aria-label="Scroll to top">
          {/* Tumhare image jaisa Up arrow icon */}
          <span className="arrow-up-icon">↑</span>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;