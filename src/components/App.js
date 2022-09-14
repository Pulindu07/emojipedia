import React from "react";
import Cards from "./cards";
import emojipedia from "../emojipedia";
import Footer from "./footer";

function createCard(singleEmoji) {
  return (<Cards
    key={singleEmoji.id}
    icon={singleEmoji.emoji}
    title={singleEmoji.name}
    definition={singleEmoji.meaning}
  />);
}

function App() {
  return (
    <div className="App">

      <div className="header">
        <h1 className="heading">EmojiPedia</h1>
      </div>

      <div className="emoji-div">
        <dl className="dictionary">
          {emojipedia.map(createCard)}
        </dl>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
