import "./index.css";
import GoogleMapComponent from "../Maps";
const About = () => {
  return (
    <>
      <main className="container">
        <section className="about-section">
          <h1>Our Company</h1>
          <p>
            CP Advanced Imaging is a multi-modality diagnostic imaging center
            conveniently located in lower Manhattan, easily accessible via
            public transportation. All of our radiologists are on-site, Board
            Certified and subspecialty trained. We have been providing high
            quality imaging services in the community for over 45 years. The
            center is set up with the upscale modern radiology equipment
            purchased from the manufacturer and is ACR accredited as a high
            quality radiology diagnostics centre. Along with the basic tests –
            CAT scan, MRI, X-ray, mammography, ultra-sound and osteoporosis
            tests (DEXA), we conduct some exceptional diagnostics tests and
            biopsies.
          </p>

          <p>
            The top priority for us is high quality of our diagnostics and
            providing the best care for our patients. We feel responsible for
            the work we’re doing. We struggle that the tests will be easy for
            you, and the diagnosis will be accurate.
          </p>
          <div>
            <img
              src="https://cpadvancedimaging.com/wp-content/uploads/2012/04/paboutus.jpg"
              alt="Company Location"
              aria-label="Company Location Image"
            ></img>
          </div>
        </section>

        <div className="container">
          <section className="contact-section">
            <h2>Contact Us</h2>

            <div className="contact-info" aria-label="Address">
              <p>CP Advanced Imaging</p>
              <p>155 Canal Street</p>
              <p>New York, NY 10013</p>
            </div>

            <GoogleMapComponent aria-label="Interactive Map of CP Advanced Imaging Location" />

            <div
              className="contact-details"
              aria-label="Contact Details and Information"
            >
              <div aria-label="General Information">
                <h3>General Information</h3>
                <p>Tel: (212) 219-9135</p>
                <p>Fax: (212) 219-9291</p>
              </div>

              <div aria-label="MRI">
                <h3>MRI</h3>
                <p>Tel: (212) 431-9626</p>
                <p>Fax: (646) 898-0691</p>
              </div>

              <div aria-label="CT & PET/CT">
                <h3>CT & PET/CT</h3>
                <p>Tel: (646) 898-0660</p>
                <p>Fax: (646) 898-0695</p>
              </div>

              <div aria-label="All Other Exams">
                <h3>All Other Exams</h3>
                <p>Tel: (212) 431-9010</p>
                <p>Fax: (646) 898-0690</p>
              </div>

              <div aria-label="Billing Services">
                <h3>Billing Services</h3>
                <p>CP Advanced Imaging</p>
                <p>155 Canal Street</p>
                <p>New York, NY 10013</p>
                <p>Tel: (646) 898-0680</p>
                <p>Fax: (212) 431-4253</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default About;
