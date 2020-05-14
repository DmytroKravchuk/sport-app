import React from "react";
import Header from "./Header";
import ListBox from "./ListBox";
import {connect} from "react-redux";

const ProgramsDays = ({path, list = []}) => {
    return (
        <ListBox>
            <Header path={path} text='Program'/>
            {
                list.map(item => {
                    return <div key={item.id}>{`Day ${item.day}`}</div>
                })
            }
        </ListBox>
    )
}

const filterProgram = (state) => {
    const currentExerciseType = state.currentExerciseType.currentExerciseType;
    const currentProgramId = state.currentProgramId.currentProgramId;
    const programs = state.programs.filter(program => program.type === currentExerciseType);
    const program = programs[0].list.filter(item => item.id === currentProgramId);
    return program[0].list;
}

const mapStateToProps = (state) => {
    return {
        list: filterProgram(state)
    }
};
export default connect(mapStateToProps, null)(ProgramsDays);