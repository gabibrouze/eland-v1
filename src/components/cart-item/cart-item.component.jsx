import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ product: { imageURL, price, name, quantity } }) => {
	return (
		<div className='cart-item'>
			<img src={imageURL} alt='item' />
			<div className='item-details'>
				<span className='name'>{name}</span>
				<span className='price'>
					{quantity} x R{price}
				</span>
			</div>
		</div>
	);
};

export default CartItem;
