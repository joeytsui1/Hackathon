import "../HomePage/index.css";
import "./index.css";
import cnData from "../HomePage/cnData";
import engData from "../HomePage/engData";
import { useLanguage } from "../LanguageSwitcher/LanguageContext";
import GoogleMapComponent from "../Maps";
import React, { useState, useEffect, useRef } from "react";

const ContactPage = () => {
  const { selectedLanguage } = useLanguage();
  const data = selectedLanguage === "en" ? engData : cnData;

  const [companyTextToSpeak, setCompanyTextToSpeak] = useState("");
  const [isCompanyTextSpeaking, setIsCompanyTextSpeaking] = useState(false);

  const speechSynthesisRef = useRef(null);

  useEffect(() => {
    setCompanyTextToSpeak(`${data.ourCompanyText1} ${data.ourCompanyText2}`);
  }, [selectedLanguage]);

  const handleCompanyTextSpeak = () => {
    handleStop();
    if (companyTextToSpeak) {
      const speech = new SpeechSynthesisUtterance(companyTextToSpeak);
      speech.lang = selectedLanguage === "cn" ? "zh-CN" : "en-US";
      speechSynthesisRef.current = speech;
      window.speechSynthesis.speak(speech);
      setIsCompanyTextSpeaking(true);
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsCompanyTextSpeaking(false);
  };
  return (
    <>
      <main className="container">
        <section className="contact-section">
          <h2>
            {selectedLanguage === "en"
              ? engData.contactUsHeading
              : cnData.contactUsHeading}
          </h2>

          <div className="contact-info" aria-label="Our Address">
            <p>CP Advanced Imaging</p>
            <p>155 Canal Street</p>
            <p>New York, NY 10013</p>
          </div>

          <GoogleMapComponent aria-label="Interactive Map of CP Advanced Imaging Location" />

          <div className="contact-details">
          <div aria-label="General Information">
              <h3>
                {selectedLanguage === "en"
                  ? engData.generalInformationHeading
                  : cnData.generalInformationHeading}
              </h3>
              <p>Tel: (212) 219-9135</p>
              <p>Fax: (212) 219-9291</p>
            </div>

            <div>
              <h3>
                {selectedLanguage === "en"
                  ? engData.mriHeading
                  : cnData.mriHeading}
              </h3>{" "}
              <p>Tel: (212) 431-9626</p>
              <p>Fax: (646) 898-0691</p>
            </div>

            <div>
              <h3>CT & PET/CT</h3>
              <p>Tel: (646) 898-0660</p>
              <p>Fax: (646) 898-0695</p>
            </div>

            <div>
              <h3>
                {selectedLanguage === "en"
                  ? engData.allOtherExamsHeading
                  : cnData.allOtherExamsHeading}
              </h3>
              <p>Tel: (212) 431-9010</p>
              <p>Fax: (646) 898-0690</p>
            </div>

            <div>
              <h3>
                {selectedLanguage === "en"
                  ? engData.billingServicesHeading
                  : cnData.billingServicesHeading}
              </h3>
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
