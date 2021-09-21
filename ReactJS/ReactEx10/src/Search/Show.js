import React from "react";

const Show = ({ show }) => (
  <div>
      <br />
    <h3>{show.title}</h3>
    <h4>({show.year})</h4>
    <p>{show.description}</p>
  </div>
);

export default Show;