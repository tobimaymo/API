import React, { useState, useEffect } from 'react';
import CardUser from './CardUser';
import axios from 'axios';

const CardUserList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios('https://dragon-ball-super-api.herokuapp.com/api/characters').then((res) =>
			setUsers(res.data)
		);
	}, []);

	return (
		<div className='CharacterList-container'>
			{users.map((user) => {
				return (
					<div key={user.id}>
							<CardUser data={user} />
					</div>
				);
			})}
		</div>
	);
};

export default CardUserList;
