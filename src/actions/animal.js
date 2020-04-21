export const FETCH_ANIMALS_REQUESTED = 'FETCH_ANIMALS_REQUESTED';
export const FETCH_ANIMALS_SUCCEEDED = 'FETCH_ANIMALS_SUCCEEDED';

export const fetchAnimalsRequested = filter => ({type: FETCH_ANIMALS_REQUESTED, filter}) 
export const fetchAnimalsSucceeded = (animals, limit, total) => ({
    type: FETCH_ANIMALS_SUCCEEDED,
    animals, limit, total
})

export const SORT_ANIMAL = 'SORT_ANIMAL';
export const sortAnimal = sort => ({type: SORT_ANIMAL, sort});

export const DELETE_ANIMALS_REQUESTED = 'DELETE_ANIMALS_REQUESTED';
export const DELETE_ANIMALS_SUCCEEDED = 'DELETE_ANIMALS_SUCCEEDED';

export const deleteAnimalsRequested = id => ({type: DELETE_ANIMALS_REQUESTED, id});
export const deleteAnimalsSucceeded = (animal) => ({type: DELETE_ANIMALS_SUCCEEDED,animal});