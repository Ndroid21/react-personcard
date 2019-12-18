import { combineReducers } from 'redux';

const postsReducer = (state = null, action) => {
    return state;
}

export default combineReducers({
    posts: postsReducer
});