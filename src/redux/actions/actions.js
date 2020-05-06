import {GET_EXERCISE_TYPES} from '../types';

export const getExerciseTypes = (exerciseTypes) => {
	return {
		type: GET_EXERCISE_TYPES,
		payload: exerciseTypes
	}
};
