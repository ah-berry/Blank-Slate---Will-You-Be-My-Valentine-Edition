export type BlankSlateCard = {
    id: number;
    front_side_word: string;
    back_side_word: string;
}

export type BlankSlateGamePropsTypes = {
    blankSlateCardIndex: number;
    blankSlateCard: BlankSlateCard;
    totalBlankSlateCards: number;
}

export type BlankSlateCardProps = {
    blankSlateCard: BlankSlateCard;
    isFinalFlip: boolean;
}