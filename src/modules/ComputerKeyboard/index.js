import React from 'react';
import './ComputerKeyboard.less';
import { connect } from 'react-redux';
import ComputerKey from './ComputerKey.js';

const ComputerKeyboard = ({ notes, rootNote }) => {
	return (
		<div className="instrument">
			<div className="computer-keyboard">
				<div className="computer-keys">
					<div className="fn-key">tab</div>
					<div>Q</div>
					<ComputerKey label="W" color="black" rootNote={'Db' === rootNote} highlight={notes.indexOf('Db3') > -1} note='Db' key='Db3' />
					<ComputerKey label="E" color="black" rootNote={'Eb' === rootNote} highlight={notes.indexOf('Eb3') > -1} note='Eb' key='Eb3' />
					<div>R</div>
					<ComputerKey label="T" color="black" rootNote={'Gb' === rootNote} highlight={notes.indexOf('Gb3') > -1} note='Gb' key='Gb3' />
					<ComputerKey label="Y" color="black" rootNote={'Ab' === rootNote} highlight={notes.indexOf('Ab3') > -1} note='Ab' key='Ab3' />
					<ComputerKey label="U" color="black" rootNote={'Bb' === rootNote} highlight={notes.indexOf('Bb3') > -1} note='Bb' key='Bb3' />
					<div>I</div>
					<ComputerKey label="O" color="black" rootNote={'Db' === rootNote} highlight={notes.indexOf('Db4') > -1} note='Db' key='Db4' />
					<div>P</div>
					<div>{'{'}</div>
					<div>{'}'}</div>
					<div>|</div>
				</div>
				<div className="computer-keys">
					<div className="fn-key caps">caps lock</div>
					<ComputerKey label="A" color="white" rootNote={'C' === rootNote} highlight={notes.indexOf('C3') > -1} note='C' key='C3' />
					<ComputerKey label="S" color="white" rootNote={'D' === rootNote} highlight={notes.indexOf('D3') > -1} note='D' key='D3' />
					<ComputerKey label="D" color="white" rootNote={'E' === rootNote} highlight={notes.indexOf('E3') > -1} note='E' key='E3' />
					<ComputerKey label="F" color="white" rootNote={'F' === rootNote} highlight={notes.indexOf('F3') > -1} note='F' key='F3' />
					<ComputerKey label="G" color="white" rootNote={'G' === rootNote} highlight={notes.indexOf('G3') > -1} note='G' key='G3' />
					<ComputerKey label="H" color="white" rootNote={'A' === rootNote} highlight={notes.indexOf('A3') > -1} note='A' key='A3' />
					<ComputerKey label="J" color="white" rootNote={'B' === rootNote} highlight={notes.indexOf('B3') > -1} note='B' key='B3' />
					<ComputerKey label="K" color="white" rootNote={'C' === rootNote} highlight={notes.indexOf('C4') > -1} note='C' key='C4' />
					<ComputerKey label="L" color="white" rootNote={'D' === rootNote} highlight={notes.indexOf('D4') > -1} note='D' key='D4' />
					<div>:</div>
					<div>"</div>
					<div className="fn-key">return</div>
				</div>
				<div className="computer-keys">
					<div className="fn-key shift">shift</div>
					<div>Z</div>
					<div>X</div>
					<div>C</div>
					<div>V</div>
					<div>B</div>
					<div>N</div>
					<div>M</div>
					<div>{'<'}</div>
					<div>></div>
					<div>?</div>
					<div className="fn-key">shift</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	notes: state.notes, 
	rootNote: state.rootNote
})

// export default connect(mapStateToProps)(ComputerKeyboard);
export const Component = connect(mapStateToProps)(ComputerKeyboard);
export default {Component};
