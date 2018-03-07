import { OPT_LEGACY, OPT_CHANGE } from '../helpers/EventTypes'

export const legacyToggle = () => ({
  type: OPT_LEGACY
})

export const prefixChange = (id, value)  => ({
  type: OPT_CHANGE,
  payload: {id: id, value: value}
})
