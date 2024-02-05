import "./index.css";
import DarkModeToggle from "../DarkModeToggle";
import LanguageSelector from "../LanguageSwitcher";
import { useLanguage } from "../LanguageSwitcher/LanguageContext";

const NavBar = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };
  return (
    <>
      <section className="section1">
        <nav className="container" aria-label="Main Navigation">
          <div className="logo">
            <img
              src="https://cpadvancedimaging.com/wp-content/themes/cpai/images/cp-logo-est-1978.jpg"
              alt="CP Advanced Imaging Logo"
            ></img>
          </div>

          <div className="navlink" aria-label="Nav Links">
            <ul>
              <LanguageSelector
                onChange={handleLanguageChange}
              ></LanguageSelector>
              <li className="link">
                <a href="/">
                  Home
                </a>
              </li>
              <li className="link">
                <a href="/about">
                  About
                </a>
              </li>
              <li className="link">
                <a href="/services">
                  Services
                </a>
              </li>
              <li className="link">
                <a href="/physicians">
                  Physicians
                </a>
              </li>
              <li className="link">
                <a href="/contact">
                  Contact
                </a>
              </li>
              <DarkModeToggle />
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
