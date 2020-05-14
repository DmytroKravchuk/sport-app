import {combineReducers} from 'redux';
import {getExerciseTypeReducer} from './getExerciseTypesReducer';
import {getProgramsReducer} from "./programReducer";
import {currentExerciseReducer, currentProgramId} from "./appReducer";

const rootReducer = combineReducers({
	exerciseTypes: getExerciseTypeReducer,
	programs: getProgramsReducer,
	currentExerciseType: currentExerciseReducer,
	currentProgramId: currentProgramId
});

export default rootReducer;
