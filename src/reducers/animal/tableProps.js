import find from 'lodash/find';
import {
    SORT_ANIMAL
} from '../../actions/animal';

const initialState = {
    columns: [
        'id',
        'firs_name',
        'createdAt',
        'actions'
    ],
    headers: [
        {
            id: 'id',
            label: 'Nombre',
            sort: 'desc'
        },
        {
            id: 'firs_name',
            label: 'SubNombre',
            sort: 'desc'
        },
        {
            id: 'createdAt',
            label: 'Creado',
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
        case SORT_ANIMAL:
            const sortedOption = find(state.headers, header => header.id === action.sort.id);
            sortedOption.sort = sortedOption.sort === 'desc' ? 'asc' : 'desc';
            return state
        default:
            return state;
    }
}