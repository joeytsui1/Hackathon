import "./index.css";
import DarkModeToggle from "../DarkModeToggle";
import LanguageSelector from "../LanguageSwitcher";
import { useLanguage } from "../LanguageSwitcher/LanguageContext";

const NavBar = () => {
  const translations = {
    home: {
      en: "Home",
      cn: "首页",
    },
    about: {
      en: "About",
      cn: "关于我们",
    },
    services: {
      en: "Services",
      cn: "服务",
    },
    physicians: {
      en: "Physicians",
      cn: "医生",
    },
    contact: {
      en: "Contact",
      cn: "联系我们",
    },
  };

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
              {/* <LanguageSelector
                onChange={handleLanguageChange}
              ></LanguageSelector> */}
              <li className="link">
                <a href="/">{translations.home[selectedLanguage]}</a>
              </li>
              <li className="link">
                <a href="/about">{translations.about[selectedLanguage]}</a>
              </li>
              <li className="link">
                <a href="/services">
                  {translations.services[selectedLanguage]}
                </a>
              </li>
              <li className="link">
                <a href="/physicians">
                  {translations.physicians[selectedLanguage]}
                </a>
              </li>
              <li className="link">
                <a href="/contact">{translations.contact[selectedLanguage]}</a>
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
