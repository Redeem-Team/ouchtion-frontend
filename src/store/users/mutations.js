import { findIndex } from "lodash-es";
import { ROLES } from "@/utils/constants";

export default {
    setIsLoading(state, loading) {
        state.isLoading = loading;
    },
    setUsers(state, users) {
        state.users = users;
    },
    createUser(state, payload) {
        state.users.push(payload);
    },
    updateUser(state, payload) {
        const targetIndex = findIndex(state.users, { id: payload.id });
        const targetItem = {
            ...state.users[targetIndex],
            full_name: payload.full_name,
            email: payload.email,
            address: payload.address,
            dob: payload.dob,
        };
        state.users.splice(targetIndex, 1, targetItem);
    },
    deleteUser(state, id) {
        const targetIndex = findIndex(state.users, { id });
        state.users.splice(targetIndex, 1);
    },
    setUserAsBidder(state, id) {
        const targetIndex = findIndex(state.users, { id });
        const targetItem = {
            ...state.users[targetIndex],
            role: ROLES.BIDDER,
        };
        state.users.splice(targetIndex, 1, targetItem);
    },
    setUserAdSeller(state, id) {
        const targetIndex = findIndex(state.users, { id });
        const targetItem = {
            ...state.users[targetIndex],
            role: ROLES.SELLER,
        };
        state.users.splice(targetIndex, 1, targetItem);
    },
};
