import { NAME_CHANGE, DESC_CHANGE } from '../helpers/EventTypes'

export const scriptNameChange = (value) => ({
  type: NAME_CHANGE,
  payload: {value: value}
})

export const descriptionChange = (value) => ({
  type: DESC_CHANGE,
  payload: {value: value}
})