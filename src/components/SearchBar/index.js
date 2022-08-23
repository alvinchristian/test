import React from 'react';

const SearchBar = ({ setSearch }) => {
	return (
		<form className='flex items-center'>
			<input
				className='w-72 lg:w-96 px-4 py-2 mr-2 rounded-lg text-xs font-medium'
				type='text'
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	);
};

export default SearchBar;
