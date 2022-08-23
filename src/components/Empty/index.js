import React from 'react';
import { FiFile } from 'react-icons/fi';

const Empty = () => {
	return (
		<div className='flex flex-col py-20 items-center space-y-2 text-sky-600 animate-pulse'>
			<FiFile className='text-6xl' />
			<h1 className='text-2xl font-medium'>Empty Note!</h1>
		</div>
	);
};

export default Empty;
