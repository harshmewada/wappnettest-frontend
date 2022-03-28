import { commonTypes } from "../types";

export const setInitialData = (data) => {
  return {
    type: commonTypes.SET_INITIAL_DATA,
    payload: data,
  };
};
export const setExam = (data) => {
  return {
    type: commonTypes.SET_CURRENT_EXAM,
    payload: data,
  };
};
