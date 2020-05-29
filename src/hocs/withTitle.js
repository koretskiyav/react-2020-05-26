import React from 'react';

export default (WrappedComponent) => ({ title, ...props }) => {
  return (
    <div>
      <span>{title} </span>
      <WrappedComponent {...props} />
    </div>
  );
};
