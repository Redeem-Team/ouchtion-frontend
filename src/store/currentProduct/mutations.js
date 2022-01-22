export default {
    setProductId(state, id) {
        state.id = id;
    },

    setProductInfo(state, payload) {
        state.title = payload.name;
        state.startTime = payload.start_at;
        state.endTime = payload.end_at;

        state.bid.highestPrice = payload.current_price;
        state.bid.priceIncrement = payload.step_price;
        state.buyNow.price = payload.buy_price;

        state.isBlockedFromBidding = payload.is_sold;
    },

    setCategoriesOfProduct(state, categories) {
        state.categories = categories;
    },

    setSellerInfo(state, payload) {
        state.seller.username = payload.full_name;
        state.seller.rating = payload.point;
    },
    setHighestBidderInfo(state, payload) {
        state.bid.highestUser.username = payload.full_name;
        state.bid.highestUser.rating = payload.point;
    },

    setProductDescriptions(state, payload) {
        state.primaryDescription = payload.primaryDescription;
        state.secondaryDescriptions = payload.secondaryDescriptions;
    },
    appendProductDescriptions(state, payload) {
        state.secondaryDescriptions.push(payload);
    },

    setProductImages(state, payload) {
        state.primaryImage = payload.primaryImage;
        state.secondaryImages = payload.secondaryImages;
    },

    setProductBiddings(state, payload) {
        state.bid.biddings = payload.biddings;
        state.bid.isAutoBidEnabled = payload.isAutoBidEnabled;
    },

    setRelatedProducts(state, products) {
        state.relatedProducts = products;
    },

    setIsOnWatchlist(state, isOnWatchlist) {
        state.isOnWatchlist = isOnWatchlist;
    },

    // modal states
    setBidModalState(state, open) {
        state.bid.isModalOpen = open;
    },
    setBuyNowModalState(state, open) {
        state.buyNow.isModalOpen = open;
    },
    setAppendDescriptionModalState(state, open) {
        state.isAppendDescriptionOpen = open;
    },

    clearAll(state) {
        state = {
            id: null,
            title: null,
            seller: {
                username: null,
                rating: 0.0,
            },
            startTime: null,
            endTime: null,
            categories: [],
            primaryDescription: null,
            secondaryDescriptions: [],
            primaryImage: null,
            secondaryImages: [],
            bid: {
                highestPrice: null,
                highestUser: {
                    username: null,
                    rating: 0.0,
                },
                priceIncrement: null,
                biddings: [],
                isModalOpen: false,
                isAutoBidEnabled: false,
            },
            buyNow: {
                price: null,
                isModalOpen: false,
            },
            isBlockedFromBidding: false,
            isOnWatchlist: false,
            relatedProducts: [],
            isAppendDescriptionOpen: false,
        };
    },
};
