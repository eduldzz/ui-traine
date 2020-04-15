import find from 'lodash/find';
import {
    SORT_INSTRUMENT
} from '../../actions/instrument';

const initialState = {
    columns: [
        'instrument',
        'hexcode',
        'family',
        'actions'
    ],
    headers: [
        {
            id: 'instrument',
            label: 'instrument',
            sort: 'desc'
        },
        {
            id: 'hexcode',
            label: 'hexcode',
            sort: 'desc'
        },
        {
            id: 'family',
            label: 'family',
            sort: 'desc'
        },
        {
            id: 'actions',
            label: 'Acciones'
        }
    ]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SORT_INSTRUMENT:
            const sortedOption = find(state.headers, header => header.id === action.sort.id);
            sortedOption.sort = sortedOption.sort === 'desc' ? 'asc' : 'desc';
            return state
        default:
            return state;
    }
}