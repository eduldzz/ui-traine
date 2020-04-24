import {
    FETCH_COUNTRIES_SUCCEEDED,
    FETCH_COUNTRIES_REQUESTED,
    DELETE_COUNTRIES_SUCCEEDED,
    SORT_COUNTRY
} from '../../actions/country';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    countries: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_COUNTRIES_REQUESTED:
            return {...state, loading: true};
        case FETCH_COUNTRIES_SUCCEEDED:
            const {countries, limit, total} = action;
            return {...state, loading: false, countries, limit, total};    
        case SORT_COUNTRY:
            return {
                ...state,
                loading: false,
                countries: orderBy(state.countries,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
            case DELETE_COUNTRIES_SUCCEEDED:
                return {...countries, limit, total}

        default:
            return state;
    }
}