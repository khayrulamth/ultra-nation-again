import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((total,country)=>total+country.population,0);
    return (
        <div>
            <h3>This is cart:{totalPopulation}</h3>
        </div>
    );
};

export default Cart;