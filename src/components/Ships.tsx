import * as React from "react";

export default class Ships extends React.Component {
  render() {
    return (
      <div>
        <h3>Your board.</h3>
        <h5>Place your ships</h5>
        <p>
          Click on the cells in the grid below to place the following types of
          ships. <br />
          Carrier : 5 cells <br /> Battleship : 4 cells <br /> Cruiser : 3 cells{" "}
          <br /> Submarine : 3 cells <br /> Destroyer : 2 cells
        </p>
      </div>
    );
  }
}
