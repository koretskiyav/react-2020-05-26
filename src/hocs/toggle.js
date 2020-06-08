import React from 'react';
import useToggle from '../hooks/useToggle';

export default (WrappedComponent) => ({ initialState, ...props }) => {
  const toggleProps = useToggle(initialState);
  return <WrappedComponent {...props} {...toggleProps} />;
};
