export interface BodyData {
  upper: {
    subTitle: string,
    title: string,
    titleImage: string
  }
  body: {
    text: string,
    image: string[],
  }
  lower: {
    title: string,
    body: string,
    image: string
  }
  accessories: {
    title: string,
    items: Item[]
  }
}

interface Item {
  image: string,
  name: string,
  price: number
}