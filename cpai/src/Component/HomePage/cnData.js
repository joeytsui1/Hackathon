const cnData = {
  services: "我们的服务",
  servicesData: [
    {
      link: "/services/digital-x-ray",
      image:
        "https://cpadvancedimaging.com/wp-content/uploads/2012/11/chestxrayrevised-285x300.jpg",
      title: "数字X光",
      description:
        "使用X射线成像涉及将身体的一部分暴露于小剂量辐射，以产生数字图像。X射线最常用于诊断胸部疾病（如肺炎或肺癌）和骨骼疾病（如关节炎或骨折）。",
    },
    {
      link: "/services/ultrasound",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/09/SONO-CAROTID.jpg",
      title: "超声波",
      description:
        "超声波扫描，也称为“超声波成像”或“超声波”，使用高频声波产生身体图像。超声波不使用电离辐射，不涉及X射线暴露。",
    },
    {
      link: "/services/digital-mammogram",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/04/Mammo-Breast-Right-218x300.jpg",
      title: "数字乳腺X光",
      description:
        "乳腺X光是对乳腺进行低剂量X射线检查的一种方法。乳腺X光用于早期发现和诊断乳腺疾病。当前国家指南建议所有40岁及以上的妇女每年进行筛查乳腺X光。",
    },
    {
      link: "/services/fluoroscopy",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/09/stomach-300x213.jpg",
      title: "透视检查",
      description:
        "透视检查是一种特殊的X射线技术，可以观察内部器官的运动。通过一系列连续的X射线，生成感兴趣器官的视频。",
    },
    {
      link: "/services/thyroid-biopsy",
      image:
        "https://cpadvancedimaging.com/wp-content/uploads/2013/06/Thyroid-biopsy-300x194.png",
      title: "甲状腺活检",
      description:
        "在甲状腺细针穿刺活检期间，从甲状腺腺体中取出一小部分细胞样本。将细胞样本放在玻片上供病理学家审查。病理学家将在显微镜下检查细胞，以确定它们是良性还是恶性。",
    },
    {
      link: "/services/bone-densitometry",
      image:
        "https://cpadvancedimaging.com/wp-content/uploads/2012/04/dexa.jpg",
      title: "骨密度检测",
      description:
        "骨密度扫描，也称为双能X射线吸收法（DXA）或骨密度测定，是一种增强型的X射线技术，用于测量骨质流失并预测骨折风险。DXA通常在下脊椎和髋部进行。",
    },
    {
      link: "/services/ct-scan",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/04/CT-ABDOMEN-sag.Ser6_.Img48-300x199.jpg",
      title: "CT扫描",
      description:
        "计算机断层扫描（CT扫描）是一种影像检查，结合计算机和360度X射线，产生身体的高度详细图像。CT扫描是寻找腹部或盆腔疼痛来源、找出呼吸困难原因、显示癌症范围或展示骨骼问题的最佳工具之一。",
    },
    {
      link: "/services/pet-ct",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/04/PET-CORONAL-image-2-188x300.jpg",
      title: "PET/CT",
      description:
        "PET/CT是一种先进的影像检查，提供关于组织代谢和结构的信息，这是使用其他常规影像检查无法获得的。使用少量放射性示踪剂，PET/CT经常用于区分健康和异常组织，比如癌症。",
    },

    {
      link: "/services/mri",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/10/mrbrainrevised.Ser12.jpg",
      title: "磁共振成像（MRI）",
      description:
        "磁共振成像提供身体任何部位的解剖学和病理学的高度详细图像，有助于评估各种病况。MRI利用强磁场和射频脉冲产生清晰详细的图像。MRI不使用电离辐射，不涉及X射线暴露。",
    },
    {
      link: "/services/mr-angiogram",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/10/mrachestrevised.jpg",
      title: "磁共振血管造影（MRA）",
      description:
        "磁共振血管造影（MRA）利用强磁场和射频脉冲提供血管的高度详细图像。MRA不使用电离辐射，不涉及X射线暴露。",
    },
    {
      link: "/services/breast-mri",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/09/MRI-BREAST-280x300.jpg",
      title: "乳腺磁共振成像（MRI）",
      description:
        "乳腺磁共振成像提供乳腺的高度详细图像，有助于评估各种病况。MRI利用强磁场和射频脉冲产生清晰详细的图像。",
    },
    {
      link: "/services/liver-elastography",
      image:
        "https://cpadvancedimaging.com/wp-content/uploads/2016/11/shear-wave-velocity-measurement-at-8cm-depth.jpg",
      title: "肝脏弹性成像",
      description:
        "基于超声的肝脏弹性成像是一种非侵入性测试，用于评估由潜在肝脏疾病引起的组织硬度。",
    },
    {
      link: "/services/ct-lung-screening",
      image:
        "https://cpadvancedimaging.com/wp-content/uploads/2016/11/ct-lung-screening-picture-updated-113016.jpg",
      title: "低剂量CT肺部筛查",
      description: "CT肺部筛查是使用低辐射剂量技术进行的肺部CT扫描。",
    },

    {
      link: "/services/ct-virtual-colonoscopy",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/10/ctcolonrevised.Ser1004.jpg",
      title: "CT虚拟结肠镜检查",
      description:
        "CT结肠镜检查，也称为虚拟结肠镜检查，是一种专业的CT扫描，可提供结肠的详细视图。虚拟结肠镜检查是微创的，不像传统结肠镜检查那样需要麻醉。",
    },

    {
      link: "/services/ct-angiogram",
      image:
        "http://cpadvancedimaging.com/wp-content/uploads/2012/09/CTA-Abdomen-2-276x300.jpg",
      title: "CT血管造影",
      description:
        "计算机体层摄影血管造影（CTA）扫描是一种影像测试，结合了计算机和360度X射线，以产生身体血管的高度详细图像。",
    },

    {
      link: "/services/3d-mammography-breast-tomosythesis",
      image:
        "https://cpadvancedimaging.com/wp-content/uploads/2016/11/breast-tomo-picture-updated-113016.jpg",
      title: "3D乳腺摄影乳腺切层摄影",
      description:
        "乳腺切层摄影或3D乳腺摄影是FDA批准的先进技术，可以提高对乳腺癌的检测能力，特别是对于乳腺密度大的女性，因为它提供了密集乳腺组织更清晰的图像。",
    },

    // Add more services as needed
  ],

  showMore: "显示更多",
  ourPhysiciansHeading: "我们的医生",
  contactUsHeading: "联系我们",
  mriHeading: "磁共振成像（MRI）",
  generalInformationHeading: "一般信息",
  ctPetCtHeading: "CT & PET/CT",
  allOtherExamsHeading: "所有其他检查",
  billingServicesHeading: "结算服务",

  //   ABOUT PAGE
  ourCompanyHeading: "我们的公司",
  ourCompanyText1:
    "CP Advanced Imaging是一家位于曼哈顿下城的多模态诊断影像中心，通过公共交通方便抵达。我们所有的放射科医生都在现场，都是董事会认证和专科培训的。我们在社区提供高质量的成像服务已有45多年的历史。该中心配备了从制造商购买的高档现代放射设备，并被美国放射学院（ACR）认证为高质量的放射学诊断中心。除了基本的检查 - CAT扫描，MRI，X射线，乳腺X线，超声波和骨密度测试（DEXA）之外，我们还进行一些特殊的诊断测试和活检。",
  ourCompanyText2:
    "我们的首要任务是确保我们诊断的高质量，并为患者提供最佳护理。我们对自己所做的工作负有责任感。我们努力确保检查对您来说简单，并且诊断准确。",
};

export default cnData;
