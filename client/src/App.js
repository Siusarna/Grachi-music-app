import React from "react";
import "./stylesheets/app.css";
import Intro from "./Components/Intro";
import Game from "./Components/Game";
import {connect} from 'react-redux'


const App = ({game}) => {
  return (
    <div className="cover-full">
      {game.status ? <Game /> : <Intro />}
    </div>
  );
};

const mapStateToProps = ({game}) => ({
  game
});

export default connect(mapStateToProps)(App);
