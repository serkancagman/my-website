import eshop from "../assets/eshop.png";
import crypto from "../assets/crypto.jpg";
import admin from "../assets/admin.jpg";
import clothing from "../assets/clothing.jpg";
import random from "../assets/random.jpg";
import htmlIcon from "../assets/htmlicon.png";
import cssIcon from "../assets/cssicon.png";
import sassIcon from "../assets/sassicon.png";
import reactIcon from "../assets/reacticon.png";
import jsIcon from "../assets/jsicon.png";
import nodeIcon from "../assets/nodeicon.png";
import mongoIcon from "../assets/mongoicon.png";
import bootstrapIcon from "../assets/bootstrapicon.png";
import ecommerce from "../assets/ecommerce.png";
import eshop1 from "../assets/project1A.png";
import eshop2 from "../assets/project1B.png";
import eshop3 from "../assets/project1C.png";
import eshop4 from "../assets/project1D.png";
import eshop5 from "../assets/project1E.jpg";
// CRYPTO ASSETS
import crypto1 from "../assets/bitcoinAssets/mockup.png";
import crypto2 from "../assets/bitcoinAssets/pic1.jpg";
import crypto3 from "../assets/bitcoinAssets/pic2.jpg";
import crypto4 from "../assets/bitcoinAssets/pic3.jpg";
import crypto5 from "../assets/bitcoinAssets/pic4.jpg";
// ADMIN PAGE ASSETS
import admin1 from "../assets/adminAssets/mockup.png";
import admin2 from "../assets/adminAssets/pic1.jpg";
import admin3 from "../assets/adminAssets/pic2.png";
import admin4 from "../assets/adminAssets/pic3.png";
import admin5 from "../assets/adminAssets/pic4.png";
// RANDOM ASSETS
import random1 from "../assets/randomAssets/mockup.png";
import random2 from "../assets/randomAssets/pic1.jpg";
import random3 from "../assets/randomAssets/pic2.jpg";
import random4 from "../assets/randomAssets/pic3.jpg";
import random5 from "../assets/randomAssets/pic4.jpg";
// CLOTHING ASSETS
import clothing1 from "../assets/clothingAssets/mockup.png";
import clothing2 from "../assets/clothingAssets/pic1.jpg";
import clothing3 from "../assets/clothingAssets/pic2.png";

export const bannerLetters = [
  "H",
  "i",
  ",",
  "br",
  "I",
  "'",
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
  "a",
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
    id: 1,
    title: "E-commerce",
    description: "E-commerce website",
    img: eshop,
    link: " ",
    tags: [reactIcon, htmlIcon, sassIcon, bootstrapIcon, nodeIcon, mongoIcon],
    projectImages: [ecommerce, eshop1, eshop2, eshop4, eshop5],
  },
  {
    id: 2,
    title: "Bitcoin Currency",
    description: "Bitcoin Currency",
    img: crypto,
    link: " ",
    tags: [reactIcon, htmlIcon, sassIcon, bootstrapIcon],
    projectImages: [crypto1, crypto2, crypto3, crypto4, crypto5],
  },
  {
    id: 3,
    title: "Admin Dashboard Panel",
    description: "Admin Dashboard Panel",
    img: admin,
    link: " ",
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
];
