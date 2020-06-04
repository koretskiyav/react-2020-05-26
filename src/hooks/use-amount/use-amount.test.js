import { renderHook, act } from '@testing-library/react-hooks';
import useAmount from './use-amount';

test('should decrement counter until 0', () => {
  const { result } = renderHook(() => useAmount(2));

  act(() => result.current.decrement());
  expect(result.current.amount).toBe(1);

  act(() => result.current.decrement());
  expect(result.current.amount).toBe(0);

  act(() => result.current.decrement());
  expect(result.current.amount).toBe(0);
});
