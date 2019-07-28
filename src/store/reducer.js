import * as constants from './constants'

const defaultState = {
  completedPoisition: [],
  currentPosition: [],
  size: 125,
  dimension: 4,
  shuffleMoves: 23,
}

export default (state = defaultState, action) => {
  if (action.type === constants.INITIAL_POSITION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.currentPosition = action.currentPosition;
    newState.completedPosition = action.completedPosition;
    return newState;
  }
  if (action.type === constants.MOVE_POSITION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.currentPosition = action.currentPosition;
    return newState;
  }
  return state;
}
