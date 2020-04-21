export const FETCH_INSTRUMENTS_REQUESTED = 'FETCH_INSTRUMENTS_REQUESTED'; 
export const FETCH_INSTRUMENTS_SUCCEEDED = 'FETCH_INSTRUMENTS_SUCCEEDED'; 

export const fetchInstrumentsRequested = filter => ({type: FETCH_INSTRUMENTS_REQUESTED, filter}) 
export const fetchInstrumentsSucceeded = (instruments, limit, total) => ({
    type: FETCH_INSTRUMENTS_SUCCEEDED,
    instruments, limit, total
}) 

export const SORT_INSTRUMENT = 'SORT_INSTRUMENT';
export const sortInstrument = sort => ({type: SORT_INSTRUMENT, sort});

export const DELETE_INSTRUMENTS_REQUESTED = 'DELETE_INSTRUMENTS_REQUESTED';
export const DELETE_INSTRUMENTS_SUCCEEDED = 'DELETE_INSTRUMENTS_SUCCEEDED';

export const deleteInstrumentsRequested = id => ({type: DELETE_INSTRUMENTS_REQUESTED, id});
export const deleteInstrumentsSucceeded = (instrument) => ({type: DELETE_INSTRUMENTS_SUCCEEDED,instrument});