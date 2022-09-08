// import coschedule from "../images/coschedule.png";
const Projects = [
  {
    name: "Skin-Care",
    about:
      "A Web application Clone of Skin-Care to Search for and Skin Product.",
    img: "./skincare.jpg",
    gitrepo: "https://github.com/murali0101/Skin-Store-Construct-Week-Project",
    // blog: "https://medium.com/@mohanpalleti/our-first-project-coschedule-5fa76fea2a3a",
    tech_stack: "HTML |CSS | JavaScript  ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
    ],
    project_link: "https://skinstore.netlify.app/index.html",
    project_type: "Team Project",
  },
  {
    name: "Clone of Flipkart",
    about:
      "Flipkart is the marketing industry’s leading provider of content calendar, content optimization, and marketing products. Collectively, CoSchedule products empower nearly 100,000 marketers to complete more high-quality work in less time.",
    img: "./images/flipkart.png",
    gitrepo: "https://github.com/hemant-suryawanshi/Flipkart-Clone-2.0",
    // blog: "https://medium.com/@mohanpalleti/our-first-project-coschedule-5fa76fea2a3a",
    tech_stack: "HTML | CSS | JavaScript | MongooDB ",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://img.icons8.com/color/48/000000/mongodb.png"/>`,
    ],
    project_link: "https://flipkart-clone-frontend.vercel.app/",
    project_type: "Team Project",
  },
  {
    name: "Clone of Mytheresa",
    about:
      "Mytheresa is a German e-commerce luxury fashion company, with headquarters in Munich, Germany. Founded in 2006.Mytheresa is an online shopping destination for children, men and women's luxury clothing, bags, shoes, and accessories.,",
    img: "./mytheresa.png",
    gitrepo: "https://github.com/vineethevk/Mytheresa",
//     blog: "https://medium.com/@mohanpalleti/our-group-project-connecting-frontend-and-backend-b159a686b3d0",
    tech_stack: "HTML | CSS | JAVASCRIPT | ReactJS | Redux",
    tech_stackicons: [
      `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
      `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
      `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
      `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>`,
//       `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>`,
    ],
    project_link: "https://mytheresa-vineethevk.vercel.app/",
    project_type: "Team Project",
  },
  // {
  //   name: "Trending Movies App",
  //   about:
  //     "This is a mini-app which shows trending movies and movies you search for (Implementing basic search functionality with optimizing the performance using debouncing.) built with HTML , CSS , JS .",
  //   img: "./screenshot.png",
  //   gitrepo: "https://github.com/mohan-palleti/Trending-movies",
  //   blog: "",
  //   tech_stack: "HTML | CSS | JAVASCRIPT | API's",
  //   tech_stackicons: [
  //     `<img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />`,
  //     `<img src="https://img.icons8.com/color/50/000000/css3.png"/>`,
  //     `<img src="https://img.icons8.com/color/50/000000/javascript--v2.png"/>`,
  //     `<img src="https://img.icons8.com/nolan/64/api-settings.png" width="48px"/>`,
  //   ],
  //   project_link: "https://trending-filmy.netlify.app/",
  //   project_type: "Individual Project",
  // },
];

let projects__container = document.getElementById("projects--container");

Projects.forEach((pro) => {
  let main = document.createElement("div");
  main.setAttribute("class", "portfolio-item padd-15");
  main.innerHTML = `
    <div class="portfolio-item-inner shadow-dark">
    <div class="portfolio-img">
      <img src=${pro.img} alt="photo" class="pro-i">
      <div class="project-desc"> <h1 class="project-name"><b>${
        pro.name
      }</b></h1> <br/>
      <h4 class="project-name project__about">${pro.about}</h4>
      <div class="navigate_ar">
      <button> <a href=${
        pro.project_link
      } target="_blank" class="see-project">LIVE</a></button>
      <button> <a href=${
        pro.gitrepo
      } target="_blank" class="github-repo">GitHub💻</a> </button>
      
     
      </div>
    
      <h3 class="project-name techcen"><b>Tech Stack</b></h3>
      <span >${pro.tech_stackicons[0] ? pro.tech_stackicons[0] : ""}
      ${pro.tech_stackicons[1] ? pro.tech_stackicons[1] : ""}
      ${pro.tech_stackicons[2] ? pro.tech_stackicons[2] : ""}
      ${pro.tech_stackicons[3] ? pro.tech_stackicons[3] : ""}
      ${pro.tech_stackicons[4] ? pro.tech_stackicons[4] : ""}
      </span> </div>
     
      
    </div>
  </div>
    `;
  projects__container.append(main);
});
