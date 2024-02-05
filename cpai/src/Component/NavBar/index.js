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
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
