import {combineReducers} from 'redux';
import {getExerciseTypeReducer} from './getExerciseTypesReducer';
import {getProgramsReducer} from "./programReducer";
import {currentDayApproaches, currentExerciseReducer, currentProgramId} from "./appReducer";

const rootReducer = combineReducers({
	exerciseTypes: getExerciseTypeReducer,
	programs: getProgramsReducer,
	currentExerciseType: currentExerciseReducer,
	currentProgramId: currentProgramId,
	currentDay: currentDayApproaches,
	currentApproaches: currentDayApproaches
});

export default rootReducer;
