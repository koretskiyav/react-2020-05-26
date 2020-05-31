import React from 'react';
import Rate from "./rate";

function Reviews(props) {

    return (
        <div className='reviews-grid'>
            <h3>Reviews</h3>

            {props.reviews.map((review) => (
                <div key={review.id} className='reviews-item'>
                    <p>{review.user} - "{review.text}"</p>
                    <p>Rating: {<Rate rating={review.rating} />}</p>
                </div>
            ))}
        </div>
    );
}

export default Reviews;