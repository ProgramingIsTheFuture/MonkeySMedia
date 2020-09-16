import React, {useState} from 'react';

import {Container} from './styles';
import api from '../../../services';

const Register: React.FC = () => {
	const [username, setUsername] = useState<string>('');
	const [pass1, setPass1] = useState<string>('');
	const [pass2, setPass2] = useState<string>('');
	const handlePassword = (e: any, passNum: number) => {
		passNum === 1 ? setPass1(e.target.value) : setPass2(e.target.value);
	};
	const handleUsername = (e: any) => {
		setUsername(e.target.value);
	};

	const handleSubmit = (e: any) => {
		api
			.post('api/users/', {username: username, password: pass1})
			.then(resp => console.log(resp));
	};

	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<input
					type={'text'}
					value={username}
					onChange={handleUsername}
					placeholder={'Username'}
				/>
				<input
					type={'password'}
					value={pass1}
					onChange={(e: any) => handlePassword(e, 1)}
					placeholder={'Password'}
				/>
				<input
					type={'password'}
					value={pass2}
					onChange={(e: any) => handlePassword(e, 2)}
					placeholder={'Repeat Password'}
				/>
				<input type={'submit'} value={'Create'} />
			</form>
		</Container>
	);
};

export default Register;
