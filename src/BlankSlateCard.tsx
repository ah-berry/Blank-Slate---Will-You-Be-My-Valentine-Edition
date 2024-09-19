import { BlankSlateCardProps } from "./Types";

export default function BlankSlateCard({ blankSlateCard, isFinalFlip }: BlankSlateCardProps) {
  // When flipping to the back side of the final card, it is styled differently.
  return (
    <>
      <div className="front">{blankSlateCard.front_side_word}</div>
        {isFinalFlip ? (
          <>
            <div className="back final-flip" id="final-side">
              {blankSlateCard.back_side_word}
            </div>
          </>
        ) : (
          <div className="back">{blankSlateCard.back_side_word}</div>
        )}
    </>
  );
}