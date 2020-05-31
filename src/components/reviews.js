import React from 'react';
import Rate from './rate'


export default function Reviews(props) {
    return (
        <div>
            <div>Reviews:</div>
            <div>
                {props.reviews.map((review) => (
                    <div key={review.id}> {review.user}:{review.text}
                        <Rate rate={review.rating} />
                    </div>


                ))}
            </div>
        </div >
    );
};


