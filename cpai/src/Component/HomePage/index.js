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
  const carouselImages = [image2, image2];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 20000);
    return () => clearInterval(interval);
  }, [currentIndex, carouselImages.length]);

  const { selectedLanguage } = useLanguage();
  const data = selectedLanguage === "en" ? engData : cnData;



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
          <div className="description">
            <h3>{selectedLanguage === "en" ? "Welcome to" : "欢迎来到"}</h3>

            <h1>CP Advanced Imaging</h1>
          </div>
        </section>

        <div className="container">
          <section className="section3" aria-label="Our Services Section">
            <h2>{data.services}</h2>
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

                <a href="/physicians" className="show-more-link">
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
        </div>
      </main>
    </>
  );
};

export default HomePage;
