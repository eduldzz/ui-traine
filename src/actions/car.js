export const FETCH_CARS_REQUESTED = 'FETCH_CARS_REQUESTED'; 
export const FETCH_CARS_SUCCEEDED = 'FETCH_CARS_SUCCEEDED'; 

export const fetchCarsRequested = filter => ({type: FETCH_CARS_REQUESTED, filter}) 
export const fetchCarsSucceeded = (cars, limit, total) => ({
    type: FETCH_CARS_SUCCEEDED,
    cars, limit, total
}) 

export const SORT_CAR = 'SORT_CAR';
export const sortCar = sort => ({type: SORT_CAR, sort});

export const DELETE_CARS_REQUESTED = 'DELETE_CARS_REQUESTED';
export const DELETE_CARS_SUCCEEDED = 'DELETE_CARS_SUCCEEDED';

export const deleteCarsRequested = id => ({type: DELETE_CARS_REQUESTED, id});
export const deleteCarsSucceeded = (car) => ({type: DELETE_CARS_SUCCEEDED,car});