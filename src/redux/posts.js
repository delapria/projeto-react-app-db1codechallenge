import { createAction } from 'redux-actions'

//ACTIONS

const POSTS_ADD_ACTION = 'POSTS/ADD';

export const addPostAction = createAction(POSTS_ADD_ACTION, (description) => ({
  description
}))

//REDUCERS

const postsHandler = (state = [], action) => {
  switch (action.type) {
    case POSTS_ADD_ACTION: 
      return [
        ...state,
        action.payload,
      ];
    default: 
      return state;
  }
}

export const reducers = {
  posts: postsHandler,
}