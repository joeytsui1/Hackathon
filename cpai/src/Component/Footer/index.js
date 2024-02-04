import "./index.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-section">
          <div>
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
          </div>

          <div>
            <h3>ACCREDITATIONS</h3>
            <img src="https://cpadvancedimaging.com/wp-content/themes/cpai/images/acr.jpg"></img>
            <img src="https://cpadvancedimaging.com/wp-content/themes/cpai/images/wisely.jpg    "></img>
            <img src="https://cpadvancedimaging.com/wp-content/themes/cpai/images/gently.jpg"></img>
          </div>

          <div className="logo">
            <img src="https://cpadvancedimaging.com/wp-content/themes/cpai/images/cp-logo-est-1978.jpg"></img>
          </div>
        </div>
        <div className="container">
          <div className="trademark-section">
            <p> © 2024 CP Advanced Imaging, P.C.</p>
            <div className="trademark-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Term of Use</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
