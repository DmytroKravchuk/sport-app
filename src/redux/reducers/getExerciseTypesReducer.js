import {GET_EXERCISE_TYPES} from '../types';

const initialState = {
	exerciseTypes: []
};

const getExerciseTypeReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_EXERCISE_TYPES:
			return {
				...state,
				exerciseTypes: [...state.exerciseTypes, action.payload]
			};
		default: return state;
	}
};

export {getExerciseTypeReducer};
