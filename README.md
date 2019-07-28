# [sliding-puzzle-game-demo]


## A complete and minimal sliding-puzzle-game demo

- This is a bi-dimensional puzzle (4x4).
- Each piece can move in 4 directions (up, down, left, right).
- At start all pieces are scrambled.
- Movement of a piece is just possible when there is a empty cell next to it.
- Just one movement is possible each time.
- Game ends when all pieces are in the right position, showing the image clearly.
- Each piece can move in 4 directions (up, down, left, right).
- At start all pieces are scrambled.
- Movement of a piece is just possible when there is a empty cell next to it.
- Just one movement is possible each time.

## Dependencies

* **react** `16.8.6`
* **react-redux** `7.1.0`
* **redux** `4.0.4`
* **reselect** `4.0.0`
* **styled-components** `4.3.2`
* **tape** `4.11.0`

## Run Dev

* webpack dev server with hot reloading, no server rendering

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
