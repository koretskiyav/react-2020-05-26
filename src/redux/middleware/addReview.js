import { v4 as uuidv4 } from 'uuid';
import {SUBMIT} from "../constants";
import {submit} from "../actions";

export default (store) => (next) => (action) => {
    if(action.type === SUBMIT) {
        let newReviewId = uuidv4();
        let newUserId = uuidv4();

        action.payload.value = {
            ...action.payload.value,
            newReviewId,
            newUserId
        };

        next(submit(action.payload.value))
    } else {
        next(action);
    }
};