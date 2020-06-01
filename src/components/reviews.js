import React from "react";
import Rate from "./rate";


export default function Reviews(props) {
    const averageRating = props.reviews.reduce((sum, review) => sum + review.rating, 0) / props.reviews.length;
    return (
        <div>
            <span>Average Rating: <Rate description="" rating={averageRating}/></span>
            {props.reviews.map((review) => (
                <div>
                    <Rate key={review.id} rating={review.rating} description="Rating: "/>
                    <p>User: {review.user}</p>
                    <p>Review: {review.text}</p>
                </div>
            ))}
        </div>
    )
}