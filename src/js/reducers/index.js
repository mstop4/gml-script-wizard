import * as event from '../helpers/EventTypes'

const initialState = {
  options: {
    legacyMode: false,
    localVarPrefix: '_'
  },
  scriptName: '',
  description: '',
  outputValue: '',
  args: [],
  localVars: [],
}

const rootReducer = (state = initialState, action) => {
  let newState = {
    ...state,
    options: {
      ...state.options
    }
  }

  switch (action.type) {

    case event.OPT_LEGACY: {
      newState.options.legacyMode = !newState.options.legacyMode
      break
    }

    case event.OPT_CHANGE: {
      newState.options[action.payload.id] = action.payload.value
      break
    }
  }

  return newState
}

export default rootReducer