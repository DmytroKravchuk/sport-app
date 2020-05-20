import {SET_CURRENT_EXERCISE, SET_CURRENT_PROGRAM_ID, SET_CURRENT_APPROACHES, SET_CURRENT_DAY} from '../types';

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

export const setCurrentDay = (day) => {
    return {
        type: SET_CURRENT_DAY,
        payload: day
    }
}

export const setCurrentApproaches = (approaches) => {
    return {
        type: SET_CURRENT_APPROACHES,
        payload: approaches
    }
}
