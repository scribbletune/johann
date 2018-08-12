import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
	return (
		<div className="menu">
			<nav>
				<ul>
					<li><Link to="/guitar">Guitar</Link></li>
					<li><Link to="/piano">Piano</Link></li>
					<li><Link to="/keyboard">Keyboard</Link></li>
				</ul>
			</nav>
		</div>
	);
};

export default Menu;
