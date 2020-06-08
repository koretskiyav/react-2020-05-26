import { useState } from 'react';

export default function useToggle(initialState = false) {
  const [isToggled, setToggled] = useState(initialState);

  const toggle = () => setToggled(!isToggled);

  return { isToggled, toggle };
}
