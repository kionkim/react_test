import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';
//property

const customer = [
	{
		id: 1,
		name: 'kionkim',
		image: 'https://placeimg.com/64/64/any',
		birthday: '961222',
		gender: 'male',
		job: 'student'
	},
	{
		id: 2,
		name: 'kionkim',
		image: 'https://placeimg.com/64/64/any',
		birthday: '961221',
		gender: 'male',
		job: 'student'
	},
	{
		id: 3,
		name: 'kionkim',
		image: 'https://placeimg.com/64/64/any',
		birthday: '961220',
		gender: 'male',
		job: 'student'
	}
];
class App extends Component {
	render() {
		return (
			<div>
				{customer.map((c) => {
					return (
						<Customer
							key={c.id}
							id={c.id}
							image={c.image}
							name={c.name}
							birthday={c.birthday}
							gender={c.gender}
							job={c.job}
						/>
					);
				})}
			</div>
		);
	}
}

export default App;
