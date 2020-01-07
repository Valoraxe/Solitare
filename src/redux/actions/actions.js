
export const getDeck = (deck) => ({
    type: "GET_DECK",
    deck
});

export const moveToCell = (card, table) => ({
    type: "MOVE_TO_CELL",
    card,
    table
});