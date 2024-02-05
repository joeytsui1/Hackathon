import "./index.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-container" aria-label="Footer">
        <section className="footer-section">
          <section aria-label="Quick Links">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Physicians</a>
              </li>
            </ul>
          </section>

          <section aria-label="Accreditations">
            <h3>ACCREDITATIONS</h3>
            <img
              src="https://cpadvancedimaging.com/wp-content/themes/cpai/images/acr.jpg"
              alt="ACR Accreditation"
            ></img>
            <img
              src="https://cpadvancedimaging.com/wp-content/themes/cpai/images/wisely.jpg"
              alt="Wisely Accreditation"
            ></img>
            <img
              src="https://cpadvancedimaging.com/wp-content/themes/cpai/images/gently.jpg"
              alt="Gently Accreditation"
            ></img>
          </section>

          <section className="logo" aria-label="Company Logo">
            <img
              src="https://cpadvancedimaging.com/wp-content/themes/cpai/images/cp-logo-est-1978.jpg"
              alt="CP Advanced Imaging Logo"
            ></img>
          </section>
        </section>
        <div className="container">
          <section
            className="trademark-section"
            aria-label="Copyright Information"
          >
            <p> © 2024 CP Advanced Imaging, P.C.</p>
            <div className="trademark-links">
              <a href="#">
                Privacy Policy
              </a>
              <a href="#">
                Terms of Use
              </a>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
