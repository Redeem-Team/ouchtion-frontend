// This is overkill but acceptable
import store from "@/store";

export const showSnack = (message) => {
    store.dispatch("SnackbarModule/showSnackbar", {
        text: message,
    });
};
