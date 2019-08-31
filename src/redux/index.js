import { createStore, combineReducers } from 'redux'
import { reducers as postsReducers } from './posts'

//STORE SETUP

const appReducer = combineReducers({
  ...postsReducers,
})

const { NODE_ENV } = process.env;

const store = createStore(
  appReducer,
  NODE_ENV === 'development'
  ?window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  : undefined
)

//store.dispatch(addPostAction('Meu primeiro post'))

export default store;