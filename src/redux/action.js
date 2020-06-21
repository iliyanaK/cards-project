import { chain } from "lodash";

// types of action
export const ACTIONS = {
  SET_DECK: "SET_DECK",
  SET_CARDS: "SET_CARDS",
  SORT_DECK: "SORT_DECK",
  SUM_DECK: "SUM_DECK",
  SET_LOADING: "SET_LOADING",
};

// actions
export const setLoading = (loading) => ({
  type: ACTIONS.SET_LOADING,
  payload: {
    loading,
  },
});

export const getDeck = () => async (dispatch) => {
  dispatch(setLoading(true));

  const deck = await fetch(
    "/api/deck/new/shuffle/?deck_count=1"
  ).then((response) => response.json());

  dispatch({
    type: ACTIONS.SET_DECK,
    payload: {
      deck,
    },
  });
};

export const getCards = (deckId, remaining) => async (dispatch) => {
  dispatch(setLoading(true));

  const cardsData = await fetch(
    `/api/deck/${deckId}/draw/?count=${remaining}`
  ).then((response) => response.json());

  dispatch({
    type: ACTIONS.SET_CARDS,
    payload: {
      cardsData,
    },
  });
};

export const sumDeck = () => (dispatch, getState) => {
  const sum = chain(getState().cards)
    .filter(({ suit }) => ["CLUBS", "SPADES"].includes(suit))
    .reduce((acc, { value }) => {
      let weight = parseInt(value);
      if (["JACK", "KING", "QUEEN"].includes(value)) {
        weight = 10;
      } else if (value === "ACE") {
        weight = 1;
      }
      return acc + weight;
    }, 0)
    .value();

  dispatch({
    type: ACTIONS.SUM_DECK,
    payload: {
      sum,
    },
  });
};

export const sortDeck = () => (dispatch, getState) => {
  const sortedDeck = chain(getState().cards)
    .map((card) => {
      let weight = parseInt(card.value);
      if (card.value === "JACK") {
        weight = 11;
      } else if (card.value === "QUEEN") {
        weight = 12;
      } else if (card.value === "KING") {
        weight = 13;
      } else if (card.value === "ACE") {
        weight = 14;
      }
      return { ...card, weight };
    })
    .sortBy(["suit", "weight"])
    .value();

  dispatch({
    type: ACTIONS.SET_CARDS,
    payload: {
      cardsData: {
        cards: sortedDeck,
      },
    },
  });
};
