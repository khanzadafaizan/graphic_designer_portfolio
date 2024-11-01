import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{ width: "2.5rem", height: "2.5rem" }}
    >
      <span className="visually-hidden ">Loading...</span>
    </Spinner>
  );
}

export default Loading;
