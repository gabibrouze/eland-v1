import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection-page.component';
import CollectionOverviews from '../collection-overviews/collection-overviews.component';

const ShopPage = ({ match }) => {
	return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route
				path={`${match.path}/:collectionID/:productID`}
				component={CollectionPage}
			/>
			<Route
				exact
				path={`${match.path}/:collectionID`}
				component={CollectionOverviews}
			/>
		</div>
	);
};

export default ShopPage;
