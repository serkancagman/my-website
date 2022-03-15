import eshop from "../assets/eshop.png";
import crypto from "../assets/crypto.jpg";
import planet from "../assets/planet.jpg";
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
    projectImages: [ecommerce,eshop1,eshop2,eshop4,eshop5]
  },
  {
    id: 2,
    title: "Bitcoin Currency",
    description: "Bitcoin Currency",
    img: crypto,
    link: " ",
    tags: [reactIcon, htmlIcon, sassIcon, bootstrapIcon],
  },
  {
    id: 3,
    title: "Save The Planet",
    description: "Save The Planet",
    img: planet,
    link: " ",
    tags: [jsIcon,htmlIcon, cssIcon, bootstrapIcon],
  },
  {
    id: 4,
    title: "Clothing Store",
    description: "Clothing Store",
    img: clothing,
    link: " ",
    tags: [reactIcon, htmlIcon, cssIcon, bootstrapIcon],
  },
  {
    id: 5,
    title: "Random Things",
    description: "Random Things",
    img: random,
    link: " ",
    tags: [reactIcon, htmlIcon, cssIcon, bootstrapIcon],
  },
];
