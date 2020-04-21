import {
    all,
    takeEvery
} from 'redux-saga/effects';

import {FETCH_COUNTRIES_REQUESTED} from '../actions/country';
import {FETCH_CARS_REQUESTED} from '../actions/car';
import {FETCH_INSTRUMENTS_REQUESTED} from '../actions/instrument';
import {FETCH_ANIMALS_REQUESTED} from '../actions/animal';

import {fetchCountries} from './country'
import {fetchCars} from './car'
import {fetchInstruments} from './instrument'
import {fetchAnimals} from './animal'





export default function* root() {
    return yield all([
        takeEvery(FETCH_COUNTRIES_REQUESTED,fetchCountries),
        takeEvery(FETCH_ANIMALS_REQUESTED,fetchAnimals),
        takeEvery(FETCH_CARS_REQUESTED,fetchCars),
        takeEvery(FETCH_INSTRUMENTS_REQUESTED,fetchInstruments)
    ])
}
