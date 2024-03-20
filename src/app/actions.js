export const updateGreenColor = (color) => {
  return {
    type: "UPDATE_GREEN_COLOR",
    payload: color,
  };
};
export const updateDarkColor = (color) => {
  return {
    type: "UPDATE_DARK_COLOR",
    payload: color,
  };
};

export const changePageColor = (color) => {
  return {
    type: "CHANGE_PAGE_COLOR",
    payload: color,
  };
};
