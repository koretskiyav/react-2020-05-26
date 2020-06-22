import React from 'react';
import { useLocation } from 'react-router-dom';
export default () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  console.log(query.get('success'));
  return <div>paid</div>;
};
