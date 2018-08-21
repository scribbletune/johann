import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	const currentSelection = location.hash.replace('#/', '');
	const menuClassName = 'menu menu-' + (currentSelection ? 'page' : 'home');
	const guitarSelected = currentSelection === 'guitar' ? 'selected' : '';
	const pianoSelected = currentSelection === 'piano' ? 'selected' : '';
	const keyboardSelected = currentSelection === 'keyboard' ? 'selected' : '';

	return (
		<div className={menuClassName}>
			<p>Generate chord &amp; scale charts to practice</p>
			<nav>
				<ul>
					<li className={guitarSelected}><Link to="/guitar">Guitar</Link></li>
					<li className={pianoSelected}><Link to="/piano">Piano</Link></li>
					<li className={keyboardSelected}><Link to="/keyboard">Keyboard</Link></li>
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
