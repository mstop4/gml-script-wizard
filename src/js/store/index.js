import { createStore } from 'redux'
import rootReducer from '../reducers/index'
import { loadState, saveState } from './localStorage'
import { initialState } from '../helpers/initialState'

// TODO: Figure out how to configure Redux devtools for production/development

let initialStateCopy = initialState

const loadedOptions = loadState();
if (loadedOptions) {
  initialStateCopy.options = loadedOptions.options
}

const store = createStore(
  rootReducer,
  initialStateCopy,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveState({
    options: store.getState().options
  })
})
  
export default store