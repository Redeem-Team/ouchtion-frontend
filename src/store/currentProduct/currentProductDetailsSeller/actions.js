import { acceptBidRequest, getAllBidRequests, rejectBidRequest } from "@/api/bid";
import { appendDescription } from "@/api/productDescription";
import { getUserWithPoint } from "@/api/user";
import { showSnack } from "@/utils/showSnack";
import { today } from "@/utils/timeUtils";

export default {
    async getBidderRequests({ commit, rootState }) {
        let requests = await getAllBidRequests(rootState.CurrentProductInfoModule.id);
        if (requests) {
            let data = [];
            requests.forEach(async (request) => {
                const { point } = await getUserWithPoint(request.user_id);
                data.push({
                    requestId: request.request_id,
                    userId: request.user_id,
                    username: request.full_name,
                    rating: point,
                });
            });
            commit("setBidderRequests", data);
        } else {
            showSnack(`Failed to get bidding requests for product id = ${rootState.CurrentProductInfoModule.id}`);
        }
    },

    async acceptBidderRequest({ commit, state, rootState }, requestId) {
        // find request object corresponding to request_id
        const targetRequest = find(state.bidRequests.items, { requestId });
        let result = await acceptBidRequest(requestId, targetRequest.userId, rootState.CurrentProductInfoModule.id);
        if (result) {
            commit("removeBidderRequest", requestId);
            showSnack(`Accepted request id = ${requestId}`);
        } else {
            showSnack(`Failed to accept request id = ${requestId}`);
        }
    },

    async rejectBidderRequest({ commit, state, rootState }, requestId) {
        // find request object corresponding to request_id
        const targetRequest = find(state.bidRequests.items, { requestId });
        let result = await rejectBidRequest(requestId, targetRequest.userId, rootState.CurrentProductInfoModule.id);
        if (result) {
            commit("removeBidderRequest", requestId);
            showSnack(`Rejected request id = ${requestId}`);
        } else {
            showSnack(`Failed to reject request id = ${requestId}`);
        }
    },

    async appendProductDescription({ commit }, { product_id, description }) {
        let result = await appendDescription(product_id, description);
        if (result) {
            let payload_description = {
                description,
                upload_date: today(),
                isInit: false,
            };
            commit("CurrentProductDescriptionsModule/addSecondary", payload_description, { root: true });
            showSnack(`Description appended.`);
        } else {
            showSnack(`Failed to append description.`);
        }
    },
};
