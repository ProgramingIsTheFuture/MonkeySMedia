import React from 'react';

import {Container, NavItems} from './styles';

const Navbar: React.FC = () => {
	return (
		<Container>
			<NavItems>
				<li>Lgo</li>
				<li>Profile</li>
				<li>Home</li>
				<li>Chat</li>
				<li>Search</li>
			</NavItems>
		</Container>
	);
};

export default Navbar;
