//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
// import { HomeScore } "./HomeScore";
// import { AwayScore } "./AwayScore";
import BottomRow from "./BottomRow";

function App() {
//   //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  //functions for home counter
  const [homeCount, homeCountSet] = useState(0);

  // function touchdownHome() {
  //   homeCountSet(homeCount + 7);
  // }

  function goalHome() {
    homeCountSet(homeCount + 1);
  }

   //functions for away counter
  const [awayCount, awayCountSet] = useState(0);

  // function touchdownAway() {
  //   awayCountSet(awayCount + 7);
  // }

 function goalAway() {
    awayCountSet(awayCount + 1);
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Barcelona</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

  <div className="home__score">{homeCount}</div>
          </div>
          <div className="timer">00:00</div>
          <div className="away">
            <h2 className="away__name">Real Madrid</h2>
  <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* <button onClick={touchdownHome} className="homeButtons__touchdown">Home Touchdown</button> */}
          <button onClick={goalHome} className="homeButtons__fieldGoal">Home Goal</button>
        </div>
        <div className="awayButtons">
          {/* <button onClick = {touchdownAway} className="awayButtons__touchdown">Away Touchdown</button> */}
          <button onClick = {goalAway} className="awayButtons__fieldGoal">Away Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
