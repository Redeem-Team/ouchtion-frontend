import axios from "axios";
import { API_ENDPOINTS } from "@/utils/constants";
import { getAuthHeader } from "@/api/utils/getAuthHeader";

export const appendDescription = async (product_id, description) => {
    const headers = await getAuthHeader();
    const payload = { description };
    return await axios.post(`${API_ENDPOINTS.PRODUCTS}/${product_id}/descriptions`, payload, { headers })
    .then(() => {
        return true;
    })
    .catch(()=>{
        return false;
    })
};
