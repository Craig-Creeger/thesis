import React from "react";
import "./compassSpinner.css";
import * as constants from '../helpers/constants';
const ANIMATION_TIME = 4; // seconds

class RandomSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSpinning: false
    };
		this.refCompass = React.createRef();
		this.slot = 0;
  }

  onSpin = () => {
    this.refCompass.current.blur();

    if (this.state.isSpinning) {
      this.props.hasBeenChoosen(null);
    } else {
      const randNbr = parseInt(Math.random() * this.props.maxSize, 10) + 1;
      this.props.hasBeenChoosen(randNbr);
      this.slot = (1 / this.props.maxSize) * randNbr + constants.FREE_ROTATIONS;
      window.setTimeout(() => {
        this.props.finishedAnimation();
      }, 1000 * ANIMATION_TIME);
    }
    this.setState({ isSpinning: !this.state.isSpinning });
  };

  render() {
    return (
      <button onClick={this.onSpin} className="compass" ref={this.refCompass}>
        <span
          className={`compassDial ${this.state.isSpinning && "isSpinning"}`}
          style={
            this.state.isSpinning
              ? {
                  transform: `rotate(${this.slot}turn)`
                }
              : {}
          }
        />
      </button>
    );
  }
}

export default RandomSpinner;
