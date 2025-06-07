const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Services",
    link: "#skills",
  },
  {
    name: "Mentors",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 1, suffix: "+", label: "Schools in partnership" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 200, suffix: "+", label: "Learning Students" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "We prioritize excellence in every aspect, ensuring our solutions meet the highest standards.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Our team ensures seamless collaboration through timely updates and transparent communication.",
  },
  {
    imgPath: "/images/time.png",
    title: "Delivery Results",
    desc: "We respect deadlines and consistently deliver results within the agreed timeline.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Web Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "c Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];
const expCards = [
  {
    review:
      "Our robotics module is designed to spark curiosity and innovation in young minds. Schools partnering with us gain access to modern tools, project-based kits, and trained instructors.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo3.png",
    title: "Robotics Program Lead",
    responsibilities: [
      "Deliver hands-on robotics training from Class 3 to Class 12 with age-appropriate modules.",
      "Deploy hardware toolkits and structured learning paths in partner schools.",
      "Enable students to build real-world robotics projects using sensors, motors, and microcontrollers.",
    ],
  },
  {
    review:
      "Our AI module is crafted to introduce students to the future of technology. With interactive lessons and real-world applications, we aim to make AI accessible and fun.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo1.png",
    title: "Artificial Intelligence Curriculum Designer",
    responsibilities: [
      "Create beginner-to-advanced AI content tailored for school students.",
      "Integrate AI projects like image recognition, chatbot building, and ethical AI discussions.",
      "Offer continuous teacher support and live sessions for effective delivery.",
    ],
  },
  {
    review:
      "Our coding program focuses on Python — the most versatile and beginner-friendly language. With a mix of logic building, app development, and games, we prepare students for tomorrow.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo2.png",
    title: "Python Programming Coach",
    responsibilities: [
      "Teach Python basics to advanced through gamified learning and real applications.",
      "Guide students in building simple apps, games, and automation scripts.",
      "Offer both physical and digital resources for practice, including access to online IDEs.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "VedaXBot exceeded expectations by transforming our vision into a seamless digital platform. Their ability to understand complex workflows and implement them into intuitive systems was exactly what our organization needed. Highly recommended.",
    imgPath: "/images/client1.png", // 35 words
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Our experience with VedaXBot was outstanding. They modernized our digital ecosystem, delivering a platform that’s user-friendly and robust. Their focus on precision, collaboration, and long-term maintainability makes them an ideal tech partner. Fantastic job.",
    imgPath: "/images/client3.png", // 44 words
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "From start to finish, VedaXBot showed unmatched professionalism. The team took our concept and elevated it into a high-performing solution. Communication was smooth, delivery was on time, and every feature was crafted with care. Incredible service. Definitely recommend.",
    imgPath: "/images/client2.png", // 52 words
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "VedaXBot helped revamp our online system with a sleek interface and optimized backend. It’s intuitive, modern, and fast. They delivered exactly what we asked for with efficiency and clarity. Great results overall.",
    imgPath: "/images/client5.png", // 27 words
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "The VedaXBot team delivered a smart and scalable solution for our platform. Their deep expertise in AI and automation directly impacted our growth and customer satisfaction. We couldn’t be more impressed. Exceptional work!",
    imgPath: "/images/client4.png", // 36 words
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Choosing VedaXBot was the best decision we made. Their ability to bridge frontend creativity with backend power is remarkable. We received a polished product with strong performance and smooth UX. Outstanding execution!",
    imgPath: "/images/client6.png", // 31 words
  },
];


const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};