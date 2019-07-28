import React, { Component } from "react";
import store from "../store";
import { connect } from "react-redux";
import { initalCompletedPosition, movePosition } from "../store/actionCreators";
import { gamePlayerSelector } from "../store/selector";
import { Box, H1, Win } from "./gamePlayer.style";
import Tile from "../components/tile";

class GamePlayer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.startGame();
  }

  startGame = () => {
    const { handlePosition, dimension, size } = this.props;
    const currentPosition = Array.from({
      length: dimension * dimension
    }).map((t, i) => ({
      left: size * (i % dimension),
      top: Math.floor(i / dimension) * size
    }));
    const completedPosition = [...currentPosition];
    handlePosition(currentPosition, completedPosition);
    this.shuffle();
  };

  shuffle = async () => {
    let last;
    let speed = Math.min(100, 800 / this.props.shuffleMoves);
    for (let i = 0; i < this.props.shuffleMoves; i++) {
      await new Promise(resolve => {
        setTimeout(() => {
          let candidates = this.props.currentPosition
            .map((tile, i) =>
              i !== last && this.isNextToEmpty(tile) ? i : null
            )
            .filter(tile => tile);
          last = candidates[Math.floor(Math.random() * candidates.length)];
          this.moveTile(last);
          resolve();
        }, speed);
      });
    }
  };

  tileClicked = i => {
    if (this.isNextToEmpty(this.props.currentPosition[i])) {
      this.moveTile(i);
    }
  };

  moveTile(i) {
    const { currentPosition, movePosition } = this.props;
    const currentPositionNew = [...this.props.currentPosition];
    const length = currentPosition.length - 1;
    currentPositionNew[i] = currentPosition[length];
    currentPositionNew[length] = currentPosition[i];
    movePosition(currentPositionNew);
  }

  isNextToEmpty(tile) {
    const { size, currentPosition } = this.props;
    const length = currentPosition.length - 1;
    const empty = this.props.currentPosition[length];
    const distance =
      Math.abs(tile.left - empty.left) + Math.abs(tile.top - empty.top);
    return distance === size;
  }

  render() {
    const {
      dimension,
      gameInProgress,
      currentPosition,
      size,
      completedPosition
    } = this.props;
    return (
      <div>
        <H1>Sliding Puzzle</H1>
        <Box>
          {currentPosition.map((tile, i) => (
            <Tile
              key={i}
              {...{ size, dimension, i }}
              moveTile={this.tileClicked}
              gameInProgress={gameInProgress}
              position={currentPosition[i]}
              completedPosition={completedPosition[i]}
              total={dimension * dimension}
            />
          ))}
        </Box>
        <Win
          ifWin={
            JSON.stringify(currentPosition) ===
            JSON.stringify(completedPosition)
          }
        >
          You won, refresh the page to paly agian!
        </Win>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPosition: gamePlayerSelector(state).currentPosition,
    completedPosition: gamePlayerSelector(state).completedPosition,
    size: 125,
    dimension: 4,
    shuffleMoves: 23
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handlePosition(currentPosition, completedPosition) {
      dispatch(movePosition(currentPosition));
      dispatch(initalCompletedPosition(completedPosition));
    },
    movePosition(currentPosition) {
      dispatch(movePosition(currentPosition));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GamePlayer);
