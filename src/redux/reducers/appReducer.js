import {SET_CURRENT_EXERCISE, SET_CURRENT_PROGRAM_ID} from "../types";

const initialState = {
    currentExerciseType: '',
    currentProgramId: ''
}

export const currentExerciseReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_EXERCISE:
            return {
                ...state,
                currentExerciseType: action.payload
            }
        default:
            return state
    }
}

export const currentProgramId = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PROGRAM_ID:
            return {
                ...state,
                currentProgramId: action.payload
            }
        default:
            return state
    }
}