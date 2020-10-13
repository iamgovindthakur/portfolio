import React from "react";
import Header from '../src/componenets/Header';



import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Header/>
      <div className="jumbotron animated fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>Hi, I'm Govind Kumar Thakur!</h2>
              <p>
                I am a B.E(CSE) Final student.Who's having interest in Frontend
                stack,Website Design optimization,SEO.
              </p>
            </div>
          </div>
        </div>
        <h1>Hi there</h1>
      </div>
    </div>
  );
};

export default App;
