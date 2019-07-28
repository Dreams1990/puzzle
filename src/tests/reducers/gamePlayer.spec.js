import test from 'tape'
import reducer from '../../store/reducer'
import {
  initialState
} from '../initialState'
//
test('gamePlayer reducer', (t) => {

  t.deepEqual(
    reducer(undefined, {}),
    initialState.gamePlayer,
    'Reducer should return default state on init'
  )

  t.deepEqual(
    reducer([], {
      type: 'MOVE_POSITION',
      currentPosition: [{
        top: 0,
        left: 0
      }]
    }), {
      currentPosition: [{
        top: 0,
        left: 0
      }]
    },
    'MOVE_POSITION should update currentPosition for Reducer '
  )

  t.deepEqual(
    reducer([], {
      type: 'INITIAL_POSITION',
      currentPosition: [{
        top: 0,
        left: 0
      }],
      completedPosition: [{
        top: 0,
        left: 0
      }]
    }), {
      currentPosition: [{
        top: 0,
        left: 0
      }],
      completedPosition: [{
        top: 0,
        left: 0
      }]
    },
    'INITIAL_POSITION should update currentPosition and completedPosition for Reducer '
  )

  t.end()
});
