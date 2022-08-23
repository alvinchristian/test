import React, { useState } from 'react';
import { Header, Main } from './components';
import { getInitialData } from './utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(2);
	const [curNotes, setCurNotes] = useState(getInitialData());

	const handleArchived = (id) => {
		const newNotes = curNotes.map((note) =>
			note.id === id ? { ...note, archived: !note.archived } : note
		);
		setCurNotes(newNotes);
		toast.info('Successfully Archive Note!');
	};

	const handleDeleted = (id) => {
		const newNotes = curNotes.filter((note) => note.id !== id);
		setCurNotes(newNotes);
		toast.error('Successfully Deleted Note!');
	};

	return (
		<div className='bg-white w-screen h-screen'>
			<Header page={page} setPage={setPage} setSearch={setSearch} />
			<Main
				page={page}
				notes={curNotes}
				setNotes={setCurNotes}
				handleArchived={handleArchived}
				handleDeleted={handleDeleted}
				search={search}
			/>
			<ToastContainer
				position='top-right'
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
};

export default App;
