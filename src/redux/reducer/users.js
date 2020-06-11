import { normalizedUsers } from '../../fixtures';
import {SUBMIT} from "../constants";

const defaultUsers = normalizedUsers.reduce((acc, user) => (
    {...acc, [user.id]: user}
), {});

export default (users = defaultUsers, action) => {
    const { type, payload } = action;

    switch (type) {
        case SUBMIT:
            return {
                ...users,
                [payload.value.newUserId]: {
                    id: payload.value.newUserId,
                    name: payload.value.name
                }
            };
        default:
            return users;
    }
};