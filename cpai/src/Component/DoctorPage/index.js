import "./index.css";
import React from "react";
import { useParams } from "react-router-dom";


const DoctorPage = () => {
  const doctors = {
    "james-chang": {
      title: "James Chang, M.D., FACR",
      description: "Board Certified by the American Board of Radiology",
      imageUrl: "http://cpadvancedimaging.com/wp-content/uploads/jchang.jpg",
      achievements: [
        "Massachusetts Institute of Technology – Bachelor of Science",
        "Tufts University School of Medicine – Doctor of Medicine",
        "Saint Vincent’s Hospital Medical Center, NY – Resident in Radiology",
        "Saint Vincent’s Hospital Medical Center, NY – Fellowship in Cardiovascular Radiology",
        "Diplomat, American Board of Radiology",
        "Fellow American College of Radiology",
        "Former : President of NY State Radiological Society Councilor ACR",
        "Vice Chairman Department of Radiology, St. Vincent’s Hospital",
        "Multiple publications : Vascular and Interventional Radiology",
      ],
    },

    "lawrence-cabusora": {
      title: "Lawrence Cabusora, M.D.",
      description: "Board Certified by the American Board of Radiology",
      imageUrl:
        "https://cpadvancedimaging.com/wp-content/uploads/2016/08/lawrence-cabusora-website-picture-682x1024.jpg",
      achievements: [
        "Massachusetts Institute of Technology – Bachelor of Science",
        "Tufts University School of Medicine – Doctor of Medicine",
        "Saint Vincent’s Hospital Medical Center, NY – Resident in Radiology",
        "Saint Vincent’s Hospital Medical Center, NY – Fellowship in Cardiovascular Radiology",
        "Diplomat, American Board of Radiology",
        "Fellow American College of Radiology",
        "Former : President of NY State Radiological Society Councilor ACR",
        "Vice Chairman Department of Radiology, St. Vincent’s Hospital",
        "Multiple publications : Vascular and Interventional Radiology",
      ],
    },

    "pouneh-fallahi": {
      title: "Pouneh Fallahi, M.D. MPH",
      description: "Board Certified by the American Board of Radiology",
      imageUrl: "http://cpadvancedimaging.com/wp-content/uploads/pfallahi.jpg",
      achievements: [
        "Massachusetts Institute of Technology – Bachelor of Science",
        "Tufts University School of Medicine – Doctor of Medicine",
        "Saint Vincent’s Hospital Medical Center, NY – Resident in Radiology",
        "Saint Vincent’s Hospital Medical Center, NY – Fellowship in Cardiovascular Radiology",
        "Diplomat, American Board of Radiology",
        "Fellow American College of Radiology",
        "Former : President of NY State Radiological Society Councilor ACR",
        "Vice Chairman Department of Radiology, St. Vincent’s Hospital",
        "Multiple publications : Vascular and Interventional Radiology",
      ],
    },

    "amy-law": {
      title: "Amy S. Law, M.D.",
      description: "Board Certified by the American Board of Radiology",
      imageUrl:
        "https://cpadvancedimaging.com/wp-content/uploads/2019/11/amy-law-website-pic-683x1024.jpg",
      achievements: [
        "Massachusetts Institute of Technology – Bachelor of Science",
        "Tufts University School of Medicine – Doctor of Medicine",
        "Saint Vincent’s Hospital Medical Center, NY – Resident in Radiology",
        "Saint Vincent’s Hospital Medical Center, NY – Fellowship in Cardiovascular Radiology",
        "Diplomat, American Board of Radiology",
        "Fellow American College of Radiology",
        "Former : President of NY State Radiological Society Councilor ACR",
        "Vice Chairman Department of Radiology, St. Vincent’s Hospital",
        "Multiple publications : Vascular and Interventional Radiology",
      ],
    },

    "calvin-lo": {
      title: "Calvin Lo, M.D.",
      description: "Board Certified by the American Board of Radiology",
      imageUrl:
        "http://cpadvancedimaging.com/wp-content/themes/cpai/images/calvinlo.jpg",
      achievements: [
        "Massachusetts Institute of Technology – Bachelor of Science",
        "Tufts University School of Medicine – Doctor of Medicine",
        "Saint Vincent’s Hospital Medical Center, NY – Resident in Radiology",
        "Saint Vincent’s Hospital Medical Center, NY – Fellowship in Cardiovascular Radiology",
        "Diplomat, American Board of Radiology",
        "Fellow American College of Radiology",
        "Former : President of NY State Radiological Society Councilor ACR",
        "Vice Chairman Department of Radiology, St. Vincent’s Hospital",
        "Multiple publications : Vascular and Interventional Radiology",
      ],
    },

    "hari-nandu": {
      title: "Hari Nandu, M.D",
      description: "Board Certified by the American Board of Radiology",
      imageUrl:
        "https://cpadvancedimaging.com/wp-content/uploads/2019/11/hari-nandu-website-pic-683x1024.jpg",
      achievements: [
        "Massachusetts Institute of Technology – Bachelor of Science",
        "Tufts University School of Medicine – Doctor of Medicine",
        "Saint Vincent’s Hospital Medical Center, NY – Resident in Radiology",
        "Saint Vincent’s Hospital Medical Center, NY – Fellowship in Cardiovascular Radiology",
        "Diplomat, American Board of Radiology",
        "Fellow American College of Radiology",
        "Former : President of NY State Radiological Society Councilor ACR",
        "Vice Chairman Department of Radiology, St. Vincent’s Hospital",
        "Multiple publications : Vascular and Interventional Radiology",
      ],
    },

    "heather-osbourne": {
      title: "Heather L. Osborne, M.D.",
      description: "Board Certified by the American Board of Radiology",
      imageUrl:
        "http://cpadvancedimaging.com/wp-content/themes/cpai/images/hosborne.jpg",
      achievements: [
        "Massachusetts Institute of Technology – Bachelor of Science",
        "Tufts University School of Medicine – Doctor of Medicine",
        "Saint Vincent’s Hospital Medical Center, NY – Resident in Radiology",
        "Saint Vincent’s Hospital Medical Center, NY – Fellowship in Cardiovascular Radiology",
        "Diplomat, American Board of Radiology",
        "Fellow American College of Radiology",
        "Former : President of NY State Radiological Society Councilor ACR",
        "Vice Chairman Department of Radiology, St. Vincent’s Hospital",
        "Multiple publications : Vascular and Interventional Radiology",
      ],
    },

    "pouneh-fallahi": {
      title: "Pouneh Fallahi, M.D. MPH",
      description: "Board Certified by the American Board of Radiology",
      imageUrl: "http://cpadvancedimaging.com/wp-content/uploads/pfallahi.jpg",
      achievements: [
        "Massachusetts Institute of Technology – Bachelor of Science",
        "Tufts University School of Medicine – Doctor of Medicine",
        "Saint Vincent’s Hospital Medical Center, NY – Resident in Radiology",
        "Saint Vincent’s Hospital Medical Center, NY – Fellowship in Cardiovascular Radiology",
        "Diplomat, American Board of Radiology",
        "Fellow American College of Radiology",
        "Former : President of NY State Radiological Society Councilor ACR",
        "Vice Chairman Department of Radiology, St. Vincent’s Hospital",
        "Multiple publications : Vascular and Interventional Radiology",
      ],
    },

    "sabrina-pieroni": {
      title: "Sabrina Pieroni, M.D.",
      description: "Board Certified by the American Board of Radiology",
      imageUrl:
        "https://cpadvancedimaging.com/wp-content/uploads/2016/08/sabrina-pieronic-website-picture-682x1024.jpg",
      achievements: [
        "Massachusetts Institute of Technology – Bachelor of Science",
        "Tufts University School of Medicine – Doctor of Medicine",
        "Saint Vincent’s Hospital Medical Center, NY – Resident in Radiology",
        "Saint Vincent’s Hospital Medical Center, NY – Fellowship in Cardiovascular Radiology",
        "Diplomat, American Board of Radiology",
        "Fellow American College of Radiology",
        "Former : President of NY State Radiological Society Councilor ACR",
        "Vice Chairman Department of Radiology, St. Vincent’s Hospital",
        "Multiple publications : Vascular and Interventional Radiology",
      ],
    },
  };

  const { name } = useParams();
  const doctor = doctors[name]; // Access the specific doctor's data

  if (!doctor) {
    // Handle the case where the doctor is not found
    return <div>Doctor not found</div>;
  }
  return (
    <>
      <div className="container">
        <div className="doctor-page">
          <div className="doctor-page-banner">
            <img
              src="https://cpadvancedimaging.com/wp-content/uploads/2018/09/physicians.jpg"
              alt="Doctor Banner"
            />
          </div>
          <div className="doctor-info">
            <h2>{doctor.title}</h2>
            <img src={doctor.imageUrl} alt={doctor.title} />
            <p>{doctor.description}</p>
            <ul>
              {doctor.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorPage;
