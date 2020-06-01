import React from 'react';
import style from "./star.module.css";

export default function Star() {
    return (
        <svg
             width="20px"
             height="20px"
             viewBox="0 0 32 32"
             enable-background="new 0 0 32 32"
             xmlns="http://www.w3.org/2000/svg"
             className={style.star}>

<path  d="M31.881,12.557c-0.277-0.799-0.988-1.384-1.844-1.511l-8.326-1.238l-3.619-7.514
	C17.711,1.505,16.896,1,16,1c-0.896,0-1.711,0.505-2.092,1.294l-3.619,7.514l-8.327,1.238c-0.855,0.127-1.566,0.712-1.842,1.511
	c-0.275,0.801-0.067,1.683,0.537,2.285l6.102,6.092l-1.415,8.451C5.2,30.236,5.569,31.09,6.292,31.588
	C6.689,31.861,7.156,32,7.623,32c0.384,0,0.769-0.094,1.118-0.281L16,27.811l7.26,3.908C23.609,31.906,23.994,32,24.377,32
	c0.467,0,0.934-0.139,1.332-0.412c0.723-0.498,1.09-1.352,0.947-2.203l-1.416-8.451l6.104-6.092
	C31.947,14.239,32.154,13.357,31.881,12.557z M23.588,19.363c-0.512,0.51-0.744,1.229-0.627,1.934l1.416,8.451l-7.26-3.906
	c-0.348-0.188-0.732-0.281-1.118-0.281c-0.384,0-0.769,0.094-1.117,0.281l-7.26,3.906l1.416-8.451
	c0.118-0.705-0.114-1.424-0.626-1.934l-6.102-6.092l8.326-1.24c0.761-0.113,1.416-0.589,1.743-1.268L16,3.251l3.62,7.513
	c0.328,0.679,0.982,1.154,1.742,1.268l8.328,1.24L23.588,19.363z"/>
</svg>
    )

}