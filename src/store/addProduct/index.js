import actions from "./actions";
import mutations from "./mutations";

const defaultState = () => ({
    newProductId: null,
});

export const AddProductModule = {
    namespaced: true,

    state: defaultState(),

    actions,

    mutations: {
        ...mutations,
        clearAll(state) {
            Object.assign(state, defaultState());
        },
    },
};
