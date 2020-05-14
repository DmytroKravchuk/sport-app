import {SET_CURRENT_EXERCISE, SET_CURRENT_PROGRAM_ID} from '../types';

export const setCurrentExerciseType = (exerciseType) => {
    return {
        type: SET_CURRENT_EXERCISE,
        payload: exerciseType
    }
}

export const setCurrentProgramID = (currentProgramId) => {
    return {
        type: SET_CURRENT_PROGRAM_ID,
        payload: currentProgramId
    }
}
