AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "JavaScript Algorithms and Data Structures",
    cardImage: "assets/images/education-page/fcc.png",
    moocLink: "https://www.freecodecamp.org/certification/fccb9534b8b-e9c6-4b38-83e0-22a1dbf521b2/javascript-algorithms-and-data-structures",
  },
  {
    title: "Front End Development Libraries",
    cardImage: "assets/images/education-page/fcc.png",
    moocLink: "https://www.udemy.com/course/cryptography-for-beginners/",
  },
  {
    title: "Machine Learning",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Full Stack JavaScript",
    cardImage: "assets/images/education-page/odin.jpg",
    moocLink: "https://www.theodinproject.com/paths/full-stack-javascript",
  },
  {
    title: "Introduction to CSS 3",
    cardImage: "assets/images/education-page/udacity_logo.png",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/education-page/udacity_logo.png",
    moocLink: "https://www.udacity.com/course/intro-to-javascript--ud803",
  },
  {
    title: "Bootstrap 4",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/bootstrap-4-tutorials/",
  },
  {
    title: "Web Programming with Python and JavaScript",
    cardImage: "assets/images/education-page/EdX.png",
    moocLink: "https://www.edx.org/learn/reactjs",
  },
  {
    title: "Intro to React Native",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/lecture/react-native/introduction-to-react-native-Eax0D",
  },
  {
    title: "NodeJS, Express and MongoDB",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/server-side-nodejs",
  },
  {
    title: "XML-AJAX",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udemy.com/course/xml-from-beginner-to-expert/",
  },
  {
    title: "Data Structures & Algorithms",
    cardImage: "assets/images/education-page/udacity_logo.png",
    moocLink: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline-container");
const timelinesection = [
  // {
  //   heading: "SRM University",
  //   image: "assets/images/education-page/edTimeline1.png",
  //   subheading: "Masters of Science, Computer Science & Engineering, (2021-2022)",
  //   description: "<li>Top 1% in the department</li><li>Best undergraduate Reseracher</li><li>Betsy Schumacker Woman</li><li>Athlete of the Year Award</li>",
  // },

  {
    heading: "Crio.Do",
    image: "assets/images/education-page/Crio.png",
    subheading: "Fellowship in FullStack Development, (2022-2023)",
    description: "<li>Top 5% in the department</li><li>Best academic record</li>",
  },

  {
    heading: "SRM University",
    image: "assets/images/education-page/srm.png",
    subheading: "Bachelors of Technology, Electronics and Communication, (2015-2019)",
    description: "<li>Top 5% in the department</li><li>Best academic record</li>",
  },

  {
    heading: "Kendriya Vidyalaya",
    image: "assets/images/education-page/KVS1.png",
    subheading: "High School, (2013-2015)",
    description: "<li>Top 1% in the department</li><li>School Captain</li><li>NATIONAL CHILDREN'S SCIENCE CONGRESS Winners- Gurgaon Region(2014, 2015)</li>",
  },


];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
    (output += `       
    <div class="timeline-item">
    <div class="timeline-img">
        
    </div>

    <div class="timeline-content js--fadeInLeft">
        <img src="${image}">
    <div class="timeline-content-text">
      <h2>${heading}</h2>
      <h6>${subheading}</h6>
      <p>${description}</p>
     
    </div>
    </div>
  </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);