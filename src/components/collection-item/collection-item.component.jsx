import React from 'react';
import { withRouter } from 'react-router-dom';

import './collection-item.styles.scss';

const CollectionItem = ({ item, history, match }) => {
	const { name, imageURL, routeName, products, id } = item;
	return (
		<div
			className='collection-item'
			onClick={() =>
				history.push(`${match.url}/:${id}/:${routeName}`, products)
			}
		>
			<div className='image' style={{ backgroundImage: `url(${imageURL})` }} />
			<div className='collection-footer'>
				<span className='name'>{name}</span>
			</div>
		</div>
	);
};

export default withRouter(CollectionItem);
