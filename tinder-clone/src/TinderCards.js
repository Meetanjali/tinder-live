import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';

import './TinderCards.css';
import axios from './axios.js';

function TinderCards() {
	const [people, setPeople] = useState([]);
	//api calling
	useEffect(() => {
		async function fetchData() {
			// const req = await axios.get('/tinder/card');
			const req = await axios.get('http://localhost:8001/tinder/card');
			setPeople(req.data);
		}
		fetchData();
	}, []);

	console.log(people);

	const swiped = (direction, nameToDelet) => {
		console.log('removing' + nameToDelet);
		/*setLastDirection(direction);*/
	};
	const outOfFrame = (name) => {
		console.log(name + 'left the screen');
	};

	return (
		<div className='tindercards'>
			<div className='tindercards_cardcontainer'>
				{people.map((person) => (
					<TinderCard
						className='swipe'
						key={person.name}
						prventSwipe={["up,'down"]}
						onSwipe={(dir) => swiped(dir, person.name)}
						onCardLeftScreen={() => outOfFrame(person.name)}
					>
						<div
							style={{ backgroundImage: `url("${person.url}")` }}
							className='card'
						>
							<h2>{person.name}</h2>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	);
}

export default TinderCards;
