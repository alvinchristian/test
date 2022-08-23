import React from 'react';
import Item from '../../Item';
import Empty from '../Empty';

const List = ({ notes, action, handleArchived, handleDeleted }) => {
	return (
		<div className='flex flex-col'>
			{notes.map((note) => (
				<Item
					key={note.id}
					note={note}
					action={action}
					handleArchived={handleArchived}
					handleDeleted={handleDeleted}
				/>
			))}
			{notes.length === 0 && <Empty />}
		</div>
	);
};

export default List;
