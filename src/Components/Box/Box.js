import React from "react";
import "./Box.css";

import Boxes from "../Boxes/Boxes";

export default class Box extends React.Component {
  render() {
    const { notes } = this.props;
    return (
      <div className='box'>
        {notes.map((note, idx) => (
          <Boxes note={note.key} audio={note.sound} key={idx} />
        ))}
      </div>
    );
  }
}
