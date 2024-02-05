import './index.css'
import cnData from '../HomePage/cnData';
import engData from '../HomePage/engData';
import GoogleMapComponent from '../Maps';
import { useLanguage } from '../LanguageSwitcher/LanguageContext';
import React, { useState, useEffect, useRef } from "react";


const About = () => {

  const { selectedLanguage } = useLanguage();
  const data = selectedLanguage === "en" ? engData : cnData;

  const [companyTextToSpeak, setCompanyTextToSpeak] = useState("");
  const [isCompanyTextSpeaking, setIsCompanyTextSpeaking] = useState(false);

  const speechSynthesisRef = useRef(null);

  useEffect(() => {
    setCompanyTextToSpeak(
      `${data.ourCompanyText1} ${data.ourCompanyText2}`
    );
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
        <div className="container">
          <div className="about-section">
            <h1>
              {selectedLanguage === "en"
                ? engData.ourCompanyHeading
                : cnData.ourCompanyHeading}
            </h1>
            <p>
              {selectedLanguage === "en"
                ? engData.ourCompanyText1
                : cnData.ourCompanyText1}
            </p>

            <p>
              {selectedLanguage === "en"
                ? engData.ourCompanyText2
                : cnData.ourCompanyText2}
            </p>
          {isCompanyTextSpeaking ? (
            <button onClick={handleStop}>{selectedLanguage === "en" ? "Stop" : "停止"}</button> 
          ) : (
            <button onClick={handleCompanyTextSpeak}>
              {selectedLanguage === "en" ? "Read About Our Company" : "读取关于我们的公司"}
            </button>
          )}
            <div>
              <img src="https://cpadvancedimaging.com/wp-content/uploads/2012/04/paboutus.jpg"></img>
            </div>
          </div>

          <div className="container">
            <div class="contact-section">
              <h2>
                {selectedLanguage === "en"
                  ? engData.contactUsHeading
                  : cnData.contactUsHeading}
              </h2>

              <div class="contact-info">
                <p>CP Advanced Imaging</p>
                <p>155 Canal Street</p>
                <p>New York, NY 10013</p>
              </div>

              <GoogleMapComponent></GoogleMapComponent>

              <div class="contact-details">
                <div>
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
            </div>
          </div>
        </div>
      </>
    );
}

export default About