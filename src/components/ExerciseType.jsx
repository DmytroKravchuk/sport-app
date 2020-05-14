import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setCurrentExerciseType} from "../redux/actions/actions";

const ExerciseType = ({title, path, exerciseType, setCurrentExerciseType}) => {
    return (
        <Link to={path} className='exercise-type' onClick={() => setCurrentExerciseType(exerciseType)}>
            {title}
        </Link>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentExerciseType: (exerciseType) => {
            dispatch(setCurrentExerciseType(exerciseType))
        }
    }
}

export default connect(null, mapDispatchToProps)(ExerciseType);