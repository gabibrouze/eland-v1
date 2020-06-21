import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51GwYoaLfHty0bZ0nRjvjdvtt26nPpG5xqbGKNbIggenYut0s4L8VMnt1NCtGKfCXLohmyfS9Fsvf8gib1a1Q1w9300YP2KCTsH';
	const onToken = (token) => {
		console.log(token);
		alert('Payment succesful');
	};
	return (
		<StripeCheckout
			label='Pay Now'
			name='Eland Furnishers'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/MCd.svg'
			description={`Your total is R${price}`}
			amount={priceForStripe}
			panellabel='Pay Now'
			token={onToken}
			currency='ZAR'
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
