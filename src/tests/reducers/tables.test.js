import tablesReducer from '../../redux/reducers/tables';
import tables from "../fixtures/tables";

test("get deck into state", () => {
    const deck = [
        {
            name: "ACE OF SPADES!"
        },
        {
            name: "THE ACE OF SPADES!"
        },
        {
            name: "DON'T FORGET THE JOKER!"
        }
    ]
    const action = {
      type: "GET_DECK",
      deck
    }
    const state = tablesReducer(tables, action)
    expect(state).toEqual(tables)
})