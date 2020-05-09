import {combineReducers} from 'redux';
import {getExerciseTypeReducer} from './getExerciseTypesReducer';
import {getProgramsReducer} from "./programReducer";

const rootReducer = combineReducers({
	exerciseTypes: getExerciseTypeReducer,
	programs: getProgramsReducer
});

export default rootReducer;
