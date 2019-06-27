import * as React from "react";
import Square from "./Square";

interface IBoardProps {
  isOpponentsBoard?: boolean;
}
export default class Board extends React.Component<IBoardProps> {
  render() {
    const board = [];
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const firstrow = [];
    firstrow.push(
      <Square isOpponentsBoard={this.props.isOpponentsBoard} value={"BS"} />
    );
    for (let i = 0; i < 10; i++) {
      firstrow.push(
        <Square
          isOpponentsBoard={this.props.isOpponentsBoard}
          value={letters[i]}
        />
      );
    }
    board.push(<div>{firstrow}</div>);
    for (let i = 0; i < 10; i++) {
      const row = [];
      const val = i + 1;
      row.push(
        <Square
          isOpponentsBoard={this.props.isOpponentsBoard}
          value={val.toString()}
        />
      );
      for (let j = 0; j < 10; j++) {
        row.push(
          <Square isOpponentsBoard={this.props.isOpponentsBoard} value="~" />
        );
      }
      board.push(<div>{row}</div>);
    }
    return <div>{board}</div>;
  }
}
