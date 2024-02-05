import "./index.css";
import image1 from "../../images/cphomeimage-fotor-20240204174922.jpg";
import image2 from "../../images/pic2.jpeg";
import React, { useRef } from "react";
import { useLanguage } from "../LanguageSwitcher/LanguageContext";
import { useState, useEffect } from "react";
import GoogleMapComponent from "../Maps";
import engData from "./engData";
import cnData from "./cnData";

const HomePage = () => {
  const carouselImages = [image1, image2];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [currentIndex, carouselImages.length]);

  const { selectedLanguage } = useLanguage();
  const data = selectedLanguage === "en" ? engData : cnData;

  const [serviceToSpeak, setServiceToSpeak] = useState("");
  const [isServicesSpeaking, setIsServicesSpeaking] = useState(false);
  const [isPhysiciansSpeaking, setIsPhysiciansSpeaking] = useState(false);
  const [physicianToSpeak, setPhysicianToSpeak] = useState("");
  // const [contactText, setContactText] = useState("");
  // const [isContactSpeaking, setIsContactSpeaking] = useState(false);

  const speechSynthesisRef = useRef(null); // Ref to hold the speech synthesis instance

  useEffect(() => {
    const speech = speechSynthesisRef.current;
    if (speech) {
      window.speechSynthesis.cancel(); // Cancel the speech synthesis
      setIsServicesSpeaking(false);
      setIsPhysiciansSpeaking(false);
      // setIsContactSpeaking(false);
    }
  }, [selectedLanguage]);

  const handleServicesSpeak = () => {
    handleStop();

    if (serviceToSpeak) {
      const speech = new SpeechSynthesisUtterance(serviceToSpeak);
      speech.lang = selectedLanguage === "cn" ? "zh-CN" : "en-US";
      speechSynthesisRef.current = speech; // Store the speech synthesis instance in the ref
      window.speechSynthesis.speak(speech);
      setIsServicesSpeaking(true);
    }
  };

  const handlePhysiciansSpeak = () => {
    handleStop();

    if (physicianToSpeak) {
      const speech = new SpeechSynthesisUtterance(physicianToSpeak);
      speech.lang = selectedLanguage === "cn" ? "zh-CN" : "en-US";
      speechSynthesisRef.current = speech;
      window.speechSynthesis.speak(speech);
      setIsPhysiciansSpeaking(true);
    }
  };

  // const handleContactSpeak = () => {
  //   handleStop();

  //   if (contactText) {
  //     const speech = new SpeechSynthesisUtterance(contactText);
  //     speech.lang = selectedLanguage === "cn" ? "zh-CN" : "en-US";
  //     speechSynthesisRef.current = speech;
  //     window.speechSynthesis.speak(speech);
  //     setIsContactSpeaking(true);
  //   }
  // };

  const handleStop = () => {
    // Stop speech synthesis
    window.speechSynthesis.cancel();
    setIsServicesSpeaking(false);
    setIsPhysiciansSpeaking(false);
    // setIsContactSpeaking(false);
  };

  const generatePhysiciansText = () => {
    // Extracting the heading text
    const headingText =
      selectedLanguage === "en"
        ? data.ourPhysiciansHeading
        : data.ourPhysiciansHeading;

    // Extracting the physician names
    const physicianNames = Array.from(
      document.querySelectorAll(".physician-section h3")
    ).map((element) => element.textContent.trim());

    // Combining the heading text and physician names
    return `${headingText}. ${physicianNames.join(". ")}`;
  };

  const generateServicesText = () => {
    const servicesText = data.servicesData
      .map((service) => `${service.title}. ${service.description}`)
      .join(" ");
    return servicesText;
  };

  useEffect(() => {
    setServiceToSpeak(generateServicesText());
    setPhysicianToSpeak(generatePhysiciansText());
  }, [selectedLanguage]);

  // useEffect(() => {
  //   // Generate text for contact information and details
  //   const contactText = `${data.contactInfo.map((info) => info.text).join(". ")}.
  //     ${data.contactDetails.map((detail) => `${detail.heading}. ${detail.text}`).join(". ")}`;
  //   setContactText(contactText);
  // }, [selectedLanguage]);

  return (
    <>
      <main className="home">
        <section className="section2" aria-label="Image Carousel Section">
          {carouselImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`carousel-slide-${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                opacity: index === currentIndex ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            />
          ))}
          <div className="carousel-buttons" aria-label="Carousel Buttons">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`carousel-button ${
                  index === currentIndex ? "active" : ""
                }`}
                onClick={() => handleButtonClick(index)}
              />
            ))}
          </div>
        </section>

        <div className="container">
          <section className="section3" aria-label="Our Services Section">
            <h2>Our Services</h2>
            {isServicesSpeaking ? (
              <button onClick={handleStop} aria-label="Stop text to speech">
                {selectedLanguage === "en" ? "Stop" : "停止"}
              </button>
            ) : (
              <button onClick={handleServicesSpeak} aria-label="Text to speech">
                {selectedLanguage === "en" ? "Read Services" : "读取服务"}
              </button>
            )}
            <ul>
              {data.servicesData.slice(0, 9).map((service, index) => (
                <li key={index}>
                  <a href={service.link}>
                    <img src={service.image} alt={`service-${index}`} />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </a>
                </li>
              ))}
            </ul>
            <a className="show-more-link" href="/services">
              {selectedLanguage === "en" ? engData.showMore : cnData.showMore}
            </a>

            {/* __________________________________________________________________________________________ */}

            <div className="container">
              <section className="physician-section">
                <h2>
                  {selectedLanguage === "en"
                    ? engData.ourPhysiciansHeading
                    : cnData.ourPhysiciansHeading}
                </h2>
                {isPhysiciansSpeaking ? (
                  <button onClick={handleStop} aria-label="Stop text to speech">
                    {selectedLanguage === "en" ? "Stop" : "停止"}
                  </button>
                ) : (
                  <button onClick={handlePhysiciansSpeak} aria-label="Text to speech">
                    {selectedLanguage === "en" ? "Read Physicians" : "阅读医生"}
                  </button>
                )}
                <ul>
                  <li>
                    <a href="/physicians/james-chang">
                      <img
                        src="http://cpadvancedimaging.com/wp-content/uploads/jchang.jpg"
                        alt="James Chang, M.D., FACR"
                      />
                      <h3>James Chang, M.D., FACR</h3>
                    </a>
                  </li>
                  <li>
                    <a href="/physicians/calvin-lo">
                      <img
                        src="http://cpadvancedimaging.com/wp-content/themes/cpai/images/calvinlo.jpg"
                        alt="Calvin Lo, M.D."
                      />
                      <h3>Calvin Lo, M.D.</h3>
                    </a>
                  </li>
                  <li>
                    <a href="/physicians/heather-osbourne">
                      <img
                        src="http://cpadvancedimaging.com/wp-content/themes/cpai/images/hosborne.jpg"
                        alt="Heather Osbourne, M.D."
                      />
                      <h3>Heather L. Osborne, M.D.</h3>
                    </a>
                  </li>
                  <li>
                    <a href="/physicians/pouneh-fallahi">
                      <img
                        src="http://cpadvancedimaging.com/wp-content/uploads/pfallahi.jpg"
                        alt="Pouneh Fallahi, M.D. MPH"
                      />
                      <h3>Pouneh Fallahi, M.D. MPH</h3>
                    </a>
                  </li>
                  <li>
                    <a href="/physicians/sabrina-pieroni">
                      <img
                        src="https://cpadvancedimaging.com/wp-content/uploads/2016/08/sabrina-pieronic-website-picture-682x1024.jpg"
                        alt="Sabrina Pieroni, M.D."
                      />
                      <h3>Sabrina Pieroni, M.D.</h3>
                    </a>
                  </li>
                  <li>
                    <a href="/physicians/robert-lautin">
                      <img
                        src="http://cpadvancedimaging.com/wp-content/themes/cpai/images/rlautin.jpg"
                        alt="Robert F. Lautin, M.D."
                      />
                      <h3>Robert F. Lautin, M.D.</h3>
                    </a>
                  </li>
                </ul>

                <a href="/physicians">
                  {" "}
                  {selectedLanguage === "en"
                    ? engData.showMore
                    : cnData.showMore}{" "}
                </a>
              </section>
            </div>
          </section>
        </div>

        <div className="container">
          <section className="contact-section" aria-label="Contact Us Section">
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

            <div className="contact-details" aria-label="Contact Details">
              <div aria-label="General Information">
                <h3>
                  {selectedLanguage === "en"
                    ? engData.generalInformationHeading
                    : cnData.generalInformationHeading}
                </h3>

                <p>Tel: (212) 219-9135</p>
                <p>Fax: (212) 219-9291</p>
              </div>

              <div aria-label="MRI">
                <h3>
                  {selectedLanguage === "en"
                    ? engData.mriHeading
                    : cnData.mriHeading}
                </h3>{" "}
                <p>Tel: (212) 431-9626</p>
                <p>Fax: (646) 898-0691</p>
              </div>

              <div aria-label="CT & PET/CT">
                <h3>CT & PET/CT</h3>
                <p>Tel: (646) 898-0660</p>
                <p>Fax: (646) 898-0695</p>
              </div>

              <div aria-label="All Other Exams">
                <h3>
                  {selectedLanguage === "en"
                    ? engData.allOtherExamsHeading
                    : cnData.allOtherExamsHeading}
                </h3>

                <p>Tel: (212) 431-9010</p>
                <p>Fax: (646) 898-0690</p>
              </div>

              <div aria-label="Billing Services">
                <h3>Billing Services</h3>
                <h3>
                  {selectedLanguage === "en"
                    ? engData.billingServicesHeading
                    : cnData.billingServicesHeading}
                </h3>
                <p>Tel: (646) 898-0680</p>
                <p>Fax: (212) 431-4253</p>
              </div>

              {/* {isContactSpeaking ? (
                <button onClick={handleStop}>{selectedLanguage === "en" ? "Stop" : "停止"}</button>
              ) : (
                <button onClick={handleContactSpeak}>{selectedLanguage === "en" ? "Read Contact Information" : "读取联系信息"}</button>
              )} */}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
