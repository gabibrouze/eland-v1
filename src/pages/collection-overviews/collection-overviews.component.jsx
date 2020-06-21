import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selector';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection-overviews.styles.scss';

const CollectionOverviewsPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<div className='collections-page'>
			<div className='title'>{title}</div>
			<div className='items'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionID)(state),
});

export default connect(mapStateToProps)(CollectionOverviewsPage);
