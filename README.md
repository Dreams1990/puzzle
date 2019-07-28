# [sliding-puzzle-game-demo]


## A complete and minimal sliding-puzzle-game demo

- This is a bi-dimensional puzzle (4x4).
- Each piece can move in 4 directions (up, down, left, right).
- At start all pieces are scrambled.
- Movement of a piece is just possible when there is a empty cell next to it.
- Just one movement is possible each time.
- Game ends when all pieces are in the right position, showing the image clearly.

## Requirement
- Must be done in React √
- Keep the puzzle state in redux instead of local state √
- Make use of the 'reselect' library by retrieving and displaying the grid-index-position of the empty tile √
- Set up actions and reducers using community standards/libraries, and explain the choice :
   - 1）Set the value of the action type to a constant（The console will display any spelling errors instead of failing to run without prompting.）
   - 2）Using 'actionCreators' to create actions（Making actions are easier to migrate and test）
- Add a unit test for the reducer √ tape


## Dependencies

* **react** `16.8.6`
* **react-redux** `7.1.0`
* **redux** `4.0.4`
* **reselect** `4.0.0`
* **styled-components** `4.3.2`
* **tape** `4.11.0`

## Run Dev

```
npm install
npm start
open http://127.0.0.1:3000
```


## Testing reducer

* Using Tape

```
npm install
npm test
```
