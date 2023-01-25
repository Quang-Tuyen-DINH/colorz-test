import * as types from "./Constants";

const initialState = {
  bodyData: {
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
      body: "",
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
    case types.LOAD_BODY_DATA:
      return {
        ...state,
        bodyData: action.payload
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