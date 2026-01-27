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
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Knowledge",
    link: "#knowledge",
  },

  {
    name: "About Me",
    link: "#aboutme",
  }

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

  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 4, suffix: "", label: "Certificate" },
  { value: 10, suffix: "+", label: "Completed Personal Projects" },
  { value: 2, suffix: "", label: "Completed Professional Projects" },

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
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
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
    name: "React Developer",
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
    name: "Backend Developer",
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
    name: "Java Developer",
    modelPath: "/models/java.glb",
    scale: 1,
    rotation: [0, -Math.PI / 4, 0],
  },


];

const expCards = [
  {
    review: "Elroy is a reliable and professional team player who consistently delivers high-quality work without any problems. His fair judgment and natural leadership skills make him an excellent role model for others.",
    imgPath: "/images/uofm.png",
    logoPath: "/images/uofm.png",
    title: "Executive Secretary",
    company: "University Of Manitoba Volleyball Club",
    date: "Sep 2022 - Present",
    responsibilities: [
      "Led and organized sessions for 30+ club members, ensuring smooth operations and structured gameplay.",
      "Managed logistics, scheduling, and equipment setup for weekly matches and tournaments.",
      "Oversaw club finances, including budget tracking, membership fees, and expense allocations.",
      "Fostered an inclusive and engaging environment to promote teamwork and sportsmanship.",
      "Collaborated with university staff and student leaders to coordinate events and facility bookings.",
    ],
  },
  {
    review: "Having Elroy back, even for a short time, was a real pleasure—we just wish he could have stayed longer! Wishing him all the best in whatever he pursues next; he’s a truly smart, dedicated, and hardworking employee who leaves a lasting positive impact.",
    imgPath: "/images/CelsunLogo.png",
    logoPath: "/images/CelsunLogo.png",
    title: "DevOps/Security Analyst",
    company: "Celsun Ecoenergy and Infratech Holdings Private Ltd",
    date: "January 2021 - September 2021",
    responsibilities: [
      "Designed and developed a custom inventory database to track part numbers, \n" +
      "location, quantities and purchase dates. ",
      "Managed all IT-related tasks within the company, including software and \n" +
      "hardware updates, monitoring network activity, maintaining device security and \n" +
      "providing technical support and training to staff. ",
      "Assisted in building control panels for heating systems, including drum heaters \n" +
      "and heating panels. ",
      "Installed electrical components such as temperature sensor and bulbs according \n" +
      "to Circuit drawing designed by the department head. ",
      "Collaborated with a team to design and develop the company website, \n" +
      "contributing to layout, functionality and content ideas. \n",
      "Provided customer service support by handling inquiries and relaying customer \n" +
      "needs and feedback to management",
    ],
  },
  {
    review: "No Personal Review",
    imgPath: "/images/CTLogo.png",
    logoPath: "/images/CTLogo.png",
    title: "Auto Parts Sales Representative ",
    company:"Canadian Tire Corporation",
    date: "May 2019 - October 2020",
    responsibilities: [
      "Processed customer transactions and provided efficient checkout service.",
      "Assisted customers in selecting automotive parts and accessories. ",
      "Maintained clean and organized sales floor and inventory. ",
      "Handled product returns and resolved customer inquiries.",
    ],
  },
  {
    review: "Elroy is a remarkably fast learner who masters new tasks quickly and consistently delivers quality work on time. After just a few repetitions, he takes full ownership of projects, demonstrating both initiative and reliability.",
    imgPath: "/images/CelsunLogo.png",
    logoPath: "/images/CelsunLogo.png",
    title: "IT / Technical Support Engineer",
    company: "Celsun Ecoenergy and Infratech Holdings Private Ltd",
    date: "May 2018 - September 2018",
    responsibilities: [
      "Learned to read and interpret electrical circuit diagrams for various control \n" +
      "panels. ",
      "Assisted in building control panels for heating systems, including drum \n" +
      "heaters and heating panels. \n",
      "Installed electrical components such as temperature sensor and bulbs \n" +
      "according to Circuit drawing designed by the department head. \n",
      "Operated the company truck to deliver products such as control panels, \n" +
      "drum heaters and heating jackets to clients. \n",
      "Assisted in inventory management and ensured timely dispatch of orders. \n",
      "Handled client inquiries via phone, email, and in-person, providing detailed \n" +
      "technical and commercial information about products like control panels, \n" +
      "drum heaters, and heating jackets. ",
      "Assisted in sales operation by processing orders, explaining product \n" +
      "specifications, and ensuring customer requirements.",
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
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
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
