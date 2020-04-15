export const FETCH_INSTRUMENTS_REQUESTED = 'FETCH_INSTRUMENTS_REQUESTED'; 
export const FETCH_INSTRUMENTS_SUCCEEDED = 'FETCH_INSTRUMENTS_SUCCEEDED'; 

export const fetchInstrumentsRequested = filter => ({type: FETCH_INSTRUMENTS_REQUESTED, filter}) 
export const fetchInstrumentsSucceeded = (instruments, limit, total) => ({
    type: FETCH_INSTRUMENTS_SUCCEEDED,
    instruments, limit, total
}) 

export const SORT_INSTRUMENT = 'SORT_INSTRUMENT';
export const sortInstrument = sort => ({type: SORT_INSTRUMENT, sort});
