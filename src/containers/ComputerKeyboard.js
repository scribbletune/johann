import React from 'react';
import './ComputerKeyboard.less';
import ComputerKey from '../components/ComputerKey.js';

const ComputerKeyboard = ({ notes, rootNote }) => {
	return (
		<div className="computer-keyboard">
			<div className="computer-keys">
				<div className="fn-key">tab</div>
				<div>Q</div>
				<ComputerKey label="W" color="black" rootNote={'db' === rootNote} highlight={notes.indexOf('db3') > -1} note='db' key='db3' />
				<ComputerKey label="E" color="black" rootNote={'eb' === rootNote} highlight={notes.indexOf('eb3') > -1} note='eb' key='eb3' />
				<div>R</div>
				<ComputerKey label="T" color="black" rootNote={'gb' === rootNote} highlight={notes.indexOf('gb3') > -1} note='gb' key='gb3' />
				<ComputerKey label="Y" color="black" rootNote={'ab' === rootNote} highlight={notes.indexOf('ab3') > -1} note='ab' key='ab3' />
				<ComputerKey label="U" color="black" rootNote={'bb' === rootNote} highlight={notes.indexOf('bb3') > -1} note='bb' key='bb3' />
				<div>I</div>
				<ComputerKey label="O" color="black" rootNote={'db' === rootNote} highlight={notes.indexOf('db4') > -1} note='db' key='db4' />
				<div>P</div>
				<div>{'{'}</div>
				<div>{'}'}</div>
				<div>|</div>
			</div>
			<div className="computer-keys">
				<div className="fn-key caps">caps lock</div>
				<ComputerKey label="A" color="white" rootNote={'c' === rootNote} highlight={notes.indexOf('c3') > -1} note='c' key='c3' />
				<ComputerKey label="S" color="white" rootNote={'d' === rootNote} highlight={notes.indexOf('d3') > -1} note='d' key='d3' />
				<ComputerKey label="D" color="white" rootNote={'e' === rootNote} highlight={notes.indexOf('e3') > -1} note='e' key='e3' />
				<ComputerKey label="F" color="white" rootNote={'f' === rootNote} highlight={notes.indexOf('f3') > -1} note='f' key='f3' />
				<ComputerKey label="G" color="white" rootNote={'g' === rootNote} highlight={notes.indexOf('g3') > -1} note='g' key='g3' />
				<ComputerKey label="H" color="white" rootNote={'a' === rootNote} highlight={notes.indexOf('a3') > -1} note='a' key='a3' />
				<ComputerKey label="J" color="white" rootNote={'b' === rootNote} highlight={notes.indexOf('b3') > -1} note='b' key='b3' />
				<ComputerKey label="K" color="white" rootNote={'c' === rootNote} highlight={notes.indexOf('c4') > -1} note='c' key='c4' />
				<ComputerKey label="L" color="white" rootNote={'d' === rootNote} highlight={notes.indexOf('d4') > -1} note='d' key='d4' />
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
	);
};

export default ComputerKeyboard;
