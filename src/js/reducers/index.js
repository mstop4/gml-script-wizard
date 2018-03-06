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
  switch (action.type) {

    case event.OPT_LEGACY: {
      state.options.legacyMode = !state.options.legacyMode
      return state;
    }

    default:
      return state;
  }
}

export default rootReducer