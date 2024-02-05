import "./index.css";
import image1 from "../../images/cphomeimage-fotor-20240204174922.jpg"
import image2 from "../../images/pic2.jpeg";
import React from "react";
import { useState, useEffect } from "react";
import GoogleMapComponent from "../Maps";

const HomePage = () => {
  const carouselImages = [
    image1,
    image2,
  ];

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

  return (
    <div className="home">
      <div className="section2">
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
        <div className="carousel-buttons">
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
      </div>
      {/* _____________________________________________________________ */}

      <div className="container">
        <div className="section3">
          <h2>Our Services</h2>
          <ul>
            <li>
              <a href="/services/digital-x-ray">
                <img src="https://cpadvancedimaging.com/wp-content/uploads/2012/11/chestxrayrevised-285x300.jpg"></img>
                <h3>Digital X-Ray</h3>
                <p>
                  Imaging with x-rays involves exposing a part of the body to a
                  small dose of radiation to produce a digital image. X-rays are
                  most commonly used to diagnose diseases of the chest (such as
                  pneumonia or lung cancer) and bone disorders (such as
                  arthritis or bone fractures).
                </p>
              </a>
            </li>
            <li>
              <a href="/services/ultrasound">
                <img src="http://cpadvancedimaging.com/wp-content/uploads/2012/09/SONO-CAROTID.jpg"></img>
                <h3>Ultrasound</h3>
                <p>
                  Ultrasound scanning, also called “ultrasound imaging” or
                  “sonography,” uses high-frequency sound waves to produce
                  images of the body. Ultrasound does not use ionizing radiation
                  and does not involve x-ray exposure.
                </p>
              </a>
            </li>
            <li>
              <a href="/services/digital-mammogram">
                <img src="http://cpadvancedimaging.com/wp-content/uploads/2012/04/Mammo-Breast-Right-218x300.jpg"></img>
                <h3>Digital Mammography</h3>
                <p>
                  Mammography is a low-dose x-ray examination of the breast. A
                  mammogram is used in the early detection and diagnosis of
                  breast diseases. Current national guidelines recommend annual
                  screening mammography for all women age 40 and over.
                </p>
              </a>
            </li>
            <li>
              <a href="/services/fluoroscopy">
              <img src="http://cpadvancedimaging.com/wp-content/uploads/2012/09/stomach-300x213.jpg"></img>
              <h3>Fluoroscopy</h3>
              <p>
                Fluoroscopy is a special x-ray technique that makes it possible
                to see internal organs in motion. Through a series of
                consecutive x-rays, a video of the organ of interest is
                generated.
              </p>
              </a>
            </li>
            <li>
              <a href="/services/thyroid-biopsy">
              <img src="https://cpadvancedimaging.com/wp-content/uploads/2013/06/Thyroid-biopsy-300x194.png"></img>
              <h3>Thyroid Biopsy</h3>
              <p>
                During a fine needle aspiration biopsy of the thyroid, a small
                sample of cells is removed from the thyroid gland. Samples of
                the cells are put on a slide for review by the pathologist. The
                pathologist will examine the cells under a microscope to
                determine if they are benign or cancerous.
              </p>
              </a>
            </li>
            <li>
              <a href="/services/bone-densitometry">
              <img src="https://cpadvancedimaging.com/wp-content/uploads/2012/04/dexa.jpg"></img>
              <h3>Bone Densitometry</h3>
              <p>
                Bone density scanning, also called dual-energy x-ray
                absorptiometry (DXA) or bone densitometry, is an enhanced form
                of x-ray technology that is used to measure bone loss and to
                predict risk of bone fracture. DXA is most often performed on
                the lower spine and hips.
              </p>
              </a>
            </li>
            <li>
              <a href="/services/ct-scan">
              <img src="http://cpadvancedimaging.com/wp-content/uploads/2012/04/CT-ABDOMEN-sag.Ser6_.Img48-300x199.jpg"></img>
              <h3>CT Scan</h3>
              <p>
                A Computed Tomography or CT scan is an imaging test that
                combines computers and 360-degree x-rays to produce highly
                detailed images of the body. CT scans are one of the best tools
                to look for sources of pain in the abdomen or pelvis, to find
                the causes of breathing difficulty, to show the extent of
                cancers, or to demonstrate problems of the skeleton.
              </p>
              </a>
            </li>
            <li>
              <a href="/services/pet-ct">
              <img src="http://cpadvancedimaging.com/wp-content/uploads/2012/04/PET-CORONAL-image-2-188x300.jpg"></img>
              <h3>PET/CT</h3>
              <p>
                PET/CT is an advanced imaging test that offers information on
                both tissue metabolism and structure that is not attainable
                using other conventional imaging procedures. Using a small
                amount of radioactive tracer, PET/CT is often used to
                distinguish between healthy and abnormal tissue such as in
                cancer.
              </p>
              </a>
            </li>
            <li>
              <a href="/services/mri">
              <img src="http://cpadvancedimaging.com/wp-content/uploads/2012/10/mrbrainrevised.Ser12.jpg"></img>
              <h3>MRI</h3>
              <p>
                Magnetic Resonance Imaging provides highly detailed pictures of
                anatomy and pathology to help evaluate a wide range of
                conditions anywhere in the body. MRI uses a strong magnetic
                field and radiofrequency pulses to produce clear and detailed
                pictures. MRI does not use ionizing radiation and does not
                involve x-ray exposure.
              </p>
              </a>
            </li>
          </ul>
          <a className="show-more-link" href="/services"> Show More </a>
        </div>
        {/* __________________________________________________________________________________________ */}

        <div className="container">
          <div className="physician-section">
            <h2>Our Physicians</h2>
            <ul>
              <li>
                <a href="/physicians/james-chang">
                  <img
                    src="http://cpadvancedimaging.com/wp-content/uploads/jchang.jpg"
                    alt="James Chang"
                  />
                  <h3>James Chang, M.D., FACR</h3>
                </a>
              </li>
              <li>
                <a href="/physicians/calvin-lo">
                  <img
                    src="http://cpadvancedimaging.com/wp-content/themes/cpai/images/calvinlo.jpg"
                    alt="James Chang"
                  />
                  <h3>Calvin Lo, M.D.</h3>
                </a>
              </li>
              <li>
                <a href="/physicians/heather-osbourne">
                  <img
                    src="http://cpadvancedimaging.com/wp-content/themes/cpai/images/hosborne.jpg"
                    alt="James Chang"
                  />
                  <h3>Heather L. Osborne, M.D.</h3>
                </a>
              </li>
              <li>
                <a href="/physicians/pouneh-fallahi">
                  <img
                    src="http://cpadvancedimaging.com/wp-content/uploads/pfallahi.jpg"
                    alt="James Chang"
                  />
                  <h3>Pouneh Fallahi, M.D. MPH</h3>
                </a>
              </li>
              <li>
                <a href="/physicians/sabrina-pieroni">
                  <img
                    src="https://cpadvancedimaging.com/wp-content/uploads/2016/08/sabrina-pieronic-website-picture-682x1024.jpg"
                    alt="James Chang"
                  />
                  <h3>Sabrina Pieroni, M.D.</h3>
                </a>
              </li>
              <li>
                <a href="/physicians/robert-lautin">
                  <img
                    src="http://cpadvancedimaging.com/wp-content/themes/cpai/images/rlautin.jpg"
                    alt="James Chang"
                  />
                  <h3>Robert F. Lautin, M.D.</h3>
                </a>
              </li>
            </ul>
            <a href="/physicians"> Show More </a>
          </div>
        </div>
        {/* ________________________________________________________________________ */}

        <div className="container">
          <div class="contact-section">
            <h2>Contact Us</h2>

            <div class="contact-info">
              <p>CP Advanced Imaging</p>
              <p>155 Canal Street</p>
              <p>New York, NY 10013</p>
            </div>

            <GoogleMapComponent></GoogleMapComponent>

            <div class="contact-details">
              <div>
                <h3>General Information</h3>
                <p>Tel: (212) 219-9135</p>
                <p>Fax: (212) 219-9291</p>
              </div>

              <div>
                <h3>MRI</h3>
                <p>Tel: (212) 431-9626</p>
                <p>Fax: (646) 898-0691</p>
              </div>

              <div>
                <h3>CT & PET/CT</h3>
                <p>Tel: (646) 898-0660</p>
                <p>Fax: (646) 898-0695</p>
              </div>

              <div>
                <h3>All Other Exams</h3>
                <p>Tel: (212) 431-9010</p>
                <p>Fax: (646) 898-0690</p>
              </div>

              <div>
                <h3>Billing Services</h3>
                <p>Tel: (646) 898-0680</p>
                <p>Fax: (212) 431-4253</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
