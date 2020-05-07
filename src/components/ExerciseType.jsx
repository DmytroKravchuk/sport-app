import React from "react";
import {Link} from "react-router-dom";

const ExerciseType = ({title, path}) => {
    return (
        <Link to={path} className='exercise-type'>
            {title}
        </Link>
    )
}

export default ExerciseType;