import React from 'react';
import Menu from './menu';
import Reviews from './reviews'
import Rate from './rate'

export default function Restaurant(props) {
    return (
        <div>
            <Rate reviews={props.restaurant.reviews} />
            <Menu menu={props.restaurant.menu} />
            <Reviews reviews={props.restaurant.reviews} />

        </div>
    );
}