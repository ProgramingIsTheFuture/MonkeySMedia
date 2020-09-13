import styled from 'styled-components';

export const Container = styled.nav`
	background: var(--nav-color);

	width: 100%;
	display: flex;
	text-align: center;
	justify-content: center;
	height: 50px;
`;
export const NavItems = styled.ul`
	display: inline;

	list-style: none;

	& li {
		display: inline;
		color: var(--white);

		margin-left: 5px;
		margin-right: 5px;
	}
`;
