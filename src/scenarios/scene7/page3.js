import React from "react";
import PropTypes from "prop-types";

import PillNavigation from "../../components/pillNavigation";

function Page(props) {
  const Overview = props.overview;
  return (
    <React.Fragment>
      <Overview id={props.id} />
      <main>
        <PillNavigation
          active={props.pageNbr}
          navRequested={props.getNextPage}
          color={props.color}
        />
        <h1>Design a product that blends food together</h1>
        <h2>Consideration 1</h2>
        <p>User has the ability to adjust the speed </p>
        <h2>Consideration 2</h2>
        <p>User can easily clean product afterwards</p>
        <h2>Consideration 3</h2>
        <p>User can stir the foods easily</p>
      </main>
    </React.Fragment>
  );
}
Page.propTypes = {
  getNextPage: PropTypes.func.isRequired,
  overview: PropTypes.func,
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default Page;
