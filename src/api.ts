import { scales, scale, chord, chords } from 'scribbletune';

export const getChromaticNotes = () => [
  'C1',
  'Db1',
  'D1',
  'Eb1',
  'E1',
  'F1',
  'Gb1',
  'G1',
  'Ab1',
  'A1',
  'Bb1',
  'B1',
  'C2',
  'Db2',
  'D2',
  'Eb2',
  'E2',
  'F2',
  'Gb2',
  'G2',
  'Ab2',
  'A2',
  'Bb2',
  'B2',
  'C3',
  'Db3',
  'D3',
  'Eb3',
  'E3',
  'F3',
  'Gb3',
  'G3',
  'Ab3',
  'A3',
  'Bb3',
  'B3',
  'C4',
  'Db4',
  'D4',
  'Eb4',
  'E4',
  'F4',
  'Gb4',
  'G4',
  'Ab4',
  'A4',
  'Bb4',
  'B4',
  'C5',
  'Db5',
  'D5',
  'Eb5',
  'E5',
  'F5',
  'Gb5',
  'G5',
  'Ab5',
  'A5',
  'Bb5',
  'B5',
  'C6',
  'Db6',
  'D6',
  'Eb6',
  'E6',
  'F6',
  'Gb6',
  'G6',
  'Ab6',
  'A6',
  'Bb6',
  'B6',
];

export const getScaleNames = () =>
  scales().map((scale) => ({
    name: scale,
    label: scale[0].toUpperCase() + scale.slice(1),
  }));

export const getChordNames = () =>
  chords().map((chord) => ({
    name: chord,
    label: chord,
  }));

export const sharpsToFlats = (note) => {
  if (!note.includes('#')) {
    return note;
  }

  let noteName = note.replace(/\d/, '');
  const sharpsToFlatsMap = {
    'C#': 'Db',
    'D#': 'Eb',
    'F#': 'Gb',
    'G#': 'Ab',
    'A#': 'Bb',
  };

  return note.replace(noteName, sharpsToFlatsMap[noteName]);
};

export const getScale = (rootNote, scaleName) => {
  // concatenate scales from octave range 1 to 6
  var o1 = scale(rootNote + 1 + ' ' + scaleName.toLowerCase()).map(
    sharpsToFlats
  );
  var o2 = scale(rootNote + 2 + ' ' + scaleName.toLowerCase()).map(
    sharpsToFlats
  );
  var o3 = scale(rootNote + 3 + ' ' + scaleName.toLowerCase()).map(
    sharpsToFlats
  );
  var o4 = scale(rootNote + 4 + ' ' + scaleName.toLowerCase()).map(
    sharpsToFlats
  );
  var o5 = scale(rootNote + 5 + ' ' + scaleName.toLowerCase()).map(
    sharpsToFlats
  );
  var o6 = scale(rootNote + 6 + ' ' + scaleName.toLowerCase()).map(
    sharpsToFlats
  );
  return o1.concat(o2, o3, o4, o5, o6);
};

export const getChord = (chordName) => {
  // concatenate chords from octave range 2 to 5
  var o2 = chord(chordName + '-2');
  var o3 = chord(chordName + '-3');
  var o4 = chord(chordName + '-4');
  var o5 = chord(chordName + '-5');
  return o2.concat(o3, o4, o5);
};

export const getPitches = () => [
  { label: 'C', name: 'C', color: 'white' },
  { label: 'Db', name: 'Db', color: 'black' },
  { label: 'D', name: 'D', color: 'white' },
  { label: 'Eb', name: 'Eb', color: 'black' },
  { label: 'E', name: 'E', color: 'white' },
  { label: 'F', name: 'F', color: 'white' },
  { label: 'Gb', name: 'Gb', color: 'black' },
  { label: 'G', name: 'G', color: 'white' },
  { label: 'Ab', name: 'Ab', color: 'black' },
  { label: 'A', name: 'A', color: 'white' },
  { label: 'Bb', name: 'Bb', color: 'black' },
  { label: 'B', name: 'B', color: 'white' },
];

/**
 * Get a range of octaves with pitches
 * @return {Array} Array of pitch arrays
 */
export const getOctavesOfPianoNotes = () => {
  let pitches = getPitches();
  let octaves = [[], [], []];
  // Add notes for 3rd 4th and 5th octave in one loop
  pitches.forEach((pitch) => {
    octaves[0].push(Object.assign({}, pitch, { note: pitch.label + 3 }));
    octaves[1].push(Object.assign({}, pitch, { note: pitch.label + 4 }));
    octaves[2].push(Object.assign({}, pitch, { note: pitch.label + 5 }));
  });

  return octaves;
};

export const getTuningsForGuitar = () => [
  {
    label: 'Regular',
    display: 'EBGDAE',
    strings: ['E4', 'B3', 'G3', 'D3', 'A2', 'E2'],
    tuningIdx: 0,
    name: 0,
  },
  {
    label: 'Dropped D',
    display: 'EBGDAD',
    strings: ['E4', 'B3', 'G3', 'D3', 'A2', 'D2'],
    tuningIdx: 1,
    name: 1,
  },
  {
    label: 'Double dropped D',
    display: 'DADGBD',
    strings: ['D4', 'A3', 'D3', 'G3', 'B2', 'D2'],
    tuningIdx: 2,
    name: 2,
  },
  {
    label: 'Drop C',
    display: 'DAFCGC',
    strings: ['D4', 'A3', 'F3', 'C3', 'G2', 'C2'],
    tuningIdx: 3,
    name: 3,
  },
  {
    label: 'Open G',
    display: 'DGDGBD',
    strings: ['D4', 'G3', 'D3', 'G3', 'B2', 'D2'],
    tuningIdx: 4,
    name: 4,
  },
  {
    label: 'Major Third',
    display: 'ECG#ECG#',
    strings: ['E4', 'C4', 'Ab3', 'E3', 'C3', 'Ab2'],
    tuningIdx: 5,
    name: 5,
  },
];

export const getTuningsForUkulele = () => [
  {
    label: 'Regular',
    display: 'GCEA',
    strings: ['A4', 'E4', 'C4', 'G4'],
    tuningIdx: 0,
    name: 0,
  },
  {
    label: 'Low G',
    display: 'gCEA',
    strings: ['A4', 'E4', 'C4', 'G3'],
    tuningIdx: 1,
    name: 1,
  },
  {
    label: 'Drop G',
    display: 'GCEG',
    strings: ['G4', 'E4', 'C4', 'G4'],
    tuningIdx: 2,
    name: 2,
  },
  {
    label: 'Baritone',
    display: 'DGBE',
    strings: ['E3', 'B3', 'G3', 'D4'],
    tuningIdx: 3,
    name: 3,
  },
];

export const getTuningsFor7StringsGuitar = () => [
  {
    label: 'Standard',
    display: 'EBGDAEB',
    strings: ['E4', 'B3', 'G3', 'D3', 'A2', 'E2', 'B1'],
    tuningIdx: 0,
    name: 0,
  },
];

/**
 * Given the name of a string, say 'E', return 24 notes that can come on this `E` string
 * @param  {String} s The string whose notes we want to return (e.g. E)
 * @param  {Number} frets The number of frets on that string
 * @return {Object} An array of notes of the given string
 */
export const getStringNotes = (s: string, frets: number) => {
  let idx = getChromaticNotes().indexOf(s);
  return getChromaticNotes().slice(idx, idx + frets + 1);
};

export const getStringInstruments = () => [
  {
    label: 'Guitar',
    numberOfStrings: 6,
    frets: 24,
    getTunings: getTuningsForGuitar,
    instrumentIdx: 0,
    name: 0,
  },
  {
    label: 'Ukulele',
    numberOfStrings: 4,
    frets: 15,
    getTunings: getTuningsForUkulele,
    instrumentIdx: 1,
    name: 1,
  },
  {
    label: '7 Strings Guitar',
    numberOfStrings: 7,
    frets: 24,
    getTunings: getTuningsFor7StringsGuitar,
    instrumentIdx: 2,
    name: 2,
  },
];
