AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "MeStore- React, MUI social media UI",
    cardImage: "assets/images/project-page/mestore.jpg",
    description:
      "",
    tagimg: "",
    Previewlink: "",
    Githublink: "https://github.com/tabassum2507/MeStore-ecommerce",
  },
  {
    title: "Blog- NextJS, Tailwind",
    cardImage: "assets/images/project-page/blog.jpg",
    description:
      "",
    tagimg: "",
    Previewlink: "",
    Githublink: "https://github.com/tabassum2507/blog-nextjs",
  },
  
  
  {
    title: "CHIM CHIM- React, MUI social media UI",
    cardImage: "assets/images/project-page/chim.jpg",
    description:
      "",
    tagimg: "",
    Previewlink: "https://csb-ypg4zn-1w1zi0rpn-tabassum2507.vercel.app/",
    Githublink: "https://github.com/tabassum2507/MUI-react-page",
  },
  {
    title: "ColorPen- ReactJS",
    cardImage: "assets/images/project-page/colorpen.jpg",
    description:
      "",
    tagimg: "",
    Previewlink: "https://color-generator-sage.vercel.app/",
    Githublink: "https://github.com/tabassum2507/Color-Generator",
  },
  {
    title: "CocktailDB- React",
    cardImage: "assets/images/project-page/Cocktail.jpg",
    description:
      "",
    tagimg: "",
    Previewlink: "",
    Githublink: "https://github.com/tabassum2507/cocktail-react-project",
  },
  
  
  {
    title: "Airbnb-clone",
    cardImage: "assets/images/project-page/airbnb.jpg",
    description: ".",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://airbnb-clone11.vercel.app/",
    Githublink: "https://github.com/tabassum2507/airbnb-clone",
  },
  
  {
    title: "Netflix-clone",
    cardImage: "assets/images/project-page/netflix.jpg",
    description: "Poker game built using typescript.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "https://netflix-clone-rho-opal.vercel.app/",
    Githublink: "https://github.com/tabassum2507/Netflix-clone",
  },
  
  {
    title: "Expense-Tracker",
    cardImage: "assets/images/project-page/money.jpg",
    description: "Built using Tensorflow.",
    tagimg: "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
    Previewlink: "https://expense-tracker-rosy-iota.vercel.app/",
    Githublink: "https://github.com/tabassum2507/React-Projects/tree/main/expensetracker",
  },
  {
    title: "Crypto-tracker",
    cardImage: "assets/images/project-page/crypto.png",
    description: "",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://crypto-tracker-plum.vercel.app/",
    Githublink: "https://github.com/tabassum2507/crypto-tracker",
  },
  {
    title: "Recipe Ingredient- Meal",
    cardImage: "assets/images/project-page/recipe.jpg",
    description: "Recipe Ingredient Parser built using JavaScript.",
    tagimg: "C",
    Previewlink: "https://meal-delta.vercel.app/",
    Githublink: "https://github.com/tabassum2507/Meal",
  },
  {
    title: "Mochi Coffee Shope ",
    cardImage: "assets/images/project-page/mochi.jpg",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://mochi-coffee-shop-landing-page11-2o1kmasz2-tabassum2507.vercel.app/",
    Githublink: "https://github.com/tabassum2507/mochi-coffee-shop-landing-page",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tags, Previewlink, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}