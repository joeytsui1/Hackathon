import "./index.css";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import serviceObj from "./data";
import chineseServiceObj from "./chineseData";
import { useLanguage } from "../LanguageSwitcher/LanguageContext";

const ServicePage = () => {
  const { name } = useParams();
  const { selectedLanguage } = useLanguage();
  const data = selectedLanguage === "en" ? serviceObj : chineseServiceObj;
  const service = data[name];

  const [serviceTextToSpeak, setServiceTextToSpeak] = useState("");
  const [isServiceSpeaking, setIsServiceSpeaking] = useState(false);

  const speechSynthesisRef = useRef(null);

  useEffect(() => {
    let textToSpeak = `${service.title}. `;
    textToSpeak += service.description.join(" ");
    textToSpeak += " Preparation: ";
    service.preparation.forEach((item) => {
      if (Array.isArray(item)) {
        textToSpeak += `${item[0]}. `;
        textToSpeak += item.slice(1).join(" ");
      } else {
        textToSpeak += `${item}. `;
      }
    });
    textToSpeak += " Expectation: ";
    textToSpeak += service.expectation.join(" ");

    setServiceTextToSpeak(textToSpeak);
  }, [selectedLanguage, service]);

  const handleServiceSpeak = () => {
    handleStop();
    if (serviceTextToSpeak) {
      const speech = new SpeechSynthesisUtterance(serviceTextToSpeak);
      speech.lang = selectedLanguage === "cn" ? "zh-CN" : "en-US";
      speechSynthesisRef.current = speech;
      window.speechSynthesis.speak(speech);
      setIsServiceSpeaking(true);
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsServiceSpeaking(false);
  };

  return (
    <>
      <main className="container">
        <section className="service-page-container">
          <div
            className="service-details"
            key={name}
            aria-label={`Service Details for ${service.title}`}
          >
            <img
              className="service-image"
              src={service.imageUrl}
              alt={service.title}
              aria-label={`${service.title} Image`}
            />
            {isServiceSpeaking ? (
              <button onClick={handleStop} aria-label="Stop text to speech">
                Stop
              </button>
            ) : (
              <button onClick={handleServiceSpeak} aria-label="Text to speech">
                {selectedLanguage === "en" ? "Read Service" : "朗读服务"}
              </button>
            )}
            <div className="service-info">
              <h2>{service.title}</h2>
              {service.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="service-info">
            <h3>Preparation:</h3>
            {service.preparation.map((item, index) =>
              Array.isArray(item) ? (
                <div className="preparation-step" key={index}>
                  <h4>{item[0]}</h4>
                  {item.slice(1).map((step, stepIndex) => (
                    <p key={stepIndex}>{step}</p>
                  ))}
                </div>
              ) : (
                <p key={index}>{item}</p>
              )
            )}
            <h3>Expectation:</h3>
            {service.expectation.map((paragraph, index) => (
              <ol>
                {service.expectation.map((paragraph, index) => (
                  <li key={index}>{paragraph}</li>
                ))}
              </ol>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicePage;
