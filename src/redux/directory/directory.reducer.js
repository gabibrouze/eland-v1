const INITIAL_STATE = {
	sections: [
		{
			title: 'BEDROOM',
			imageURL:
				'https://images.unsplash.com/photo-1578898887193-90f85d96cd7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=cover&w=400&q=60',
			id: 1,
			linkURL: 'shop/bedroom',
		},
		{
			title: 'LIVING',
			imageURL:
				'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=cover&w=400&q=80',
			id: 2,
			linkURL: 'shop/living',
		},
		{
			title: 'DINING',
			imageURL:
				'https://images.unsplash.com/photo-1492138645880-160f6a5136fa?ixlib=rb-1.2.1&auto=format&fit=cover&w=400&q=60',
			id: 3,
			linkURL: 'shop/dining',
		},
		{
			title: 'STUDY',
			imageURL:
				'https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&auto=format&fit=cover&w=400&q=80',
			id: 4,
			linkURL: 'shop/study',
		},
		{
			title: 'OUTDOORS',
			imageURL:
				'https://images.unsplash.com/photo-1563303514-e93075228d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=cover&w=500&q=60',
			id: 5,
			size: 'large',
			linkURL: 'shop/outdoors',
		},
		{
			title: 'ELECTRONICS',
			imageURL:
				'https://images.unsplash.com/photo-1461151304267-38535e780c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=cover&w=500&q=60',
			id: 6,
			size: 'large',
			linkURL: 'shop/electronics',
		},
		{
			title: 'MISCELLANEOUS',
			imageURL:
				'https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685522_1280.jpg',
			id: 7,
			size: 'large',
			linkURL: '/shop/misc',
		},
	],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default directoryReducer;
