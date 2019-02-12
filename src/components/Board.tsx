import * as React from "react";
import Square from "./Square";

interface IBoardProps {
  isOpponentsBoard?: boolean;
}
export default class Board extends React.Component<IBoardProps> {
  render() {
    const board = [];

    for (let i = 0; i < 10; i++) {
      const row = [];
      for (let j = 0; j < 10; j++) {
        row.push(<Square isOpponentsBoard={this.props.isOpponentsBoard} />);
      }
      board.push(<div>{row}</div>);
    }
    return <div>{board}</div>;
  }
}
