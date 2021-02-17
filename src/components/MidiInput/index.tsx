import { Util } from 'jsmidgen';

import { connect } from 'react-redux';
import { setMidiNoteOn, setMidiNoteOff } from '../../actions/creators';

const MidiInput = ({ dispatch }) => {
  const onMIDISuccess = (midi: any) => {
    const inputs = midi.inputs.values();
    // loop over all available inputs and listen for any MIDI input
    for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
      // each time there is a midi message call the onMIDIMessage function
      input.value.onmidimessage = onMIDIMessage;
    }
  };

  const onMIDIFailure = (error: any) => {
    console.log(
      "No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + error
    );
  };

  function onMIDIMessage(message) {
    const data = message.data; // this gives us our [command/channel, note, velocity] data.
    // console.log('MIDI data', data); // MIDI data [144, 63, 73]

    if (data[0] === 144) {
      setMidiNoteOn(dispatch, Util.noteFromMidiPitch(data[1], true));
    }

    if (data[0] === 128) {
      setMidiNoteOff(dispatch);
    }
  }
  // request MIDI access
  if (navigator['requestMIDIAccess']) {
    navigator['requestMIDIAccess']({
      sysex: false,
    }).then(onMIDISuccess, onMIDIFailure);
  } else {
    console.log('No MIDI support in your browser.');
  }

  return '';
};

// Use the default mapDispatchToProps by not passing it which is basically the same as passing dispatch => ({ dispatch })
export default connect()(MidiInput);
