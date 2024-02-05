const engData = {
  services: "Our Services",
  servicesData: [
    {
      link: "/services/digital-x-ray",
      image:
        "https://cpadvancedimaging.com/wp-content/uploads/2012/11/chestxrayrevised-285x300.jpg",
      title: "Digital X-Ray",
      description:
        "Imaging with x-rays involves exposing a part of the body to a small dose of radiation to produce a digital image. X-rays are most commonly used to diagnose diseases of the chest (such as pneumonia or lung cancer) and bone disorders (such as arthritis or bone fractures).",
    },
    {
      link: "/services/ultrasound",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/09/SONO-CAROTID.jpg",
      title: "Ultrasound",
      description:
        "Ultrasound scanning, also called “ultrasound imaging” or “sonography,” uses high-frequency sound waves to produce images of the body. Ultrasound does not use ionizing radiation and does not involve x-ray exposure.",
    },
    {
      link: "/services/digital-mammogram",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/04/Mammo-Breast-Right-218x300.jpg",
      title: "Digital Mammography",
      description:
        "Mammography is a low-dose x-ray examination of the breast. A mammogram is used in the early detection and diagnosis of breast diseases. Current national guidelines recommend annual screening mammography for all women age 40 and over.",
    },
    {
      link: "/services/fluoroscopy",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/09/stomach-300x213.jpg",
      title: "Fluoroscopy",
      description:
        "Fluoroscopy is a special x-ray technique that makes it possible to see internal organs in motion. Through a series of consecutive x-rays, a video of the organ of interest is generated.",
    },
    {
      link: "/services/thyroid-biopsy",
      image:
        "https://cpadvancedimaging.com/wp-content/uploads/2013/06/Thyroid-biopsy-300x194.png",
      title: "Thyroid Biopsy",
      description:
        "During a fine needle aspiration biopsy of the thyroid, a small sample of cells is removed from the thyroid gland. Samples of the cells are put on a slide for review by the pathologist. The pathologist will examine the cells under a microscope to determine if they are benign or cancerous.",
    },
    {
      link: "/services/bone-densitometry",
      image:
        "https://cpadvancedimaging.com/wp-content/uploads/2012/04/dexa.jpg",
      title: "Bone Densitometry",
      description:
        "Bone density scanning, also called dual-energy x-ray absorptiometry (DXA) or bone densitometry, is an enhanced form of x-ray technology that is used to measure bone loss and to predict risk of bone fracture. DXA is most often performed on the lower spine and hips.",
    },
    {
      link: "/services/ct-scan",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/04/CT-ABDOMEN-sag.Ser6_.Img48-300x199.jpg",
      title: "CT Scan",
      description:
        "A Computed Tomography or CT scan is an imaging test that combines computers and 360-degree x-rays to produce highly detailed images of the body. CT scans are one of the best tools to look for sources of pain in the abdomen or pelvis, to find the causes of breathing difficulty, to show the extent of cancers, or to demonstrate problems of the skeleton.",
    },
    {
      link: "/services/pet-ct",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/04/PET-CORONAL-image-2-188x300.jpg",
      title: "PET/CT",
      description:
        "PET/CT is an advanced imaging test that offers information on both tissue metabolism and structure that is not attainable using other conventional imaging procedures. Using a small amount of radioactive tracer, PET/CT is often used to distinguish between healthy and abnormal tissue such as in cancer.",
    },

    {
      link: "/services/mri",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/10/mrbrainrevised.Ser12.jpg",
      title: "MRI",
      description:
        "Magnetic Resonance Imaging provides highly detailed pictures of anatomy and pathology to help evaluate a wide range of conditions anywhere in the body. MRI uses a strong magnetic field and radiofrequency pulses to produce clear and detailed pictures. MRI does not use ionizing radiation and does not involve x-ray exposure.",
    },
    {
      link: "/services/mr-angiogram",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/10/mrachestrevised.jpg",
      title: "MR Angiogram",
      description:
        "Magnetic Resonance Angiography (MRA) provides highly detailed pictures of blood vessels using a strong magnetic field and radiofrequency pulses. MRA does not use ionizing radiation and does not involve x-ray exposure.",
    },
    {
      link: "/services/breast-mri",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/09/MRI-BREAST-280x300.jpg",
      title: "Breast MRI",
      description:
        "Breast Magnetic Resonance Imaging provides highly detailed pictures of the breast to help evaluate a wide range of conditions. MRI uses a strong magnetic field and radiofrequency pulses to produce clear and detailed pictures.",
    },
    {
      link: "/services/liver-elastography",
      image:
        "https://cpadvancedimaging.com/wp-content/uploads/2016/11/shear-wave-velocity-measurement-at-8cm-depth.jpg",
      title: "Liver Elastography",
      description:
        "Ultrasound-based liver elastography is a noninvasive test to evaluate tissue stiffness due to underlying liver disease.",
    },

    {
      link: "/services/ct-lung-screening",
      image:
        "https://cpadvancedimaging.com/wp-content/uploads/2016/11/ct-lung-screening-picture-updated-113016.jpg",
      title: "Low Dose CT Lung Screening",
      description:
        "CT lung screening is a CT scan of the lungs using a low radiation dose technique.",
    },

    {
      link: "/services/ct-virtual-colonoscopy",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/10/ctcolonrevised.Ser1004.jpg",
      title: "CT Virtual Colonoscopy",
      description:
        "CT colonoscopy, also known as virtual colonoscopy, is a specialized CT scan which provides a detailed view of the colon. Virtual colonoscopy is minimally invasive and does not require anesthesia unlike conventional colonoscopy.",
    },

    {
      link: "/services/ct-angiogram",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/09/CTA-Abdomen-2-276x300.jpg",
      title: "CT Angiogram",
      description:
        "A Computed Tomography Angiogram or CTA scan is an imaging test that combines computers and 360-degree x-rays to produce highly detailed images of the blood vessels of the body.",
    },

    {
      link: "/services/3d-mammography-breast-tomosythesis",
      image:
        "https://cpadvancedimaging.com/wp-content/uploads/2016/11/breast-tomo-picture-updated-113016.jpg",
      title: "3D Mammography Breast Tomosynthesis",
      description:
        "Breast tomosynthesis or 3D mammography is an FDA approved advanced technology that can improve detection of breast cancer, particularly in women with dense breast since it provides a clearer image of dense breast tissue.",
    },
    // Add more services as needed
  ],
  showMore: "Show More",
  ourPhysiciansHeading: "Our Physicians",
  contactUsHeading: "Contact Us",
  mriHeading: "MRI",
  generalInformationHeading: "General Information",
  ctPetCtHeading: "CT & PET/CT",
  allOtherExamsHeading: "All Other Exams",
  billingServicesHeading: "Billing Services",
  // About page
  ourCompanyHeading: "Our Company",
  ourCompanyText1:
    "CP Advanced Imaging is a multi-modality diagnostic imaging center conveniently located in lower Manhattan, easily accessible via public transportation. All of our radiologists are on-site, Board Certified and subspecialty trained. We have been providing high quality imaging services in the community for over 45 years. The center is set up with the upscale modern radiology equipment purchased from the manufacturer and is ACR accredited as a high quality radiology diagnostics centre. Along with the basic tests – CAT scan, MRI, X-ray, mammography, ultra-sound and osteoporosis tests (DEXA), we conduct some exceptional diagnostics tests and biopsies.",
  ourCompanyText2:
    "The top priority for us is high quality of our diagnostics and providing the best care for our patients. We feel responsible for the work we’re doing. We struggle that the tests will be easy for you, and the diagnosis will be accurate.",
};

export default engData;
