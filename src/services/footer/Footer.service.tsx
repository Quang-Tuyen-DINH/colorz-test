import { FooterData } from "../../shared/models/FooterData.model";

const footerData: FooterData = {
  logo: "../../assets/Logo Colorz.svg",
  adresses: [
    {
      city: "paris",
      location: "16 bis avenue Parmentier",
      zipcode: "75011 Paris, France"
    },
    {
      city: "lyon",
      location: "1 rue Lalande",
      zipcode: "69006 Lyon, France"
    }
  ],
  contact: {
    phone: "33 (0)1 82 83 83 60",
    email: "hello@colorz.fr"
  }
}

export const footerData$ = new Promise((resolve, reject) => setTimeout(resolve, 100, footerData));