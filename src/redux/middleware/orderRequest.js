import {FAILURE, REQUEST, SUCCESS} from "../constants";
import {replace} from "connected-react-router";


export default (store) => (next) => async (action) => {
    if(!action.orderSubmit) return next(action);

    const { orderSubmit, type, ...rest } = action;

    next({ ...rest, type: type + REQUEST });

    try {
        const data = await fetch('/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderSubmit)
        });

        if(data.status !== 200) {
            let error = new Error(data.statusText);
            error.response = await data.json();
            throw error
        } else {
            store.dispatch(replace('/order-success'));
            store.getState().order = {};
        }

        const response = await data.json();
        next({ ...rest, type: type + SUCCESS, response });

    } catch (error) {
        next({ ...rest, type: type + FAILURE, error});
        store.dispatch(replace('/order-error'));
    }
}