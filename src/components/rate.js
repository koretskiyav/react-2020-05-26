import React from 'react';
import Star from "../icons/star";

export default function Rate(props) {

    return (
        <span>{props.description} {props.rating} <Star/></span>
    )
}