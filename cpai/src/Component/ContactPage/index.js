import "../HomePage/index.css";
import "./index.css";
import { engData, cnData } from "../../util/util";
import { useLanguage } from "../LanguageSwitcher/LanguageContext";
import GoogleMapComponent from "../Maps";


const ContactPage = () => {
  const { selectedLanguage } = useLanguage();
  const data = selectedLanguage === "en" ? engData : cnData;

  return (
    <>
      <main className="container">
        <section className="contact-section">
          <h2>{data.contactUsHeading}</h2>

          <div className="contact-info" aria-label="Our Address">
            <p>CP Advanced Imaging</p>
            <p>155 Canal Street</p>
            <p>New York, NY 10013</p>
          </div>

          <GoogleMapComponent aria-label="Interactive Map of CP Advanced Imaging Location" />

          <div className="contact-details">
            <div aria-label="General Information">
              <h3>{data.generalInformationHeading}</h3>
              <p>Tel: (212) 219-9135</p>
              <p>Fax: (212) 219-9291</p>
            </div>

            <div>
              <h3>{data.mriHeading}</h3>
              <p>Tel: (212) 431-9626</p>
              <p>Fax: (646) 898-0691</p>
            </div>

            <div>
              <h3>CT & PET/CT</h3>
              <p>Tel: (646) 898-0660</p>
              <p>Fax: (646) 898-0695</p>
            </div>

            <div>
              <h3>{data.allOtherExamsHeading}</h3>
              <p>Tel: (212) 431-9010</p>
              <p>Fax: (646) 898-0690</p>
            </div>

            <div>
              <h3>{data.billingServicesHeading}</h3>
              <p>Tel: (646) 898-0680</p>
              <p>Fax: (212) 431-4253</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
