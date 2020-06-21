import { ACTIONS } from "./action";

const defaultState = {
  deck: {
    has_cards: false,
  },
  cards: [],
  loading: true,
  errorMessage: '',
  sum: 0,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING: {
      const { loading } = action.payload;
      return {
        ...state,
        loading,
      };
    }
    case ACTIONS.SET_DECK: {
      const { deck } = action.payload;
      return {
        ...state,
        deck,
        loading: false,
        errorMessage: deck.error,
      };
    }
    case ACTIONS.SET_CARDS: {
      const { cardsData } = action.payload;
      return {
        ...state,
        cards: cardsData.cards,
        loading: false,
        errorMessage: cardsData.error,
      };
    }
    case ACTIONS.SUM_DECK: {
      const { sum } = action.payload;
      return {
        ...state,
        sum,
        loading: false,
        errorMessage: '',
      };
    }
    default:
      return state;
  }
};

export default reducer;
