import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.less';

const Menu = () => {
	const currentSelection = location.hash.replace('#/', '');
	const guitarSelected = currentSelection === 'guitar' ? 'selected' : '';
	const pianoSelected = currentSelection === 'piano' ? 'selected' : '';
	const keyboardSelected = currentSelection === 'keyboard' ? 'selected' : '';

	return (
		<div className="menu">
			<div className="navbar-start">
				<div className="navbar-item">
					<div className={guitarSelected}><Link to="/guitar">Guitar</Link></div>
					<div className={pianoSelected}><Link to="/piano">Piano</Link></div>
					<div className={keyboardSelected}><Link to="/keyboard">Keyboard</Link></div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
