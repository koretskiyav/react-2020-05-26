import React from 'react';
import useAmount from '../hooks/use-amount';

export default (WrappedComponent) => ({ initialCount, ...props }) => {
  const amountProps = useAmount(initialCount);
  return <WrappedComponent {...props} {...amountProps} />;
};

// export default (WrappedComponent) => {
//   const HocComponent = (props) => {
//     const { amount, decrement, increment } = useAmount(5);
//     return (
//       <WrappedComponent
//         {...props}
//         amount={amount.toString()}
//         decrement={decrement}
//         increment={increment}
//       />
//     );
//   };

//   return HocComponent;
// };
