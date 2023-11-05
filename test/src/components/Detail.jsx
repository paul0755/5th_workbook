import React from "react";

export default function Detail({ detail, title }) {
  return (
    <div className="movie-detail" id="dt">
      <div>
        <h5>{title}</h5>
        <p>{detail}</p>
      </div>
    </div>
  );
}