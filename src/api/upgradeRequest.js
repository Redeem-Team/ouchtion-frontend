import { API_ENDPOINTS } from "@/utils/constants";
import axios from "axios";
import { getAuthHeader } from "./utils/getAuthHeader";

export async function getUpgradeRequests(accessToken) {
    return await axios
        .get(`${API_ENDPOINTS.USERS}` + `/admin/request`, {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        })
        .then((response) => {
            return response.data;
        });
}

export async function deleteUpgradeRequests(accessToken, id) {
    return await axios
        .delete(`${API_ENDPOINTS.USERS}` + `/admin/request/${id}`, {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        })
        .then((response) => {
            return response.data;
        });
}

export async function requestSeller(reason) {
    const headers = await getAuthHeader();
    return await axios
        .post(`${API_ENDPOINTS.USERS}` + `/requestSeller`, {reason:reason}, {
            headers
        })
        .then(() => true)
        .catch(() => false);
}
