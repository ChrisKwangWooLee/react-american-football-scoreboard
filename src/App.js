//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";



function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  const home_touchdown_cb = () => {
    setHomeScore(homeScore + 7);
  }

  const home_fieldgoal_cb = () => {
    setHomeScore(homeScore + 3);
  }

  const away_touchdown_cb = () => {
    setAwayScore(awayScore + 7);
  }

  const away_fieldgoal_cb = () => {
    setAwayScore(awayScore + 3);
  }



  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore}/>
        <BottomRow />
      </section>
      <Buttons home_touchdown_cb={home_touchdown_cb} home_fieldgoal_cb={home_fieldgoal_cb} away_touchdown_cb={away_touchdown_cb} away_fieldgoal_cb={away_fieldgoal_cb}/>
    </div>
  );
}

// Top Row Component
const TopRow = (props) => {
  const {homeScore, awayScore} = props;

  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">Lions</h2>
        <div className="home__score">{homeScore}</div>
      </div>
      <div className="timer">00:03</div>
      <div className="away">
        <h2 className="away__name">Tigers</h2>
        <div className="away__score">{awayScore}</div>
      </div>
    </div>
  )
}

// Bottom Row Component
const BottomRow = () => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">3</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">4</div>
      </div>
    </div>
  )
}

// Buttons Component
const Buttons = (props) => {

  const {home_touchdown_cb, home_fieldgoal_cb, away_touchdown_cb, away_fieldgoal_cb}
    = props;

  return (
  <section className="buttons">    
    <div className="homeButtons">
      {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
      <button className="homeButtons__touchdown" onClick={home_touchdown_cb}>Home Touchdown</button>
      <button className="homeButtons__fieldGoal" onClick={home_fieldgoal_cb}>Home Field Goal</button>
    </div>
    <div className="awayButtons">
      <button className="awayButtons__touchdown" onClick={away_touchdown_cb}>Away Touchdown</button>
      <button className="awayButtons__fieldGoal" onClick={away_fieldgoal_cb}>Away Field Goal</button>
    </div>
  </section>
  )
}

export default App;
