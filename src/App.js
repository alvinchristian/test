import React, { useEffect, useState } from 'react';
import Button from './components/Button';

const App = () => {
	let [num1, setNum1] = useState(null);
	let [num2, setNum2] = useState(null);
	let [operator, setOperator] = useState(null);
	let [res, setRes] = useState(null);
	let [history, setHistory] = useState([]);

	const calculator = [
		['(', ')', '%', 'CE'],
		[7, 8, 9, '/'],
		[4, 5, 6, 'x'],
		[1, 2, 3, '-'],
		[0, '.', '=', '+'],
	];

	let handleClick = (i) => {
		console.log(i);
		if (i === 'CE') {
			setNum1(null);
			setNum2(null);
			setOperator(null);
			setRes(null);
		} else if (i === '=') {
			let result;
			if (operator === '/') {
				result = num1 / num2;
				setRes(result);
			} else if (operator === 'x') {
				result = num1 * num2;
				setRes(result);
			} else if (operator === '-') {
				result = num1 - num2;
				setRes(result);
			} else if (operator === '+') {
				result = num1 + num2;
				setRes(result);
			}
			const cur = `${num1} ${operator} ${num2} = ${result}`;
			setHistory([cur, ...history]);
			localStorage.setItem('history', JSON.stringify([cur, ...history]));
		} else if (typeof i === 'number' && !operator) {
			setNum1(i);
		} else if (typeof i === 'number' && operator && num1) {
			setNum2(i);
		} else if (typeof i !== 'number' && num1) {
			setOperator(i);
		}
	};

	const handleHistory = (i) => {
		i.toString().split('');
		setNum1(i[0]);
		setOperator(i[2]);
		setNum2(i[4]);
	};

	useEffect(() => {
		localStorage.getItem('history') && setHistory(JSON.parse(localStorage.getItem('history')));
	}, []);

	return (
		<div className='flex h-screen justify-center items-center'>
			<div className='flex flex-col w-2/6 bg-blue-200 p-2 rounded-lg'>
				<div className='flex flex-col justify-center items-end h-20'>
					<div className='flex text-sm'>
						<h2>{num1}</h2>
						<h2>{operator}</h2>
						<h2>{num2}</h2>
					</div>
					<div className='text-xl'>
						<h1>{res}</h1>
					</div>
				</div>
				<div className='flex justify-evenly'>
					{calculator[0].map((i) => (
						<Button
							val={i}
							onClick={() => handleClick(i)}
						/>
					))}
				</div>
				<div className='flex justify-evenly'>
					{calculator[1].map((i) => (
						<Button
							val={i}
							onClick={() => handleClick(i)}
						/>
					))}
				</div>
				<div className='flex justify-evenly'>
					{calculator[2].map((i) => (
						<Button
							val={i}
							onClick={() => handleClick(i)}
						/>
					))}
				</div>
				<div className='flex justify-evenly'>
					{calculator[3].map((i) => (
						<Button
							val={i}
							onClick={() => handleClick(i)}
						/>
					))}
				</div>
				<div className='flex justify-evenly'>
					{calculator[4].map((i) => (
						<Button
							val={i}
							onClick={() => handleClick(i)}
						/>
					))}
				</div>
				<div className='flex flex-col justify-center mt-10'>
					<h1 className='text-center text-sm mb-2'>History</h1>
					{history?.map((i) => (
						<button
							className='text-sm'
							onClick={() => handleHistory(i)}
						>
							{i}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
