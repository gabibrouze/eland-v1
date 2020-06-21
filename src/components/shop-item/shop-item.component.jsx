import React from 'react';

import { connect } from 'react-redux';

import './shop-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

const ShopItem = ({ product, addItem }) => {
	const { id, name, imageURL, price } = product;
	return (
		<div className='shop-item'>
			<div className='image' style={{ backgroundImage: `url(${imageURL})` }} />
			<div className='product-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>
			<CustomButton onClick={() => addItem(product)} inverted>
				ADD TO CART
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopItem);
