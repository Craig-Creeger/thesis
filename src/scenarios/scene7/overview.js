import React from "react";
import PropTypes from "prop-types";
import TitleBlock from "../../components/titleBlock";
import { SCENARIOS } from "../../helpers/constants";

function Overview(props) {
  return (
    <React.Fragment>
      <TitleBlock color={SCENARIOS[props.id].color}>
        {SCENARIOS[props.id].name}
      </TitleBlock>
      <main>
        <p>
          <em>
          How does the user(s) interact with <strong>the playground</strong>?
          How can their interaction be integrated into the solution? 
          </em>
        </p>

        <p>Here are some thought starters:</p>
        <ul>
          <li>How are they affected?</li>
          <li>Emotionally?</li>
          <li>Physically?</li>
          <li>Psychologically?</li>
        </ul>
      </main>
    </React.Fragment>
  );
}

Overview.propTypes = {
  id: PropTypes.number.isRequired
};
export default Overview;
