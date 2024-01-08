const initialState = {
    itemCount: 0
};

const cartCountReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                itemCount: state.itemCount + 1
            };
        default:
            return state;
    }
};

export default cartCountReducer;
