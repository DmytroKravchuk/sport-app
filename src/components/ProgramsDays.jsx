import React from "react";
import Header from "./Header";
import ListBox from "./ListBox";

const ProgramsDays = ({path, list = []}) => {
    return (
        <ListBox>
            <Header path={path} text='Program'/>
            {
                list.map(item => {
                    return <div>{`Day ${item.day}`}</div>
                })
            }
        </ListBox>
    )
}


export default ProgramsDays;