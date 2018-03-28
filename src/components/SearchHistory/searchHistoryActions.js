export const types = {
    ADD_NEW_SEARCH_ITEM: 'ADD_NEW_SEARCH_ITEM'
};

export function addNewSearchItem(city) {
    return {
        type: types.ADD_NEW_SEARCH_ITEM,
        payload: { city }
    }
};
