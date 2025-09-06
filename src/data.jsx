import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { profile2, profile3,profile4,profile5,
         member1, member2, member3, member4,
        blog_1,blog_2,blog_3} from "./assets";

// Service Images - Importing specific service images
import civilImage from "./components/Services/Civil.jpeg";
import mechanicalImage from "./components/Services/Mechanical.jpg";
import sanitaryImage from "./components/Services/sanitary and plumbing.jpg";
import interiorImage from "./components/Services/interior_design.jpg";
import electricalImage from "./components/Services/Electrical_works.jpg";
import roadsImage from "./components/Services/RoadsandBridges.jpeg";
import pavingImage from "./components/Services/Paving Area.jpg";
import compoundImage from "./components/Services/Compound-Wall.jpeg";
import sewageImage from "./components/Services/sewage treatement plant.jpeg";
import reservoirImage from "./components/Services/Underground reservior.jpeg";
import fireImage from "./components/Services/Fire Safety System.jpeg";
import borewellImage from "./components/Services/borewell service.jpg";
import rechargeImage from "./components/Services/Recahrge Pit.jpg";
import swimmingImage from "./components/Services/Swimming Pool.jpeg";
import waterTankImage from "./components/Services/Water Tank.jpeg";
import waterTreatmentImage from "./components/Services/Water Treatement.jpg";
import dismantlingImage from "./components/Services/Building-Dismental.jpeg";
import drainageImage from "./components/Services/Drainage System.jpg";
import anchoringImage from "./components/Services/Anchoring and core cutting.jpg";
import septicImage from "./components/Services/septic tank.jpg";
import soakImage from "./components/Services/Soak-Pit.jpeg";

// Project Images - Importing building images for projects
import building_5 from "./assets/building-5.jpeg";
import building_6 from "./assets/building-6.jpeg";
import building_7 from "./assets/building-7.jpeg";
import building_8 from "./assets/building-8.jpeg";
import building_9 from "./assets/building-9.jpeg";
import building_10 from "./assets/building-10.jpeg";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Team",id:'team'},
    {name:"Project",id:'project'},
    {name:"Review",id:'review'},
    //{name:"Blog",id:'blog'},
];

export const services = [
  {
    name: "Civil Construction",
    icon: <SiBlueprint/>,
    description: `Comprehensive civil construction services including structural design, foundation work, 
    reinforced concrete construction, masonry, and finishing works. We ensure quality construction 
    with proper engineering standards and safety protocols.`,
    image: civilImage,
  },
  {
    name: "Mechanical Works",
    icon: <IoConstructSharp/>,
    description: `Complete mechanical systems installation including HVAC, ventilation, 
    mechanical equipment, and industrial machinery setup. We handle all mechanical aspects 
    of construction projects with precision and expertise.`,
    image: mechanicalImage,
  },
  {
    name: "Sanitary & Plumbing",
    icon: <AiOutlineFileProtect/>,
    description: `Professional sanitary and plumbing services covering water supply systems, 
    drainage networks, sanitary fixtures installation, and maintenance. We ensure proper 
    water flow and waste management systems.`,
    image: sanitaryImage,
  },
  {
    name: "Interior Design",
    icon: <FaDrawPolygon/>,
    description: `Creative interior design and finishing services including space planning, 
    material selection, custom furniture, lighting design, and aesthetic enhancements 
    to create beautiful and functional living spaces.`,
    image: interiorImage,
  },
  {
    name: "Electrical Works",
    icon: <SiHomeassistantcommunitystore/>,
    description: `Complete electrical installation and maintenance services including wiring, 
    lighting systems, power distribution, electrical panels, and safety systems. 
    We ensure reliable and safe electrical infrastructure.`,
    image: electricalImage,
  },
  {
    name: "Road & Bridges",
    icon: <GrUserManager/>,
    description: `Specialized road construction and bridge building services including 
    highway construction, bridge design and construction, road maintenance, and 
    infrastructure development for transportation networks.`,
    image: roadsImage,
  },
  {
    name: "Paving Area",
    icon: <SiBlueprint/>,
    description: `Professional paving services for driveways, parking areas, walkways, 
    and outdoor spaces. We use quality materials and proper techniques to create 
    durable and attractive paved surfaces.`,
    image: pavingImage,
  },
  {
    name: "Compound Wall",
    icon: <IoConstructSharp/>,
    description: `Custom compound wall construction including boundary walls, security fencing, 
    decorative walls, and perimeter protection. We build strong and aesthetically 
    pleasing compound walls for property security.`,
    image: compoundImage,
  },
  {
    name: "Sewage Treatment Plant",
    icon: <AiOutlineFileProtect/>,
    description: `Complete sewage treatment plant design, construction, and maintenance. 
    We provide sustainable wastewater treatment solutions including biological treatment, 
    filtration, and effluent management systems.`,
    image: sewageImage,
  },
  {
    name: "Underground Reservoir",
    icon: <FaDrawPolygon/>,
    description: `Underground water storage reservoir construction including design, 
    excavation, waterproofing, and structural reinforcement. We create reliable 
    water storage solutions for commercial and residential projects.`,
    image: reservoirImage,
  },
  {
    name: "Fire Safety Systems",
    icon: <SiHomeassistantcommunitystore/>,
    description: `Comprehensive fire safety system installation including fire alarms, 
    sprinkler systems, fire extinguishers, emergency exits, and fire suppression 
    equipment to ensure building safety compliance.`,
    image: fireImage,
  },
  {
    name: "Borewell Services",
    icon: <GrUserManager/>,
    description: `Professional borewell drilling and maintenance services including 
    site survey, drilling, pump installation, water quality testing, and ongoing 
    maintenance for reliable water supply solutions.`,
    image: borewellImage,
  },
  {
    name: "Recharge Pit",
    icon: <SiBlueprint/>,
    description: `Groundwater recharge pit construction for rainwater harvesting and 
    water conservation. We design and build effective recharge systems to 
    replenish groundwater levels and promote sustainability.`,
    image: rechargeImage,
  },
  {
    name: "Swimming Pool",
    icon: <IoConstructSharp/>,
    description: `Custom swimming pool design and construction including residential pools, 
    commercial pools, and specialized aquatic facilities. We handle complete pool 
    construction with filtration and maintenance systems.`,
    image: swimmingImage,
  },
  {
    name: "Water Tank Construction",
    icon: <AiOutlineFileProtect/>,
    description: `Water storage tank construction including overhead tanks, ground tanks, 
    and specialized storage solutions. We build durable tanks with proper 
    waterproofing and structural integrity.`,
    image: waterTankImage,
  },
  {
    name: "Water Treatment",
    icon: <FaDrawPolygon/>,
    description: `Complete water treatment system installation including filtration, 
    purification, softening, and disinfection systems. We provide clean water 
    solutions for residential and commercial applications.`,
    image: waterTreatmentImage,
  },
  {
    name: "Building Dismantling",
    icon: <SiHomeassistantcommunitystore/>,
    description: `Professional building demolition and dismantling services including 
    structural demolition, debris removal, site clearing, and safety management. 
    We ensure safe and efficient demolition processes.`,
    image: dismantlingImage,
  },
  {
    name: "Drainage Systems",
    icon: <GrUserManager/>,
    description: `Comprehensive drainage system design and construction including storm 
    water drainage, surface drainage, and underground drainage networks. 
    We ensure proper water flow and prevent flooding issues.`,
    image: drainageImage,
  },
  {
    name: "Anchoring & Core Cutting",
    icon: <SiBlueprint/>,
    description: `Specialized anchoring and core cutting services for structural 
    modifications, equipment installation, and renovation projects. We use 
    advanced techniques for precise cutting and secure anchoring.`,
    image: anchoringImage,
  },
  {
    name: "Septic Tank",
    icon: <IoConstructSharp/>,
    description: `Septic tank design, construction, and maintenance services including 
    residential and commercial septic systems. We provide efficient waste 
    treatment solutions for properties without municipal sewage connections.`,
    image: septicImage,
  },
  {
    name: "Soak Pit",
    icon: <AiOutlineFileProtect/>,
    description: `Soak pit construction for wastewater disposal and groundwater recharge. 
    We design and build effective soak pits that safely dispose of grey water 
    while promoting environmental sustainability.`,
    image: soakImage,
  },
]

export const teams = [
  {
    name:"Oluoma James",
    title:"Technician",
    profile:member1,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Mary Brown",
    title:"Technician",
    profile:member2,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Lawrence Onu",
    title:"Technician",
    profile:member3,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
  {
    name:"Joy Eze",
    title:"Technician",
    profile:member4,
    social:[
      {name:"Facebook",icon:<CiFacebook/>,url:"http://facebook.com"},
      {name:"LinkedIn",icon:<CiLinkedin/>,url:"http://linkedin.com"},
      {name:"Youtube",icon:<FaYoutube/>,url:"https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1"},
      {name:"Instagram",icon:<FaInstagram/>,url:"http://instagram.com"},
    ]
  },
]

export const projects = [
  {
    title:"Residential Building, Patrapada",
    image:building_5,
    description:`A comprehensive residential development involving the construction of a new 
        housing community from initial site clearing and preparation to final home construction and landscaping`,
  },
  {
    title:"Residential Building, DaruThenga",
    image:building_6,
    description:`The construction of a multi-story office building including all 
       architectural and structural design, coordination of specialized trades for 
       HVAC and electrical systems, and complete project oversight.`,
  },
  {
    title:"Utkal Mahindra Automobile, Manguli",
    image:building_7,
    description:`Transforming an outdated retail store into a modern commercial space, 
    involving interior demolition, new layout design, installation of new fixtures, 
    and updating utilities.`,
  },
  {
    title:"Residential Building, Adarsh Vihar",
    image:building_8,
    description:`Building a large-scale industrial warehouse, including land clearing,
     foundation work, steel structure erection, and complete construction management 
     from start to finish.`,
  },
  // Future projects - uncomment when ready to add
  // {
  //   title:"Historic Building Restoration",
  //   image:building_9,
  //   description:`Restoring and renovating a historic building to preserve its architectural integrity while updating it to meet modern standards, involving meticulous 
  //   craftsmanship and specialized restoration techniques.`,
  // },
  // {
  //   title:"Educational Facility Expansion",
  //   image:building_10,
  //   description:`Expanding an existing school with new classrooms and facilities, encompassing all phases from initial design and site preparation to construction and 
  //   final project management to ensure timely completion.`,
  // },
];


export const review = [
  {
    //image:profile2,
    name:'S. Swain, Bhubaneswar',
    revieww:`SRP Construction built our dream home exactly the way we imagined. The team was professional,
     transparent, and delivered on time. Their attention to detail and quality of work truly stand out. 
     Highly recommended!"`

  },
  {
    //image:profile3,
    name:'Chandrasekhar Giri, Cuttack',
    revieww:` "We hired SRP Construction for our office building project.
     From planning to execution, everything was smooth and hassle-free.
      The engineers and workers were very skilled, and the final result exceeded our expectations."
      
`
  },
  {
    //image:profile4,
    name:'Sanjay Acharya, Bhuabaneswar',
    revieww:`"I contacted SRP Construction for my house renovation. 
    They transformed my old house into a modern space while staying within budget. 
    Very reliable and trustworthy company."
`
  },
  {
    //image:profile5,
    name:'Makardhwaj Satpathy, Bhubaneswar',
    revieww:` "One of the best construction companies I’ve worked with.
     Honest pricing, on-time delivery, and top-notch quality.
      Will definitely choose SRP Construction again for future projects."
`
  }

];







// export const blogs = [
//   {
//       title:"Sustainable Construction: Building for the Future",
//       image:blog_1,
//       category:"Building",
//       content:`
//         As the construction industry continues to evolve, the focus on sustainability 
//         has never been more critical. Sustainable construction is not just a trend; 
//         it's a necessity for our planet's future. In this blog post, we'll explore 
//         the principles of sustainable construction, the benefits it offers, and how 
//         our company is leading the way in eco-friendly building practices.
//       `,
//       date:new Date("January 10, 2024"),
//       likeCount:34,
//       commentCount:4,
//       tags:["Edu4CommDev","CommGrowthEdu","EducateCommunities"],
//       poster:{
//           name:"Johnson",
//       },
//   },
//   {
//       title:"The Importance of Quality Craftsmanship in Construction",
//       image:blog_2,
//       category:"Construction",
//       content:`
//         Quality craftsmanship is the cornerstone of any successful construction project.
//          It ensures that buildings are not only aesthetically pleasing but also durable 
//          and safe. In this blog post, we'll delve into why quality craftsmanship matters 
//          and how our company upholds the highest standards in every project we undertake.
//       `,
//       date:new Date("December 15, 2023"),
//       likeCount:201,
//       commentCount:123,
//       tags:["Skills4Growth","EconSkillImpact","GrowWithSkills"],
//       poster:{
//           name:"Bissi",
//       },
//   },
//   {
//       title:"Innovative Technologies Transforming the Construction Industry",
//       image:blog_3,
//       category:"Innovations",
//       content:`
//       The construction industry is undergoing a revolution, thanks to the advent of 
//       innovative technologies. These advancements are making construction projects 
//       more efficient, cost-effective, and sustainable. In this blog post, we'll 
//       explore some of the most exciting technologies transforming the way we build 
//       and how our company is leveraging them to deliver superior results.
//       `,
//       date:new Date("July 20, 2023"),
//       likeCount:198,
//       commentCount:121,
//       tags:["CommEdu","CommunityEngagement","EduCommunity"],
//       poster:{
//           name:"Abisola",
//       },
//   },
// ];


export const contacts = [
  {
    name:"Email",
    value:"srpconstruction2022@gmail.com",
    value2:"soumyaranjanparida12345@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+917008560310",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"Sailashree Vihar, Bhubaneswar, Odisha",
    icon:<IoLocationOutline/>,
  },
]


export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          {name:"Team",id:'team'},
          {name:"Project",id:'project'},
          {name:"Review",id:'review'},
          //{name:"Blog",id:'blog'},
        ]
      },
]


