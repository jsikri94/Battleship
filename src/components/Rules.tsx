import * as React from "react";

export default class Rules extends React.Component {
  render() {
    return (
      <div>
        <h3>Opponent's board.</h3>
        <h5>Mark hits and misses</h5>
        <p>
          Click on a blue cell for recording a miss.
          <br />
          Click twice on a blue cell for recording a hit.
        </p>
      </div>
    );
  }
}
