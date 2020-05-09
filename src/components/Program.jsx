import React from "react";
import {Link} from "react-router-dom";

 const Program = ({title, description, id, currentPath}) => {
    return (
        <Link to={`${currentPath}/${id}`}>
            <div className='program-title'>{title}</div>
            <div className='program-description'>{description}</div>
        </Link>
    )
}

export default Program;