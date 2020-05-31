import React from 'react';
import Menu from "./menu";
import Reviews from "./reviews";
import Rate from "./rate";

function Restaurant(props) {
    const numberAllReviews = props.reviews.length;

    let sumAllReviews = props.reviews.reduce((sum, review) => (
        sum + review.rating
    ), 0);

    let averageRating = (sumAllReviews / numberAllReviews).toFixed(1);

    return (
        <div>
            <h3>Average rating: <Rate rating={averageRating}/></h3>
            <Menu menu={props.menu}/>
            <Reviews reviews={props.reviews}/>
        </div>
    );
}

export default Restaurant;