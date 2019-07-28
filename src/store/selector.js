import {
  createSelector
} from 'reselect';


export const gamePlayerSelector = createSelector(
  state => state.currentPosition,
  state => state.completedPosition,
  (currentPosition, completedPosition) => {
    return {
      currentPosition,
      completedPosition
    }
  }
)
