import React from 'react';

export default function Rate(props) {
  // console.log('props in rate.js - ', props);

  return (
    <div>
      <p>
        <b>{props.review.user}</b> rated it <b>{props.review.rating}</b> and
        wrote:
      </p>
      <p>"{props.review.text}"</p>
      <hr />
    </div>
  );
}
