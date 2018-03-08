import { createStore } from 'redux'
import rootReducer from '../reducers/index'

// TODO: Figure out how to configure Redux devtools for production/development

const store = createStore(
  rootReducer/*,*/
  /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
)
  
export default store