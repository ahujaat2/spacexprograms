import React from 'react'
import './Program.css'

function Program(props) {
	const { links, flight_number, mission_name, mission_id,
					launch_year, launch_success, rocket } = props.program
	const land_success = rocket.first_stage.cores[0].land_success
	return (
		<div className='prog'>
			<img src={links.mission_patch_small} alt="alternate" className='prog-img' />
			<div className='prog-details'>
				<p className='prog-title'><strong>{mission_name} # {flight_number}</strong></p>
				<strong>Mission Ids: </strong><ul className='mission-list'>
					{mission_id.length === 0 ? <span className='text'> None</span> : mission_id.map((id, index) => <li className='text' key={index}>{id}</li>)}
				</ul>
				<p><strong>Launch Year: </strong><span className='text'>{launch_year}</span></p>
				<p><strong>Successful Launch: </strong><span className='text'>{String(launch_success)}</span></p>
				<p><strong>Successful Landing: </strong> {!launch_success ? <span className='text'>N/A</span> :
				 land_success === null ? <span className='text'>N/A</span> :(<span className='text'>{String(rocket.first_stage.cores[0].land_success)}</span>)}</p>
			</div>
		</div>
	)
}

export default Program