import * as React from "react";

interface ISquareState {
  color: string;
  bgColor: string;
}
interface ISquareProps {
  isOpponentsBoard?: boolean;
}

class Square extends React.Component<ISquareProps, ISquareState> {
  constructor(props: ISquareProps) {
    super(props);
    this.state = {
      color: "#1E7EF8",
      bgColor: "#1E7EF8"
    };
  }
  handleClick = () => {
    if (this.props.isOpponentsBoard) {
      if (this.state.bgColor === "white") {
        this.setState({
          color: "red",
          bgColor: "red"
        });
      } else if (this.state.bgColor === "red") {
        this.setState({
          color: "#1E7EF8",
          bgColor: "#1E7EF8"
        });
      } else {
        this.setState({
          color: "white",
          bgColor: "white"
        });
      }
    } else {
      this.setState({
        color: "grey",
        bgColor: "grey"
      });
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
      />
    );
  }
}

export default Square;
