import React from "react";
function Emoji(props) {
  return (
    <img
      src={require(`../../Assets/Images/${props.name}.svg`).default}
      alt="ponyo"
      width={props.width}
      height={props.height}
      style={props.style ?? {}}
    />
  );
}
export default Emoji;
