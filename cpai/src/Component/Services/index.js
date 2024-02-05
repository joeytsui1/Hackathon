import './index.css'
import cnData from '../HomePage/cnData';
import engData from '../HomePage/engData';
import { useLanguage } from "../LanguageSwitcher/LanguageContext";
const Services = () => {
    const { selectedLanguage } = useLanguage();
    const data = selectedLanguage === "en" ? engData : cnData;
    return (
      <>
        <div className="container">
          <div className="service-section">
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
      </div>
    </>
  );
};

export default Services;
