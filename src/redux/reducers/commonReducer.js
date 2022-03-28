import { commonTypes } from "../types";

const initialstate = {
  users: [],
  exams: [],
  currentExam: undefined,
  questions: [],
  answers: [],
};

const commonReducer = (state = initialstate, action) => {
  switch (action.type) {
    case commonTypes.SET_INITIAL_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case commonTypes.SET_CURRENT_EXAM:
      return {
        ...state,
        currentExam: action.payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
