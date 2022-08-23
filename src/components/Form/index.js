import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ notes, setNotes }) => {
	const [title, setTitle] = useState('');
	const [note, setNote] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (title === '' || note === '') {
			toast.warn("Field Can't Be Empty");
		} else if (title.length > 50) {
			toast.warn("Title Can't Be More Than 50 Characters");
		} else {
			setTitle('');
			setNote('');
			const newNote = {
				id: +new Date(),
				title: title,
				body: note,
				archived: false,
				createdAt: new Date(),
			};
			notes.push(newNote);
			setNotes(notes);
			toast.success('Successfully Added Note!');
		}
	};

	return (
		<form
			onSubmit={(e) => handleSubmit(e)}
			className='flex flex-col items-center my-10 space-y-4 text-white text-sm'
		>
			<input
				className='bg-sky-900 w-5/6 py-4 px-6 rounded-lg placeholder:text-white/80'
				type='text'
				placeholder='Title..'
				value={title}
				onChange={(e) => {
					setTitle(e.target.value);
				}}
			/>
			{title.length > 0 && title.length <= 50 && (
				<p className='text-green-600'>Charachter Left {50 - title.length}</p>
			)}
			{title.length > 50 && (
				<p className='text-red-600'>Title Can't Be More Than 50 Characters</p>
			)}
			<textarea
				className='bg-sky-900 w-5/6 py-4 px-6 rounded-lg leading-6 text-justify placeholder:text-white/80'
				rows={8}
				placeholder='Notes..'
				value={note}
				onChange={(e) => setNote(e.target.value)}
			/>
			<button
				className='bg-white border-2 border-sky-900 px-8 py-2 text-sky-900 ttext-sm font-medium rounded-lg hover:bg-sky-900 hover:text-white'
				type='submit'
			>
				Submit
			</button>
		</form>
	);
};
export default Form;
