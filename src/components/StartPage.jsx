import React from 'react';
import { connect } from 'react-redux'
import ExerciseType from "./ExerciseType";

const mapStateToProps = (state) => {
	return {
		exerciseTypes: state.exerciseTypes
	}
};

function StartPage({exerciseTypes}) {
	return (
		<div className='page start-page'>
			<h1>CHOOSE EXERCISE!</h1>
			<div className='exercise-type-wrapper'>
				{exerciseTypes.map(type => {
					return <ExerciseType
								key={type.id}
								title={type.title}
								path={type.path}
								exerciseType={type.type}
					/>
				})}
			</div>
		</div>
	)
}

export default connect(mapStateToProps, null)(StartPage);
