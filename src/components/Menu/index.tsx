import React from 'react';
import { Link } from 'react-router-dom';
import NotesSetter from '../NotesSetter/index';
import './Menu.less';

const Menu = () => {
	const currentSelection = location.hash.replace('#/', '');
	const guitarSelected = currentSelection === 'guitar' ? 'selected' : '';
	const ukuleleSelected = currentSelection === 'ukulele' ? 'selected' : '';
	const pianoSelected = currentSelection === 'piano' ? 'selected' : '';
	const keyboardSelected = currentSelection === 'keyboard' ? 'selected' : '';

	return (
		<div className="menu">
			<p>Generate chord &amp; scale charts to practice</p>
			<nav>
				<ul>
				<li className={guitarSelected}><Link to="/guitar">Guitar</Link></li>
				<li className={ukuleleSelected}><Link to="/ukulele">Ukulele</Link></li>
					<li className={pianoSelected}><Link to="/piano">Piano</Link></li>
					<li className={keyboardSelected}><Link to="/keyboard">Keyboard</Link></li>
				</ul>
			</nav>
			<NotesSetter />
		</div>
	);
};

export default Menu;
