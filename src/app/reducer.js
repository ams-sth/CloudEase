const initialState = {
  greenColor:'#07282c',
  darkColor:'#1f2937',
  pageColor: "white",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_DARK_COLOR":
      return {
        ...state,
        greenColor: action.payload,
      };

    case "UPDATE_GREEN_COLOR":
      return {
        ...state,
        darkColor: action.payload,
      };

    case "CHANGE_PAGE_COLOR":
      return {
        ...state,
        pageColor: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
