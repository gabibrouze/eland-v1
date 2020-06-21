import React from 'react';
import { withRouter } from 'react-router-dom';
import './collection-page.styles.scss';

import ShopItem from '../../components/shop-item/shop-item.component';

const CollectionPage = (props) => {
	const products = props.location.state;
	return (
		<div className='collection-page'>
			<div className='preview'>
				{products.map((product) => (
					<ShopItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default withRouter(CollectionPage);
