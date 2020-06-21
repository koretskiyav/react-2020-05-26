import { SUCCESS, REQUEST, FAILURE } from '../constants';
import { push } from 'connected-react-router';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, CallSettings, type, ...rest } = action;
  const state = store.getState();
  const { pathname } = state.router.location;

  const hash = {
    '/checkout': () => {
      store.dispatch(push('/successful_order'));
    },
  };

  next({ ...rest, type: type + REQUEST });

  try {
    const response = await fetch(CallAPI, CallSettings || {}).then((res) =>
      res.json()
    );

    (hash[pathname] || (() => {}))();

    next({ ...rest, type: type + SUCCESS, response });
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error });
  }
};
