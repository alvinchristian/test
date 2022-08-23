import React from 'react';
import { showFormattedDate } from '../utils';

const Item = ({ note, action, handleArchived, handleDeleted }) => {
	return (
		<article className='space-y-1 border-b-2 border-black/20 px-10 py-6'>
			<h2 className='text-lg font-medium text-black'>{note.title}</h2>
			<span className='text-xs text-black/40'>{showFormattedDate(note.createdAt)}</span>
			<p className='text-sm font-reguler text-justify leading-6 text-black/80'>
				{note.body}
			</p>
			<div className='flex space-x-2 pt-2 text-sm'>
				<button
					type='button'
					className='rounded bg-blue-400/20 py-2 px-3 text-blue-600'
					onClick={() => handleArchived(note.id)}
				>
					{action}
				</button>
				<button
					type='button'
					className='rounded bg-red-400/20 py-2 px-3 text-red-600'
					onClick={() => handleDeleted(note.id)}
				>
					Delete
				</button>
			</div>
		</article>
	);
};

export default Item;
