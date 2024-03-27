// For Number Increasing Animation
const countInitialState = {
  countTo99: 0,
  countTo95: 0,
  countTo50: 0,
};
const countReducer = (state = countInitialState, action) => {
  switch (action.type) {
    case "UPDATE_COUNT_TO_99":
      return {
        ...state,
        countTo99: state.countTo99 >= 99 ? 99 : state.countTo99 + 1,
      };
    case "UPDATE_COUNT_TO_95":
      return {
        ...state,
        countTo95: state.countTo95 >= 95 ? 95 : state.countTo95 + 1,
      };
    case "UPDATE_COUNT_TO_50":
      return {
        ...state,
        countTo50: state.countTo50 >= 50 ? 50 : state.countTo50 + 1,
      };
    default:
      return state;
  }
};

// For Background of Page
const themeInitialState = {
  greenColor: "#07282c",
  darkColor: "#1f2937",
  lightColor: "white",
  pageColor: " ",
};

const themeReducer = (state = themeInitialState, action) => {
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
    case "UPDATE_LIGHT_COLOR":
      return {
        ...state,
        lightColor: action.payload,
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

//For Changing Image State
const imageInitialState = {
  currentImageIndex: 0,
};

const imageReducer = (state = imageInitialState, action) => {
  switch (action.type) {
    case "CHANGE_IMAGE":
      return {
        ...state,
        currentImageIndex: action.payload,
      };
    default:
      return state;
  }
};

const reducer = (state = {}, action) => {
  return {
    count: countReducer(state.count, action),
    theme: themeReducer(state.theme, action),
    image: imageReducer(state.image, action),
  };
};

export default reducer;
