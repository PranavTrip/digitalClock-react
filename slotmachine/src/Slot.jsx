import React from "react";

const Slot = (props) => {
  let x = "";
  let y = "";
  let z = "";

  if (props.x === props.y && props.y === props.z) {
    return (
      <>
        <h3 className="secondaryHeading">
          {props.x} {props.y} {props.z}
        </h3>
        <h3 className="secondaryHeading">This is Matching</h3>
      </>
    );
  } else {
    return (
      <>
        <h3 className="secondaryHeading">
          {props.x} {props.y} {props.z}
        </h3>
        <h3 className="secondaryHeading">This is Not Matching</h3>
      </>
    );
  }
};

export default Slot;
