import { getDeck, moveToCell } from '../../redux/actions/actions';

test("perform getDeck action", () => {
  const deck = ["This is a deck of cards"];
  const action = getDeck(deck);
  expect(action).toEqual({
    type: "GET_DECK",
    deck
  });
})

test("perform moveToCell action", () => {
    const card = {name: "card"};
    const table = "tableName";
    const action = moveToCell(card, table);
    expect(action).toEqual({
        type: "MOVE_TO_CELL",
        card,
        table
    })
})
