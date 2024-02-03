import "./index.css"
const NavBar = () => {
  return (
    <>
      <div className="section1">
        <nav className="container">
          <div className="logo">
            <img src="https://cpadvancedimaging.com/wp-content/themes/cpai/images/cp-logo-est-1978.jpg"></img>
          </div>

          <div className="navlink">
            <ul>
              <li className="link">
                <a href="#">Home</a>
              </li>
              <li className="link">
                <a href="#">About</a>
              </li>
              <li className="link">
                <a href="#">Services</a>
              </li>
              <li className="link">
                <a href="#">Physicians</a>
              </li>
              <li className="link">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar
