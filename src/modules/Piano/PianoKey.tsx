import React from 'react';

const PianoKey = ({ keyObj, activeMidiNote }) => {
  // {label: "D", name: "d", color: "white", note: "Eb2", highlight: true}
  var className = 'key ' + keyObj.color + '-key ' + keyObj.note.replace(/\d+/, '');
  if (keyObj.highlight) {
    className += ' highlight';
  }
  if (keyObj.rootNote) {
    className += ' rootNote';
  }

  if (activeMidiNote === keyObj.note.toLowerCase()) {
    className += ' activeMidiNote';
  }

  return <div className={className} key={keyObj.note}></div>;
};

export default PianoKey;
