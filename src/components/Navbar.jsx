import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import Pronged from "../assets/Images/pronged1.png";
const menuList = [
  {
    text: "Home",
    link: "#home",
  },
  {
    text: "About Me",
    link: "#about-me",
  },
  {
    text: "Experience",
    link: "#experience",
  },
  {
    text: "Projects",
    link: "#projects",
  },
  {
    text: "Skills",
    link: "#skills",
  },
  {
    text: "Achievements",
    link: "#achievements",
  },
  {
    text: "Testimonials",
    link: "#testimonials",
  },
  {
    text: "Contact",
    link: "#contact",
  },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY + 125 >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleProngedClick = () => {
    scrollToTop();
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 50; // Adjust this value to add desired offset
      const top = section.offsetTop - offset;
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav ref={navbarRef} className="navbar">
        <div
          className={`nav-icon ${isOpen ? "open" : ""}`}
          onClick={handleClick}
        >
          <img
            src={isOpen ? "./BurgerClose.svg" : "./BurgerSquare.svg"}
            alt="Menu"
          />
          <span className="menu-title">{isOpen ? "CLOSE" : "MENU"}</span>
        </div>
        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul className="links">
            {menuList.map((menu, index) => (
              <li
                className="nav-link"
                key={index}
                style={{
                  animation: isOpen
                    ? `0.5s ease ${
                        index / 6 + 0.3
                      }s 1 normal forwards running navLinkAnimation`
                    : "none",
                }}
              >
                <a
                  onClick={() => {
                    handleClick();
                    scrollToSection(menu.text.toLowerCase().replace(" ", "-"));
                  }}
                  className={
                    menu.text.toLowerCase().replace(" ", "-") ===
                    activeSection.toLowerCase()
                      ? "active"
                      : ""
                  }
                >
                  {menu.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="active">
          <div className="active-link-name">{activeSection}</div>
        </div>
        <div className="logo" onClick={handleProngedClick}>
          <img src={Pronged} alt="Pronged Logo" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
