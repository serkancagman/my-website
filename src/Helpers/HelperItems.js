import htmlIcon from "../assets/Technologies/htmlicon.png";
import cssIcon from "../assets/Technologies/cssicon.png";
import sassIcon from "../assets/Technologies/sassicon.png";
import reactIcon from "../assets/Technologies/reacticon.png";
import nodeIcon from "../assets/Technologies/nodeicon.png";
import mongoIcon from "../assets/Technologies/mongoicon.png";
import bootstrapIcon from "../assets/Technologies/bootstrapicon.png";
 // E COMMERCE
import eshop from "../assets/commerceAssets/eshop.png";
import ecommerce from "../assets/commerceAssets/mockup.png";
import eshop1 from "../assets/commerceAssets/project1A.png";
import eshop2 from "../assets/commerceAssets/project1B.png";
import eshop4 from "../assets/commerceAssets/project1D.png";
import eshop5 from "../assets/commerceAssets/project1E.jpg";
// CRYPTO ASSETS
import crypto from "../assets/bitcoinAssets/crypto.jpg";
import crypto1 from "../assets/bitcoinAssets/mockup.png";
import crypto2 from "../assets/bitcoinAssets/pic1.jpg";
import crypto3 from "../assets/bitcoinAssets/pic2.jpg";
import crypto4 from "../assets/bitcoinAssets/pic3.jpg";
import crypto5 from "../assets/bitcoinAssets/pic4.jpg";
// ADMIN PAGE ASSETS
import admin from "../assets/adminAssets/admin.jpg";
import admin1 from "../assets/adminAssets/mockup.png";
import admin2 from "../assets/adminAssets/pic1.jpg";
import admin3 from "../assets/adminAssets/pic2.png";
import admin4 from "../assets/adminAssets/pic3.png";
import admin5 from "../assets/adminAssets/pic4.png";
// RANDOM ASSETS
import random from "../assets/randomAssets/random.jpg";
import random1 from "../assets/randomAssets/mockup.png";
import random2 from "../assets/randomAssets/pic1.jpg";
import random3 from "../assets/randomAssets/pic2.jpg";
import random4 from "../assets/randomAssets/pic3.jpg";
import random5 from "../assets/randomAssets/pic4.jpg";
// CLOTHING ASSETS
import clothing from "../assets/clothingAssets/clothing.jpg";
import clothing1 from "../assets/clothingAssets/mockup.png";
import clothing2 from "../assets/clothingAssets/pic1.jpg";
import clothing3 from "../assets/clothingAssets/pic2.png";
// PIZZA ASSETS
import pizzaStop from "../assets/PizzaStopAssets/pizzastop.jpg";
import pizza1 from "../assets/PizzaStopAssets/mockup.png";
import pizza2 from "../assets/PizzaStopAssets/pic1.jpg";
import pizza3 from "../assets/PizzaStopAssets/pic2.jpg";
import pizza4 from "../assets/PizzaStopAssets/pic3.jpg";
// CRYPTOZEN ASSETS
import cryptozen from "../assets/cryptozenAssets/cryptozen.jpg";
import cryptozen1 from "../assets/cryptozenAssets/mockup.png";
import cryptozen2 from "../assets/cryptozenAssets/pic1.png";
import cryptozen3 from "../assets/cryptozenAssets/pic2.png";
import cryptozen4 from "../assets/cryptozenAssets/pic3.png";

// ESTATE ASSETS
import estate from "../assets/estateAssets/estate.jpg";
import estate1 from "../assets/estateAssets/mockup.png";
import estate2 from "../assets/estateAssets/pic1.png";
import estate3 from "../assets/estateAssets/pic2.png";
import estate4 from "../assets/estateAssets/pic3.png";
import estate5 from "../assets/estateAssets/pic4.png";
import estate6 from "../assets/estateAssets/pic5.png";
export const bannerLetters = [
  "H",
  "i",
  ",",
  "br",
  "I",
  " ",
  "a",
  "m",
  " ",
  "S",
  "e",
  "r",
  "k",
  "a",
  "n",
  ",",
  "br",
  "an",
  " ",
  "I",
  "s",
  "t",
  "a",
  "n",
  "b",
  "u",
  "l",
  " ",
  "b",
  "a",
  "s",
  "e",
  "d",
  "br",
  "F",
  "r",
  "o",
  "n",
  "t",
  "e",
  "n",
  "d",
  " ",
  "D",
  "e",
  "v",
  "e",
  "l",
  "o",
  "p",
  "e",
  "r",
];

// TAGS
export const bodyTags = {
  body: `<body>`,
  bodyClose: `</body>`,
  paragraph: `<p>`,
  paragraphClose: `</p>`,
  form: `<form>`,
  formClose: `</form>`,
  h1: `<h1>`,
  h1Close: `</h1>`,
  article: `<article>`,
  articleClose: `</article>`,
};

export const projects = [
  {
    id: 7,
    title: "Cryptozen",
    description: "Cryptozen is a web application that allows users to track their crypto currencies.",
    img: cryptozen,
    link: "https://cryptozen.netlify.app/",
    github: "https://github.com/serkancagman/cryptozen",
    tags:[reactIcon, bootstrapIcon,sassIcon],
    projectImages: [  cryptozen1, cryptozen2, cryptozen3, cryptozen4 ],
  },
  {
    id: 8,
    title: "Estate NextJS",
    description: "Estate NextJS is a web application that allows users to find properties.",
    img: estate,
    link: "https://estate-nextjs.netlify.app/",
    github: "https://github.com/serkancagman/estate-app",
    tags:[reactIcon, bootstrapIcon,sassIcon,nodeIcon,mongoIcon],
    projectImages: [ estate1, estate2, estate3, estate4, estate5, estate6 ],
  },
  {
    id: 1,
    title: "E-commerce",
    description: "E-commerce website",
    img: eshop,
    link: " ",
    github: "https://github.com/serkancagman/E-Commerce-Project",
    tags: [reactIcon, htmlIcon, sassIcon, bootstrapIcon, nodeIcon, mongoIcon],
    projectImages: [ecommerce, eshop1, eshop2, eshop4, eshop5],
  },
  {
    id: 2,
    title: "Pizza Stop",
    description: "Pizza Stop",
    img: pizzaStop,
    link: " ",
    github: "https://github.com/serkancagman/Best-Pizza-React",
    tags: [reactIcon, htmlIcon, sassIcon, bootstrapIcon, nodeIcon, mongoIcon],
    projectImages: [pizza1, pizza2, pizza3, pizza4],
  },
  
  {
    id: 3,
    title: "Admin Dashboard Panel",
    description: "Admin Dashboard Panel",
    img: admin,
    link: " ",
    github: "https://github.com/serkancagman/E-Commerce-Project",
    tags: [reactIcon, htmlIcon, sassIcon, bootstrapIcon],
    projectImages: [admin1, admin2, admin3, admin4, admin5],
  },
  {
    id: 4,
    title: "Clothing Store",
    description: "Clothing Store",
    img: clothing,
    link: " ",
    tags: [reactIcon, htmlIcon, cssIcon, bootstrapIcon],
    projectImages: [clothing1, clothing2, clothing3],
  },
  {
    id: 5,
    title: "Random Things",
    description: "Random Things",
    img: random,
    link: " ",
    tags: [reactIcon, htmlIcon, cssIcon, bootstrapIcon],
    projectImages: [random1, random2, random3, random4, random5],
  },
  {
    id: 6,
    title: "Bitcoin Currency",
    description: "Bitcoin Currency",
    img: crypto,
    link: " ",
    github:"https://github.com/serkancagman/Bitcoin-currency-front-end-project-react",
    tags: [reactIcon, htmlIcon, sassIcon, bootstrapIcon],
    projectImages: [crypto1, crypto2, crypto3, crypto4, crypto5],
  },
];
