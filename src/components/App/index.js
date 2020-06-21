import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getDeck } from "../../redux/action";

const App = ({ deck, getDeck, loading }) => {
  /**
   * Since the remaining is always 52, by replacing the count search param with the below random generated number
   * we can check the behaviour on refresh with dynamic 'remaining' value
   */
  // const count = Math.floor(Math.random() * (52 - 3)) + 3;

  useEffect(() => {
    getDeck();
  }, [getDeck]);

  return (
    <div className="tc flex flex-column items-center justify-center">
      {deck && (
        <>
          <div className="lightest-blue tl">
            <p>
              Currently, clicking "Fetch Cards" multiple times sends multiple
              requests to API.
            </p>
            <p className="b">
              Task: Add loading component, so we can only make one request at a
              time.
            </p>
          </div>
          <Link
            to={{
              pathname: `/cards/${deck.deck_id}`,
              search: `?count=${deck.remaining}`,
            }}
            className="bg-animate bg-blue hover-bg-light-blue inline-flex items-center bw0 ma1 tc navy pv2 ph6 br4 f3"
            disabled={loading}
          >
            Fetch Cards
          </Link>
          <p className="i f6 light-blue">
            Note: extra credit will be given for refactoring/suggestions done
            throughout.
          </p>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ deck, loading }) => ({
  deck,
  loading,
});

export default connect(mapStateToProps, { getDeck })(App);
