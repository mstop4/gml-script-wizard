import { createStore } from 'redux'
import rootReducer from '../reducers/index'
import { loadState, saveState } from './localStorage'
import { initialState } from '../helpers/initialState'
import throttle from 'lodash/throttle'

// TODO: Figure out how to configure Redux devtools for production/development

let initialStateCopy = initialState

const loadedState = loadState();
if (loadedState) {
  initialStateCopy.options = loadedState.options
}

const store = createStore(
  rootReducer,
  initialStateCopy//,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(throttle(() => {
  saveState({
    options: store.getState().options
  })
}, 1000))
  
export default store