import "./index.css";
import { engData, cnData } from "../../util/util";
import { useLanguage } from "../LanguageSwitcher/LanguageContext";

const Services = () => {
  const { selectedLanguage } = useLanguage();
  const data = selectedLanguage === "en" ? engData : cnData;

  return (
    <>
      <div className="container">
        <div className="service-section">
          <h1>{data.services}</h1>
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
