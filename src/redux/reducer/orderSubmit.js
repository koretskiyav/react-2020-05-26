import {FAILURE, ORDER_SUBMIT, REQUEST, SUCCESS} from "../constants";

const initialState = {
    loading: false,
    loaded: false,
    error: null,
    orderRequestText: ''
};

const orderSubmitReducer = (state = initialState, action) => {
    const { type, response, error } = action;

    switch (type) {
        case ORDER_SUBMIT + REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ORDER_SUBMIT + SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                orderRequestText: response
            };
        case ORDER_SUBMIT + FAILURE:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: error.response,
            };
        default:
            return state;
    }
};

export default orderSubmitReducer;