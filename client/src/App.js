import React from "react";
import "./stylesheets/app.css";
import Intro from "./Components/Intro";
import Game from "./Components/Game";
import {connect} from 'react-redux'


const App = ({status}) => {
  return (
    <div className="cover-full">
      {!status.game ? <Game /> : <Intro className="" />}
    </div>
  );
};

const mapStateToProps = (status) => ({
  status
});

export default connect(mapStateToProps)(App);
