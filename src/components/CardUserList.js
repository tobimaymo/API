import React, { useState, useEffect } from 'react';
import CardUser from './CardUser';
import axios from 'axios';
import Spinner from './Spinner/Spinner';

const CardUserList = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios('https://dragon-ball-super-api.herokuapp.com/api/characters').then((res) =>
			setUsers(res.data));

		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	return (
		<div className='CharacterList-container'>
			{users.map((user) => {
				return (
					<div key={user.id}>
							{isLoading ? <Spinner /> : <CardUser data={user} />}
					</div>
				);
			})}
		</div>
	);
};

export default CardUserList;
