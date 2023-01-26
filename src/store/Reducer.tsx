import * as types from "./Constants";

const initialState = {
  landingData: {
    upper: {
      subTitle: "",
      title: "",
      titleImage: ""
    },
    body: {
      text: '',
      image: []
    },
    lower: {
      title: 'T',
      bodyMobile: "",
      bodyDesktop: "",
      image: ""
    },
    accessories: {
      title: "",
      items: []
    }
  },
  footerData: {
    logo: "",
    adresses: [],
    contact: {
      phone: "",
      email: ""
    }
  }
};

const Reducer = (state = initialState, action: any) => {
  switch(action.type) {
    case types.LOAD_LANDING_DATA:
      return {
        ...state,
        landingData: action.payload
      };
    case types.LOAD_FOOTER_DATA:
      return {
        ...state,
        footerData: action.payload
      };
    default:
      return state;
  }
}

export default Reducer;