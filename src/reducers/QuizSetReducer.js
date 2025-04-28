import { actions } from "../actions";

const initialState = {
  loading: false,
  error: null,
  quizSet: [],
};

const quizSetReducer = (state, action) => {
  switch (action.type) {
    case actions.quizId.QUIZ_DATA_FETCHING_BY_ID: {
      return {
        ...state,
        loading: true,
      };
    }

    case actions.quizId.QUIZ_DATA_FETCHED_BY_ID: {
      return {
        ...state,
        loading: false,
        quizSet: action.data,
      };
    }
    default: {
      return state;
    }
  }
};

export { quizSetReducer, initialState };
