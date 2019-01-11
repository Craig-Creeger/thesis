import React from "react";
import PonderBox from "../../components/ponderBox";

export default props => {
  return (
    <main>
      <h1>Problem Statement Part One</h1>
      <div className="ponderLayout">
        <section>
          <p>
          Enter an alternative problem statement using this strategy relating to the playground.

          </p>
          <p>&nbsp;</p>
          <PonderBox storageKey={`s${props.id}p${props.pageNbr}`} />
        </section>
        <section>
          <h2>Strategy:</h2>
          <p>Describe Maintenance Needs</p>
          <h2>Scenario:</h2>
          <p>
          A city resident has recently donated a corner lot for a playground. You are an engineer who lives in the neighborhood, and you have been asked by the city to help with the project. Your task is to design playground equipment for the lot using locally sourced materials that are able to withstand outdoor conditions all year long.
          </p>
        </section>
      </div>
    </main>
  );
};
