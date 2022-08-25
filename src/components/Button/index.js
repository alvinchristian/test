import React from 'react';

const Button = ({ onClick, val }) => {
	return (
		<button className='flex-1 bg-white/20 m-1 py-2 rounded-sm' onClick={onClick}>
			{val}
		</button>
	);
};

export default Button;
