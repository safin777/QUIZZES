import { actions } from "../actions/index";

const initialState = {
  loading: false,
  error: null,
  quizes: [],
};

const quizReducer = (state, action) => {
  switch (action.type) {
    case actions.quiz.QUIZ_DATA_FETCHING: {
      return {
        ...state,
        loading: true,
      };
    }

    case actions.quiz.QUIZ_DATA_FETCHED: {
      return {
        ...state,
        loading: false,
        quizes: action.data,
      };
    }

    default: {
      return state;
    }
  }
};
export { quizReducer, initialState };
