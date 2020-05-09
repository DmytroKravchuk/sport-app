import React from "react";
import {connect} from 'react-redux';
import Program from "./Program";
import Header from "./Header";

const Programs = ({programs, typeProgram, currentPath}) => {
    const program = filterProgramsType(programs, typeProgram);
    return (
        <div className='list-program-wrapper'>
            <div className='list-program'>
                <Header path={'/'}/>
                {
                    program[0].list.map(program => {
                        return <Program
                            title={program.title}
                            description={program.description}
                            id={program.id}
                            key={program.id}
                            currentPath={currentPath}
                        />
                    })
                }
            </div>
        </div>
    )
}

function filterProgramsType(programs, type) {
    return programs.filter(item => item.type === type);
}

const mapStateToProps = (state) => {
    return {
        programs: state.programs
    }
};

export default connect(mapStateToProps, null)(Programs);