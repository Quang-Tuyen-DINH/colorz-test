export interface FooterData {
  logo: string,
  adresses: adress[],
  contact: {
    phone: string,
    email: string
  }
}

interface adress {
  city: string,
  location: string,
  zipcode: string
}