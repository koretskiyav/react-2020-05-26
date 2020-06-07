import { renderHook, act } from '@testing-library/react-hooks';
import useAmount from './use-amount';

describe('useAmount', () => {
  let amountHook;

  function init(initialValue) {
    amountHook = renderHook(() => useAmount(initialValue)).result;
  }

  it('should init counter without initial value', () => {
    init();
    expect(amountHook.current.amount).toBe(0);
  });

  it('should init counter with initial value', () => {
    init(3);
    expect(amountHook.current.amount).toBe(3);
  });

  it('should increment', () => {
    init();
    act(() => amountHook.current.increment());
    expect(amountHook.current.amount).toBe(1);
  });

  it('should decrement', () => {
    init(4);
    act(() => amountHook.current.decrement());
    act(() => amountHook.current.decrement());
    expect(amountHook.current.amount).toBe(2);
  });

  it("shouldn't decrement with 0 amount", () => {
    init();
    act(() => amountHook.current.decrement());
    expect(amountHook.current.amount).toBe(0);
  });
});
