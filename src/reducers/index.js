import {combineReducers} from 'redux';

import country from './country';
import car from './car';
import instrument from './instrument';
import animal from './animal';

export default combineReducers({
    country,
    car,
    instrument,
    animal

})