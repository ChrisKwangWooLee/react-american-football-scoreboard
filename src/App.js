//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import {TopRow} from "./TopRow";       // inline export
import BottomRow from "./BottomRow";   // default export
import Buttons from "./Buttons";       // default export


function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  const handler = (teamName, amount) => {
    if (teamName.toLowerCase() === 'lions') {
      if (amount === 7) {
        setHomeScore(homeScore + 7);
      } else if (amount === 3) {
        setHomeScore(homeScore + 3);
      }
    } else if (teamName.toLowerCase() === 'tigers') {
      if (amount === 7) {
        setAwayScore(awayScore + 7);
      } else if (amount === 3) {
        setAwayScore(awayScore + 3);
      }
    }
  };

  const quarterHandler = (updown) => {
    if (updown === 'up') {
      setQuarter(quarter + 1);
    } else if (updown === 'down') {
      setQuarter(quarter - 1);
    }
  } 


  // const home_touchdown_cb = () => {
  //   setHomeScore(homeScore + 7);
  // }

  // const home_fieldgoal_cb = () => {
  //   setHomeScore(homeScore + 3);
  // }

  // const away_touchdown_cb = () => {
  //   setAwayScore(awayScore + 7);
  // }

  // const away_fieldgoal_cb = () => {
  //   setAwayScore(awayScore + 3);
  // }


  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore}/>
        <BottomRow quarter={quarter}/>
      </section>
      <Buttons handler={handler} quarterHandler={quarterHandler}/>
    </div>
  );
};

export default App;
