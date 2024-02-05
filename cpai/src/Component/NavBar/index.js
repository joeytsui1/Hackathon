import "./index.css";
const NavBar = () => {
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
              <li className="link">
                <a href="/" role="button">
                  Home
                </a>
              </li>
              <li className="link">
                <a href="/about" role="button">
                  About
                </a>
              </li>
              <li className="link">
                <a href="/services" role="button">
                  Services
                </a>
              </li>
              <li className="link">
                <a href="/physicians" role="button">
                  Physicians
                </a>
              </li>
              <li className="link">
                <a href="/contact" role="button">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
