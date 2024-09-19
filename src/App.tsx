import { useState } from "react";
import BlankSlateGame from "./BlankSlateGame";
import "./App.css";

<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.1.1/howler.min.js"></script>;

const BLANK_SLATE_CARDS = [
  {
    id: 1,
    front_side_word: "______ Chocolate",
    back_side_word: "Sand ______",
  },
  {
    id: 2,
    front_side_word: "______ Key",
    back_side_word: "Play ______",
  },
  {
    id: 3,
    front_side_word: "______ Walk",
    back_side_word: "Magic ______",
  },
  {
    id: 4,
    front_side_word: "Valentine's ______",
    back_side_word: "Will you be my Valentine?",
  },
];

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  return (
    <div>
      <BlankSlateGame
        blankSlateCardIndex={currentCardIndex}
        blankSlateCard={BLANK_SLATE_CARDS[currentCardIndex]}
        totalBlankSlateCards={BLANK_SLATE_CARDS.length - 1}
        key={currentCardIndex}
      />
      <img
        className="navigation-button"
        src="../right-arrow.png"
        alt="Right arrow"
        onClick={() => {
          if (currentCardIndex < BLANK_SLATE_CARDS.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
          } else {
            setCurrentCardIndex(0);
          }
        }}
      ></img>
    </div>
  );
}

export default App;
