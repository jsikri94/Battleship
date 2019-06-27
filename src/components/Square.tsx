import * as React from "react";

interface ISquareState {
  color: string;
  bgColor: string;
  play: boolean;
}
interface ISquareProps {
  isOpponentsBoard?: boolean;
  value?: string;
}

class Square extends React.Component<ISquareProps, ISquareState> {
  constructor(props: ISquareProps) {
    super(props);
    if (this.props.value === "~") {
      this.state = {
        color: "#1e7ef8",
        bgColor: "#1e7ef8",
        play: false
      };
    } else {
      this.state = {
        color: "white",
        bgColor: "white",
        play: false
      };
    }
  }
  handleClick = () => {
    if (this.props.value === "~") {
      if (this.props.isOpponentsBoard) {
        if (this.state.bgColor === "#1e7ef8") {
          this.setState({
            color: "red",
            bgColor: "red"
          });
        } else if (this.state.bgColor === "red") {
          this.setState({
            color: "white",
            bgColor: "white"
          });
        } else if (this.state.bgColor === "white") {
          this.setState({
            color: "#1e7ef8",
            bgColor: "#1e7ef8"
          });
        }
      } else {
        if (this.state.bgColor === "#1e7ef8") {
          this.setState({
            color: "grey",
            bgColor: "grey"
          });
        } else if (this.state.bgColor === "grey") {
          this.setState({
            color: "#1e7ef8",
            bgColor: "#1e7ef8"
          });
        }
      }
    }
  };
  render() {
    return (
      <button
        onClick={this.handleClick}
        style={{
          outlineStyle: "solid",
          outlineColor: this.state.color,
          outlineWidth: "1px",
          backgroundColor: this.state.bgColor,
          height: "30px",
          width: "30px"
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Square;
