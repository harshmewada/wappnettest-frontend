const initialstate = {
  spinner: false,
};

const utilReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "SPINNER_START":
      return {
        ...state,
        spinner: true,
      };

    case "SPINNER_STOP":
      return {
        ...state,
        spinner: false,
      };

    default:
      return state;
  }
};

export default utilReducer;
