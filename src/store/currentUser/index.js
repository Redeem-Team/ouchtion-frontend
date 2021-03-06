import actions from "./actions";
import mutations from "./mutations";

export const CurrentUserModule = {
    namespaced: true,

    state: {
        id: null,
        username: null,
        email: null,
        dob: null,
        address: null,
        rating: 0.0,
        role: null,
    },

    actions,
    mutations,
};
