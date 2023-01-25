import { BodyData } from "../../shared/models/BodyData.model";

const bodyData: BodyData = {
  upper: {
    subTitle: "Du JAMAIS VU (enfin jusqu’à maintenant, du coup)",
    title: "Avec Vision.R, travaillez au bureau... comme si vous étiez encore à la maison !",
    titleImage: "../../assets/Hero 1.png"
  },
  body: {
    text: '"Vision.R with a grand “R” like in the mot “Revolution” !\nYou are afraid to feel déstabilized with the futur retour au bureau ?\nWith Vision.R, be rassuré.e.s ! Get instant, real time, high resolution, social videocall and feel comme à la maison. Bref, get ready to faire un carton !"',
    image: [
      "../../assets/Slider_B 1.png",
      "../../assets/Slider_B 1-1.png",
      "../../assets/Slider_B 2.png"
    ]
  },
  lower: {
    title: 'The pudique (or je suis en pyjama et j’assume pas) effect',
    body: "With our no camera mode, you can be wherever you want and be en pyjama in totale discretion with professionnalisme.",
    image: "../../assets/Rectangle 29.png"
  },
  accessories: {
    title: "Some indispensables accessoires to optimize your experience",
    items: [
      {
        image: "../../assets/Product_1 2.png",
        name: "The funny filter kit (D’jeuns friendly)",
        price: 199.00
      },
      {
        image: "../../assets/Product_1 1.png",
        name: "Screen camera off",
        price: 229.00
      },
      {
        image: "../../assets/Product_1 3.png",
        name: "The Charentaiz (Yeuv Friendly)",
        price: 349.95
      }
    ]
  }
}


export const bodyData$ = new Promise((resolve, reject) => setTimeout(resolve, 100, bodyData));