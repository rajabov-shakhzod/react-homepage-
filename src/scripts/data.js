import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const contactData = {
  email: "",
  phone: "",
  address: {
    en: "",
    ko: ""
  }
}
export const services = [
  {
    id: 1,
    title: {
      en: "Service One",
      ko: "서비스 원"
    },
    detailPage: {
      title: {
        en: "Detailed Service One",
        ko: "자세한 서비스 원"
      },
      description1: {
        en: "This is a detailed description of Service One in English.",
        ko: "이것은 서비스 원에 대한 자세한 설명입니다."
      },
      description2: {
        en: "Additional information about Service One in English.",
        ko: "서비스 원에 대한 추가 정보입니다."
      },
      heroImg: "/assets/img/service-hero/1.png"
    },
    icon: "/assets/img/icon/9.svg",
  },
  {
    id: 2,
    title: {
      en: "Service Two",
      ko: "서비스 투"
    },
    detailPage: {
      title: {
        en: "Detailed Service Two",
        ko: "자세한 서비스 투"
      },
      description1: {
        en: "This is a detailed description of Service Two in English.",
        ko: "이것은 서비스 투에 대한 자세한 설명입니다."
      },
      description2: {
        en: "Additional information about Service Two in English.",
        ko: "서비스 투에 대한 추가 정보입니다."
      },
      heroImg: "/assets/img/service-hero/2.png"
    },
    icon: "/assets/img/icon/2.png",
  },
  {
    id: 3,
    title: {
      en: "Service Three",
      ko: "서비스 쓰리"
    },
    detailPage: {
      title: {
        en: "Detailed Service Three",
        ko: "자세한 서비스 쓰리"
      },
      description1: {
        en: "This is a detailed description of Service Three in English.",
        ko: "이것은 서비스 쓰리에 대한 자세한 설명입니다."
      },
      description2: {
        en: "Additional information about Service Three in English.",
        ko: "서비스 쓰리에 대한 추가 정보입니다."
      },
      heroImg: "/assets/img/service-hero/3.png"
    },
    icon: "/assets/img/icon/3.png",
  }
];


  export const statistics = [
    {
      name: {
        en: "Projects Completed",
        ko: "완료 프로젝트 수"
      },
      number:{
        en: "",
        ko: ""
      },
      icon: 'assets/img/icon/17.svg'
    },
    {
      name: {
        en: "Clients Served",
        ko: "서비스 제공 고객 수"
      },
      number:{
        en: "",
        ko: ""
      },
      icon: 'assets/img/icon/16.svg'
    },
    {
      name: {
        en: "Countries Served",
        ko: "서비스 제공 국가 수"
      },
      number:{
        en: "",
        ko: ""
      },
      icon: ''
    },
    {
      name: {
        en: "Languages Supported",
        ko: "지원 언어 수"
      },
      number:{
        en: "",
        ko: ""
      },
      icon: ''
    }
  ]

  export const testimonials = [
    {
      name: "Otabegi",
      comment: {
        en: `Contrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature
        from 45 BC`,
        ko: `Contrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature
        from 45 BC`
      },
      companyName: "",
      position: "Marketing Coordinator",
      avatar: "/assets"
    },
    {
      name: "",
      comment: {
        en: "",
        ko:""
      },
      companyName: "",
      position: "",
      avatar: ""
    },
    {
      name: "Otabegi",
      comment: {
        en: `Contrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature
        from 45 BC`,
        ko: `Contrary to popular belief, Lorem Ipsum is not simply random
        text. It has roots in a piece of classical Latin literature
        from 45 BC`
      },
      companyName: "",
      position: "Marketing Coordinator",
      avatar: ""
    },
    {
      name: "",
      comment: {
        en: "",
        ko:""
      },
      companyName: "",
      position: "",
      avatar: ""
    },
    
    

  ]

  export const workProcesses = [
    {
      title:{
        en: "Project Consultation",
        ko: "프로젝트 상담"
      },
      description: {
        en: "The first step to understanding your needs and goals. We conduct thorough consultations to provide the best-fit solutions for your business.",
        ko: "고객의 요구와 목표를 이해하기 위한 첫 단계입니다. 여러분의 비즈니스에 가장 적합한 솔루션을 제공하기 위해 꼼꼼한 상담을 진행합니다."
      },
      lineSrc: 'assets/img/about/29.png',
      icon: "assets/img/process/talk.png"
    },
    {
      title:{
        en: "Strategy Development",
        ko: "전략 개발"
      },
      description: {
        en: "Custom strategies are crafted through market research and analysis. Together, we draw a roadmap for the success of your business.",
        ko: "시장 조사와 분석을 통해 맞춤형 전략을 수립합니다. 여러분의 비즈니스 성공을 위한 로드맵을 함께 그려나갑니다."
      },
      lineSrc: 'assets/img/about/30.png',
      icon: "assets/img/process/planning.png"
    },
    {
      title:{
        en: "Solution Implementation",
        ko: "솔루션 실행"
      },
      description: {
        en: "Our team of experts utilizes cutting-edge technology to implement tailored solutions. Efficiency and quality are our top priorities.",
        ko: "전문가 팀이 최신 기술을 활용하여 고객 맞춤형 솔루션을 실행합니다. 효율성과 품질을 최우선으로 고려합니다."
      },
      lineSrc:  'assets/img/about/29.png',
      icon: "assets/img/process/development.png"
    },
    {
      title:{
        en: "Ongoing Support",
        ko: "지속적인 지원 "
      },
      description: {
        en: "We provide continuous support even after project completion. We assist in ensuring your business grows and evolves.",
        ko: "프로젝트 완료 후에도 지속적인 지원을 제공합니다. 고객의 비즈니스가 성장하고 발전할 수 있도록 돕습니다."
      },
      icon: "assets/img/process/support.png"
    }
  ]

  export const projects = [
    {
        id: 1,
        category:[
          {
            en: "Web Development",
            ko: "웹 개발",
            sortValue: "1"
          }
        ],
      title: {
        en: "E-commerce Website",
        ko: "전자 상거래 웹사이트"
      },
      description: {
        en: "Developed an e-commerce website using React and Node.js.",
        ko: "React와 Node.js를 사용하여 전자 상거래 웹사이트를 개발하였습니다."
      },
      details:{
          client: "",
          date:{
            from: "",
            to: ""
          },
          location: "",
          technologies:[
            {
              id: 1,
              name: "",
              icon: ""
            }
          ],
          heroImg: "/assets/",
          title:{
            en: "",
            ko: ""
          },
          description1:{
            en: ``,
            ko: ``,
          },
          description2:{
            en: ``,
            ko: ``,
          },
          links:[{id: 1, icon: ''}],
          sliderImgs: [
            {name:{
              en: 'dashboard',
              ko: 'korean dashnoard'
            },
            href: '/assets/img/gallery/1.png'
          },
          {name:{
            en: 'dashboard',
            ko: 'korean dashnoard'
          },
          href: '/assets/img/gallery/1.png'
        },
        {name:{
          en: 'dashboard',
          ko: 'korean dashnoard'
        },
        href: '/assets/img/gallery/1.png'
      },
      {name:{
        en: 'dashboard',
        ko: 'korean dashnoard'
      },
      href: '/assets/img/gallery/1.png'
    },
    {name:{
      en: 'dashboard',
      ko: 'korean dashnoard'
    },
    href: '/assets/img/gallery/1.png'
  }

        
          ]

      },
     imgSize: {
      width: '410px',
      height: '500px'
     }
    },
    {
      id: 2,
      category:[
        {
          en: "Mobile App Development",
          ko: "모바일 앱 개발",
          sortValue: "2"
        },
        {
          en: "Web Development",
          ko: "웹 개발",
          sortValue: "1"
        }
      ],
    title: {
      en: "Expense Tracker App",
      ko: "지출 추적 앱"
    },
    description: {
      en: "Built a mobile app for tracking expenses and managing budgets.",
      ko: "지출을 추적하고 예산을 관리하는 모바일 앱을 개발하였습니다."
    },
    details:{
        technologies: ["Flutter", "Firebase"]
    },
    imgSize: { 
        width: '410px',
        height: '500px'
    },
  },
   {
    id: 3,
    category:[
      {
        en: "Machine Learning",
        ko: "머신러닝",
        sortValue: "3"
      }
    ],
  title: {
    en: "Image Classification Model",
    ko: "이미지 분류 모델"
  },
  description: {
    en: "Trained a deep learning model to classify images into different categories.",
    ko: "딥러닝 모델을 훈련하여 이미지를 다른 카테고리로 분류하였습니다."
  },
  details:{
      technologies: ["TensorFlow", "Python"]
  },
 imgSize: {
  width: '410px',
  height: '235px'
 }
},
{
  id: 4,
  category:[
    {
      en: "Data Science",
      ko: "데이터 과학",
      sortValue: "4"
    }
  ],
title: {
  en: "Predictive Analytics Dashboard",
  ko: "예측 분석 대시보드"
},
description: {
  en: "Developed a dashboard for visualizing predictive analytics results.",
  ko: "예측 분석 결과를 시각화하는 대시보드를 개발하였습니다."
},
details:{
    technologies: ["Python", "Pandas", "Matplotlib"]
},
imgSize: { 
  width: '410px',
  height: '235px'
}
},
{
  id: 5,
  category:[
    {
      en: "Cybersecurity",
      ko: "사이버 보안",
      sortValue: "5"
    }
  ],
title: {
  en: "Network Penetration Testing",
  ko: "네트워크 침투 테스트"
},
description: {
  en: "Conducted penetration testing to identify vulnerabilities in network infrastructure.",
  ko: "네트워크 인프라의 취약점을 식별하기 위해 침투 테스트를 수행하였습니다."
},
details:{
    technologies: ["Kali Linux", "Wireshark"]
},
imgSize: { 
  width: '410px',
  height: '235px'
}
}
];

  export const  socialLinks = [
    {
      id: 1,
      link: "",
      icon: <FaFacebook />
    },

    {
      id: 1,
      link: "",
      icon: <FaInstagram />
    },
    {
      id: 1,
      link: "",
      icon: <FaLinkedin />
    },
   
  ];