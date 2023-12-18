import React from "react";
import chatgptlogo from "./assets/chatgpt.svg";
import addbtn from "./assets/add-30.png";
import msgicon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperside">
          <div className="uppersidetop">
            <img src={chatgptlogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>

          <button className="midbtn">
            <img src={addbtn} alt="new chat" className="addbtn" />
            New Chat
          </button>

          <div className="uppersidebottom">
            <button className="query">
              <image src={msgicon} alt="Query" />
              What is Programming ?
            </button>

            <button className="query">
              <image src={msgicon} alt="Query" />
              How to use an API ?
            </button>
          </div>
        </div>

        <div className="lowerside">
          <div className="listitems">
            <img className="listitemsimg" src={home} alt="" />
            Home
          </div>

          <div className="listitems">
            <img className="listitemsimg" src={saved} alt="" />
            Saved
          </div>

          <div className="listitems">
            <img className="listitemsimg" src={rocket} alt="" />
            Upgrade to Pro
          </div>
        </div>
      </div>

      <div className="main"></div>
    </div>
  );
};

export default App;
