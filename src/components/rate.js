import React from 'react';


export default function Rate(props) {
    if (props.rate) {
        return (
            <div>Rating {props.rate}</div>
        )
    }
    if (props.reviews) {
        let average = 0
        let count = 0
        props.reviews.forEach(element => {

            average = average + element.rating
            count = count + 1

        });
        average = average / count
        return (
            <div>Average rating {average.toFixed(2)}</div>
        )
    }
}