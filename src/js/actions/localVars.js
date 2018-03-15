import { LVAR_CHANGE, LVAR_SORT, LVAR_ADD, LVAR_REMOVE } from '../helpers/eventTypes'

export const localVarChange = (id, key, value) => ({
  type: LVAR_CHANGE,
  payload: {id: id, key: key, value: value}
})

export const localVarSort = (oldIndex, newIndex) => ({
  type: LVAR_SORT,
  payload: {oldIndex: oldIndex, newIndex: newIndex}
})

export const localVarAdd = () => ({
  type: LVAR_ADD
})

export const localVarRemove = (id) => ({
  type: LVAR_REMOVE,
  payload: {id: id}
})