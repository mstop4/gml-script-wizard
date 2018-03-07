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
    }
  }

  return newState
}

export default rootReducer