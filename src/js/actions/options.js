import { OPT_LEGACY, OPT_CHANGE } from '../helpers/eventTypes'

export const legacyToggle = () => ({
  type: OPT_LEGACY
})

export const prefixChange = (id, value)  => ({
  type: OPT_CHANGE,
  payload: {id: id, value: value}
})

export const funcTagChange = (value)  => ({
  type: OPT_CHANGE,
  payload: {id: 'functionTag', value: value}
})

export const descTagChange = (value)  => ({
  type: OPT_CHANGE,
  payload: {id: 'descriptionTag', value: value}
})

export const argTagChange = (value)  => ({
  type: OPT_CHANGE,
  payload: {id: 'argumentTag', value: value}
})