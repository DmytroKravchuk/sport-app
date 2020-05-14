import React from "react";

const ListBox = ({children}) => {
    return (
        <div className='list-program-wrapper'>
            <div className='list-program'>
                {children}
            </div>
        </div>
    )
}

export default ListBox;