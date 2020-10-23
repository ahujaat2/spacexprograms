import React from 'react'
import Program from './Program'

function Programs(props) {

	const { programList } = props
	return (
		<div className='programs'>
			{programList.length === 0 ?
				<div className='error'>No programs found!</div>
				:programList.map(program => {
					return(
						<Program key={program.flight_number} program={program}/>
					)
				})
			}
		</div>
	)
}

export default Programs