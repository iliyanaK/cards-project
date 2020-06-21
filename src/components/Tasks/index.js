import React from "react";
import { connect } from "react-redux";
import { sortDeck, sumDeck } from "../../redux/action";

import "./Tasks.scss";

class Tasks extends React.Component {
  sortDeck() {
    this.props.sortDeck();
  }

  async sumDeck() {
    await this.props.sumDeck();
    alert(this.props.sum);
  }

  render() {
    return (
      <div className="flex justify-center">
        <div className="fl task-box tl pa1">
          <div className="ba b--near-white pv1 ph2">
            <h1>Task 1 - Add up black cards</h1>
            <p>
              Clicking the "Sum Black Cards" button should trigger an alert,
              which shows the sum of the value of all of the cards:
            </p>
            <ol>
              <li>A = 1, J,Q,K = 10</li>
            </ol>
            <button
              onClick={() => this.sumDeck()}
              className="bg-animate bg-dark-blue inline-flex items-center ma2 tc bw0 white b pa2 dim"
              disabled={this.props.loading || this.props.errorMessage}
            >
              Sum Black Cards
            </button>
          </div>
        </div>
        <div className="fl task-box tl pa1">
          <div className="ba b--near-white pv1 ph2">
            <h1>Task 2 - Sort Cards</h1>
            <p>
              Clicking the "Sort Cards" button should sort the deck into order,
              so they appear:
            </p>
            <ol>
              <li>Grouped into Suite (Clubs, Diamonds, Hearts, Spades)</li>
              <li>
                In ascending order (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A).
              </li>
            </ol>
            <button
              onClick={() => this.sortDeck()}
              className="bg-animate bg-dark-blue inline-flex items-center ma2 tc bw0 white b pa2 dim"
              disabled={this.props.loading || this.props.errorMessage}
            >
              Sort Cards
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapPropsToState = ({ sum, loading, errorMessage }) => ({
  sum,
  loading,
  errorMessage,
});

export default connect(mapPropsToState, { sortDeck, sumDeck })(Tasks);
