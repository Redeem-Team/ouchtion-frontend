import actions from "./actions";
import mutations from "./mutations";

const defaultState = () => ({
    isLoading: false,
    headers: [
        { text: "Image", value: "primaryImage", sortable: false, width: "96px" }, // 64 + 2*16 = 96
        { text: "Product Name", value: "name" },
        { text: "Ends at", value: "endTime" },
        { text: "Price (\u20AB)", value: "highestBidPrice" },
        { value: "isSold" },
        { text: "Actions", value: "actions", sortable: false, align: "end" },
    ],
    items: [],
});

export const AdminProductsDashboardModule = {
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
