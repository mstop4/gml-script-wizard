import * as event from '../helpers/EventTypes'
import generateScript from '../helpers/ScriptGen'
import { arrayMove } from 'react-sortable-hoc'

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
    options: { ...state.options },
    args: [ ...state.args ],
    localVars: [ ...state.localVars ]
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

    case event.ARG_CHANGE: {
      newState.args[action.payload.id][action.payload.key] = action.payload.value
      break
    }

    case event.ARG_SORT: {
      newState.args = arrayMove(newState.args, action.payload.oldIndex, action.payload.newIndex)
      break
    }

    case event.ARG_ADD: {
      newState.args.push({name: '', type: '', description: ''})
      break
    }

    case event.ARG_REMOVE: {
      if (newState.args.length > 0) {
        newState.args.splice(action.payload.id, 1)
      }
      break
    }

    case event.LVAR_CHANGE: {
      newState.localVars[action.payload.id][action.payload.key] = action.payload.value
      break
    }

    case event.LVAR_SORT: {
      newState.localVars = arrayMove(newState.localVars, action.payload.oldIndex, action.payload.newIndex)
      break
    }

    case event.LVAR_ADD: {
      newState.localVars.push({name: '', type: '', description: ''})
      break
    }

    case event.LVAR_REMOVE: {
      if (newState.localVars.length > 0) {
        newState.localVars.splice(action.payload.id, 1)
      }
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