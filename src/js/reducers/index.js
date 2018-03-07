import * as event from '../helpers/EventTypes'
import generateScript from '../helpers/ScriptGen'

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

    case event.NAME_CHANGE: {
      newState.scriptName = action.payload.value
      break
    }

    case event.DESC_CHANGE: {
      newState.description = action.payload.value
      break
    }

    case event.OPT_LEGACY: {
      newState.options.legacyMode = !newState.options.legacyMode
      break
    }

    case event.OPT_CHANGE: {
      newState.options[action.payload.id] = action.payload.value
      break
    }
  }

  newState.outputValue = generateScript(newState).outputValue
  return newState
}

export default rootReducer