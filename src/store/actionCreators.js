import * as constants from './constants';

export const getPosition = (currentPosition,completedPosition) => ({
	type: constants.INITIAL_POSITION,
	currentPosition,
  completedPosition
});

export const movePosition = (currentPosition) => ({
	type: constants.MOVE_POSITION,
	currentPosition
});
