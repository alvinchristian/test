import React from 'react';
import Form from '../Form';
import List from '../List';

const Main = ({ page, notes, setNotes, handleArchived, handleDeleted, search }) => {
	return (
		<main className='flex flex-col'>
			<div>
				{page === 1 && <Form notes={notes} setNotes={setNotes} />}
				{page === 2 && (
					<List
						notes={notes
							.filter(
								(note) =>
									note.archived ===
										false &&
									note.title
										.toLowerCase()
										.includes(
											search.toLowerCase()
										)
							)
							.sort(
								(a, b) =>
									new Date(
										b.createdAt
									) -
									new Date(
										a.createdAt
									)
							)}
						action={'Archive'}
						handleArchived={handleArchived}
						handleDeleted={handleDeleted}
					/>
				)}
				{page === 3 && (
					<List
						notes={notes
							.filter(
								(note) =>
									note.archived ===
										true &&
									note.title
										.toLowerCase()
										.includes(
											search.toLowerCase()
										)
							)
							.sort(
								(a, b) =>
									new Date(
										b.createdAt
									) -
									new Date(
										a.createdAt
									)
							)}
						action={'Unarchive'}
						handleArchived={handleArchived}
						handleDeleted={handleDeleted}
					/>
				)}
			</div>
		</main>
	);
};

export default Main;
