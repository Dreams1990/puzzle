import * as constants from './constants';

export const initalCompletedPosition = (completedPosition) => ({
	type: constants.INITIAL_POSITION,
  completedPosition
});

export const movePosition = (currentPosition) => ({
	type: constants.MOVE_POSITION,
	currentPosition
});
