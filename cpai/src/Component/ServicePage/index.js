import "./index.css"
import { useParams } from "react-router-dom";
import serviceObj from "./data";
import chineseServiceObj from "./chineseData";
import { useLanguage } from "../LanguageSwitcher/LanguageContext";
const ServicePage = () => {
  const { name } = useParams();
  const { selectedLanguage } = useLanguage();
  const data = selectedLanguage === "en" ? serviceObj : chineseServiceObj;
  const service = data[name];

  return (
    <>
      <div className="container">
        <div className="service-page-container">
          <div className="service-details" key={name}>
            <img
              className="service-image"
              src={service.imageUrl}
              alt={service.title}
            />
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
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;

