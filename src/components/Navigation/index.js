import React from 'react';
import { FiPlusCircle, FiFileText, FiArchive } from 'react-icons/fi';

const Navigation = ({ page, setPage }) => {
	return (
		<nav className='w-full flex justify-evenly text-white text-sm font-normal'>
			<button
				className={`flex items-center py-2 px-6 rounded-md ${
					page === 1 && 'bg-white text-black'
				}`}
				onClick={() => setPage(1)}
			>
				<FiPlusCircle className='mr-1' />
				<label className='hidden sm:flex'>Add Note</label>
			</button>
			<button
				className={`flex items-center py-2 px-6 rounded-md ${
					page === 2 && 'bg-white text-black'
				}`}
				onClick={() => setPage(2)}
			>
				<FiFileText className='mr-1' />
				<label className='hidden sm:flex'>Notes</label>
			</button>
			<button
				className={`flex items-center py-2 px-6 rounded-md ${
					page === 3 && 'bg-white text-black'
				}`}
				onClick={() => setPage(3)}
			>
				<FiArchive className='mr-1' />
				<label className='hidden sm:flex'>Archived</label>
			</button>
		</nav>
	);
};

export default Navigation;
