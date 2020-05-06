import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
	return {
		exerciseTypes: state.exerciseTypes
	}
};

function StartPage({exerciseTypes}) {
	return (
		<div className='page start-page'>
			<h1>CHOOSE EXERCISE!</h1>
			{exerciseTypes.map(type => {
				return <div key={type.id}>{type.title}</div>
			})}
		</div>
	)
}

export default connect(mapStateToProps, null)(StartPage);
