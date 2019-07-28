import * as constants from './constants'

const defaultState = {
  completedPoisition: [],
  currentPosition: [],
  size: 125,
  dimension: 4,
  shuffleMoves: 23,
}

export default function (state = defaultState, action) {
  const { currentPosition, completedPosition} = action
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case constants.INITIAL_POSITION:
    newState.completedPosition = action.completedPosition;
    return newState
    break;

    case constants.MOVE_POSITION:
    newState.currentPosition = action.currentPosition;
    return newState
    break;


    default:
    return newState
  }
}
