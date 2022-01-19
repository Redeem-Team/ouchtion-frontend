import actions from "./actions";
import mutations from "./mutations";

export const UsersModule = {
    namespaced: true,

    state: {
        isLoading: false,
        usersHeaders: [
            { value: "dummyAvatar", sortable: false, width: "128px" },
            { text: "Full Name", value: "full_name" },
            { text: "Email", value: "email" },
            { text: "Role", value: "role" },
            { value: "actions", sortable: false, align: "end" },
        ],
        users: [],
    },

    actions,
    mutations,
};
