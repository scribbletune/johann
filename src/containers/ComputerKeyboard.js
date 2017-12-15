import React from 'react';
import './ComputerKeyboard.less';
import ComputerKey from '../components/ComputerKey.js';

const ComputerKeyboard = ({ notes, rootNote }) => {
	return (
		<div className="computer-keyboard">
			<div className="computer-keys">
				<div className="fn-key">tab</div>
				<div>Q</div>
				<ComputerKey label="W" color="black" rootNote={'db' === rootNote} highlight={notes.indexOf('db2') > -1} note='db' key='db' />
				<ComputerKey label="E" color="black" rootNote={'eb' === rootNote} highlight={notes.indexOf('eb2') > -1} note='eb' key='eb' />
				<div>R</div>
				<ComputerKey label="Y" color="black" rootNote={'ab' === rootNote} highlight={notes.indexOf('ab2') > -1} note='ab' key='ab' />
				<ComputerKey label="U" color="black" rootNote={'bb' === rootNote} highlight={notes.indexOf('bb2') > -1} note='bb' key='bb' />
				<div>I</div>
				<ComputerKey label="O" color="black" rootNote={'db' === rootNote} highlight={notes.indexOf('db3') > -1} note='db' key='db2' />
				<div>P</div>
				<div>{'{'}</div>
				<div>{'}'}</div>
				<div>|</div>
			</div>
			<div className="computer-keys">
				<div className="fn-key caps">caps lock</div>
				<ComputerKey label="A" color="white" rootNote={'c' === rootNote} highlight={notes.indexOf('c2') > -1} note='c' key='c2' />
				<ComputerKey label="S" color="white" rootNote={'d' === rootNote} highlight={notes.indexOf('d2') > -1} note='d' key='d2' />
				<ComputerKey label="D" color="white" rootNote={'e' === rootNote} highlight={notes.indexOf('e2') > -1} note='e' key='e2' />
				<ComputerKey label="F" color="white" rootNote={'f' === rootNote} highlight={notes.indexOf('f2') > -1} note='f' key='f2' />
				<ComputerKey label="G" color="white" rootNote={'g' === rootNote} highlight={notes.indexOf('g2') > -1} note='g' key='g2' />
				<ComputerKey label="H" color="white" rootNote={'a' === rootNote} highlight={notes.indexOf('a2') > -1} note='a' key='a2' />
				<ComputerKey label="J" color="white" rootNote={'b' === rootNote} highlight={notes.indexOf('b2') > -1} note='b' key='b2' />
				<ComputerKey label="K" color="white" rootNote={'c' === rootNote} highlight={notes.indexOf('c3') > -1} note='c' key='c3' />
				<ComputerKey label="L" color="white" rootNote={'d' === rootNote} highlight={notes.indexOf('d3') > -1} note='d' key='d3' />
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
