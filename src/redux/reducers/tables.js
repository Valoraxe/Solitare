export default (state = defaultState, action) => {
    switch (action.type) {
      case "GET_DECK":
        var newState = dealCards(state, action.deck);
        return newState;
      case "MOVE_TO_CELL":
        var newState = removeCard(state, action.card);
        return newState;
      default:
        return state;
    }
}

let defaultState = {
  freeCell1: [],
  freeCell2: [],
  freeCell3: [],
  freeCell4: [],
  hearts: [],
  spades: [],
  diamonds: [],
  clubs: [],
  tableau1: [],
  tableau2: [],
  tableau3: [],
  tableau4: [],
  tableau5: [],
  tableau6: [],
  tableau7: [],
  tableau8: []
}

function removeCard(state, card) {
  state.tableau1 = state.tableau1.filter(item => item.id != card.id);
  state.tableau2 = state.tableau2.filter(item => item.id != card.id);
  state.tableau3 = state.tableau3.filter(item => item.id != card.id);
  state.tableau4 = state.tableau4.filter(item => item.id != card.id);
  state.tableau5 = state.tableau5.filter(item => item.id != card.id);
  state.tableau6 = state.tableau6.filter(item => item.id != card.id);
  state.tableau7 = state.tableau7.filter(item => item.id != card.id);
  state.tableau8 = state.tableau8.filter(item => item.id != card.id);
  return state;
}

function dealCards(state, deck) {
  let l = 1;

  for(let i = 0; i < deck.length; i++) {
    switch (l) {
      case 1:
        state.tableau1.push(deck[i]);
        break;
      case 2:
        state.tableau2.push(deck[i]);
        break;
      case 3:
        state.tableau3.push(deck[i]);
        break;
      case 4:
        state.tableau4.push(deck[i]);
        break;
      case 5:
        state.tableau5.push(deck[i]);
        break;
      case 6:
        state.tableau6.push(deck[i]);
        break;
      case 7:
        state.tableau7.push(deck[i]);
        break;
      case 8:
        state.tableau8.push(deck[i]);
        break;
    }
    l++;
    if (l > 8) l = 1;
  }

  return state;
}