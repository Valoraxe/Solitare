import { createStore, combineReducers } from 'redux';
import tweetReducer from './reducers/allTweets';

const rootReducer = combineReducers({
  allTweets: tweetReducer
})

const store = createStore(rootReducer);

export default store