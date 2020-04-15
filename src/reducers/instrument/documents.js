import {
    FETCH_INSTRUMENTS_SUCCEEDED,
    FETCH_INSTRUMENTS_REQUESTED,
    SORT_INSTRUMENT
} from '../../actions/instrument';

import orderBy from 'lodash/orderBy'

const initialState = {
    loading: false,
    instruments: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_INSTRUMENTS_REQUESTED:
            return {...state, loading: false};
        case FETCH_INSTRUMENTS_SUCCEEDED:
            const {instruments, limit, total} = action;
            return {...state, loading: false, instruments, limit, total};
        case SORT_INSTRUMENT:
            return {
                ...state,
                loading: false,
                instruments: orderBy(state.cars,
                    [action.sort.id],
                    [action.sort.sort]
                )
            };
        default:
            return state;
    }
}