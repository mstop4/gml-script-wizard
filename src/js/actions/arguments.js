import { ARG_CHANGE, ARG_SORT, ARG_ADD, ARG_REMOVE } from '../helpers/eventTypes'

export const argumentChange = (id, key, value) => ({
  type: ARG_CHANGE,
  payload: {id: id, key: key, value: value}
})

export const argumentSort = (oldIndex, newIndex) => ({
  type: ARG_SORT,
  payload: {oldIndex: oldIndex, newIndex: newIndex}
})

export const argumentAdd = () => ({
  type: ARG_ADD
})

export const argumentRemove = (id) => ({
  type: ARG_REMOVE,
  payload: {id: id}
})