import React from 'react';

// Buttons Component
const Buttons = (props) => {

    const {handler, quarterHandler}
      = props;
  
    return (
    <section className="buttons">    
      <div className="homeButtons">
        <button className="homeButtons__touchdown" onClick={() => handler('lions', 7)}>Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick={() => handler('lions', 3)}>Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={() => handler('tigers', 7)}>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={() => handler('tigers', 3)}>Away Field Goal</button>
      </div>
      <div className="quarterButtons">
        <button className="quaterButtons-Up" onClick={() => quarterHandler('up')}>Qarter +1</button>
        <button className="quaterButtons-Down" onClick={() => quarterHandler('down')}>Qarter -1</button>
      </div>
    </section>
    );
  };

  export default Buttons