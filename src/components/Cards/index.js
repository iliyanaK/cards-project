import React, { useEffect } from "react";
import { connect } from "react-redux";
import queryString from "query-string";

import { getCards } from "../../redux/action";
import Loading from "../Loading";
import "./Cards.scss";

const getLabel = (card) => {
  var suite = "";

  if (card.suit === "HEARTS") {
    suite = "\u2665";
  } else if (card.suit === "SPADES") {
    suite = "\u2660";
  } else if (card.suit === "DIAMONDS") {
    suite = "\u2666";
  } else if (card.suit === "CLUBS") {
    suite = "\u2663";
  }

  return `${card.value} of ${suite}`;
};

const Cards = ({
  cards,
  getCards,
  match: {
    params: { id },
  },
  location: { search },
  errorMessage,
}) => {
  const { count } = queryString.parse(search);

  useEffect(() => {
    getCards(id, count);
  }, [id, getCards, count]);

  if (!cards)
    return (
      <div className="mt5">
        <Loading />
      </div>
    );

  if (errorMessage) return <div className="error">{errorMessage}</div>;

  return (
    <div className="flex justify-center">
      <ul className="cards mw8-ns">
        {cards.map((card) => (
          <li key={card.code}>
            <img src={card.image} alt={getLabel(card)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ cards, loading, errorMessage }) => ({
  cards,
  loading,
  errorMessage,
});

export default connect(mapStateToProps, { getCards })(Cards);
