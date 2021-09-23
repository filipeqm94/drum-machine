import React from "react";

import "./Boxes.css";

export default class Boxes extends React.Component {
  constructor(props) {
    super(props);

    this.audio = React.createRef();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const audio = this.audio.current;
    const parent = this.audio.current.parentNode;

    audio.play();
    parent.classList.add("active");

    audio.addEventListener("ended", () => {
      parent.classList.remove("active");
    });
  }

  render() {
    const { note, audio } = this.props;

    return (
      <div className='boxes' onClick={this.handleClick}>
        <h1>{note}</h1>
        <audio ref={this.audio} src={audio} id={note} />
      </div>
    );
  }
}
