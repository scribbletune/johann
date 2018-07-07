import React from 'react';
import { connect } from 'react-redux';
import PianoKey from './PianoKey.js';
import './Piano.less';

const Piano = ({ octaves }) => {
	const octs = octaves.map((oct, idx) => {
		var keys = oct.map(
			k => <PianoKey keyObj={k} key={k.note} />
		);
		return (<div className="octave" key={idx}>{keys}</div>);
	});

	return (
		<div className="piano">{octs}</div>
	);
};

const mapStateToProps = state => ({
	octaves: state.octaves
})

export default connect(mapStateToProps)(Piano);

