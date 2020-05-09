import {GET_PROGRAMS} from "../types";

const initialState = {
    programs: []
}

function getProgramsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PROGRAMS:
            return {
                state,
                programs: [...state.programs, action.payload]
            }
        default:
            return state
    }
}

export {getProgramsReducer};