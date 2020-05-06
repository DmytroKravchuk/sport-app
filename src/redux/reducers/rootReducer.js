import {combineReducers} from 'redux';
import {getExerciseTypeReducer} from './getExerciseTypesReducer';

const rootReducer = combineReducers({
	exerciseTypes: getExerciseTypeReducer
});

export default rootReducer;
