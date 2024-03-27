//For Themes
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
export const updateLightColor = (color) => {
  return {
    type: "UPDATE_LIGHT_COLOR",
    payload: color,
  };
};

export const changePageColor = (color) => {
  return {
    type: "CHANGE_PAGE_COLOR",
    payload: color,
  };
};

// For Image State
export const changeImage = (index) => ({
  type: "CHANGE_IMAGE",
  payload: index,
});

//For Updating Counts
export const updateCountTo99 = (duration) => ({
  type: "UPDATE_COUNT_TO_99",
  payload: duration,
});

export const updateCountTo95 = (duration) => ({
  type: "UPDATE_COUNT_TO_95",
  payload: duration,
});

export const updateCountTo50 = (duration) => ({
  type: "UPDATE_COUNT_TO_50",
  payload: duration,
});
