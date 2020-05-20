import React from "react";
import Header from "./Header";
import {connect} from "react-redux";

const PlayPage = ({backPath, getTitle, approachesProps, currentDay, currentApproaches}) => {
    return (
        <div className='play-page'>
            <div className='content'>
                <Header path={backPath} text={getTitle} isBack={false}/>
                <div className='play-block'>
                    <div className='play-wrapper'>
                        <div className="play"></div>
                    </div>
                    <div className='play-info'>
                        <p>Next workout:</p>
                        <p className='approach-description'>{`Day ${approachesProps.description} ${currentDay}`}</p>
                        <p>{`${currentApproaches.join(' ')}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const getTitle = (exerciseTypes, currentExerciseType) => {
    const currentType = exerciseTypes.filter(item => item.type === currentExerciseType);
    if(currentType[0]) {
        return currentType[0].title;
    }
}

const getApproachesInfo = (state) => {
    const currentProgram = state.programs.filter(item => item.type === state.currentExerciseType.currentExerciseType);
    let currentProgramList;
    if (currentProgram[0]) {
        currentProgramList = currentProgram[0].list;
    }
    const currentApproaches = currentProgramList.filter(item => item.id === state.currentProgramId.currentProgramId);
    return {
        description: currentApproaches[0] ? currentApproaches[0].description : '',
        approaches: currentApproaches[0] ? currentApproaches[0].list : ''
    }
}

const mapStateToProps = (state) => {
    return {
        backPath: `/${state.currentExerciseType.currentExerciseType}/${state.currentProgramId.currentProgramId}`,
        getTitle: getTitle(state.exerciseTypes, state.currentExerciseType.currentExerciseType),
        approachesProps: getApproachesInfo(state),
        currentDay: state.currentDay.currentDay,
        currentApproaches: state.currentApproaches.currentApproaches
    }
}
export default connect(mapStateToProps, null)(PlayPage);