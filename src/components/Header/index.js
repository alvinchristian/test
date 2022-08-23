import React from 'react';
import Navigation from '../Navigation';
import SearchBar from '../SearchBar';

const Header = ({ page, setPage, setSearch }) => {
	return (
		<header className='bg-sky-900 flex flex-col items-center space-y-4 py-6'>
			<h2 className='text-white text-xl font-medium'>Notesku</h2>
			<Navigation page={page} setPage={setPage} />
			{page !== 1 && <SearchBar setSearch={setSearch} />}
		</header>
	);
};

export default Header;
