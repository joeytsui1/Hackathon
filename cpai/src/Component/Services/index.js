import "./index.css";
import cnData from "../HomePage/cnData";
import engData from "../HomePage/engData";
import { useLanguage } from "../LanguageSwitcher/LanguageContext";
import { useState, useEffect, useRef } from "react";

const Services = () => {
  const { selectedLanguage } = useLanguage();
  const data = selectedLanguage === "en" ? engData : cnData;

  const [serviceToSpeak, setServiceToSpeak] = useState("");
  const [isServicesSpeaking, setIsServicesSpeaking] = useState(false);

  const speechSynthesisRef = useRef(null); // Ref to hold the speech synthesis instance

  useEffect(() => {
    const speech = speechSynthesisRef.current;
    if (speech) {
      window.speechSynthesis.cancel(); // Cancel the speech synthesis
      setIsServicesSpeaking(false);
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

  const handleStop = () => {
    // Stop speech synthesis
    window.speechSynthesis.cancel();
    setIsServicesSpeaking(false);
  };

  // const generateServicesText = () => {
  //   const servicesText = data.servicesData.map(service => `${service.title}. ${service.description}`).join(" ");
  //   return servicesText;
  // };

  // useEffect(() => {
  //   setServiceToSpeak(generateServicesText());
  // }, [selectedLanguage]);

  return (
    <>
      <div className="container">
        <div className="service-section">
          <h1>Our Services</h1>
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
            {data.servicesData.map((service, index) => (
              <li key={index}>
                <a href={service.link}>
                  <img src={service.image} alt={`service-${index}`} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;
