import React from "react";
import PropTypes from "prop-types";

class PillBtn extends React.Component {
  render() {
    const { position, active } = this.props;
    let classes = "";
    if (active) classes += "active ";
    if (position === 1) classes += "pillFirst ";
    if (position === 3) classes += "pillLast ";

    return (
      <button className={classes ? classes : null} onClick={this.handleClick}>
        {position}
      </button>
    );
  }

  handleClick = () => {
    this.props.navRequested(this.props.position);
  };
}

PillBtn.propTypes = {
  position: PropTypes.number.isRequired,
	active: PropTypes.bool.isRequired,
	navRequested: PropTypes.func.isRequired
};

export default PillBtn;
