import find from 'lodash/find';
import {
    SORT_CAR
} from '../../actions/car';

const initialState = {
    columns: [
        'brand',
        'model',
        'year',
        'actions'
    ],
    headers: [
        {
            id: 'brand',
            label: 'marca',
            sort: 'desc'
        },
        {
            id: 'model',
            label: 'modelo',
            sort: 'desc'
        },
        {
            id: 'year',
            label: 'year',
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
        case SORT_CAR:
            const sortedOption = find(state.headers, header => header.id === action.sort.id);
            sortedOption.sort = sortedOption.sort === 'desc' ? 'asc' : 'desc';
            return state
        default:
            return state;
    }
}