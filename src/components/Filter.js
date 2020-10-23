import React from 'react'
import './Filter.css'

function Filter(props) {
	const { filterPrograms } = props
	console.log(React.version)
	return (
		<div className='filter'>
			<div className='filter-container'>
			<h4>Filters</h4>
			<p className='filter-tag'>Launch Year</p>
			<div className='year-grid'>
				<button onClick={filterPrograms} value='year'>2006</button>
				<button onClick={filterPrograms} value='year'>2007</button>
				<button onClick={filterPrograms} value='year'>2008</button>
				<button onClick={filterPrograms} value='year'>2009</button>
				<button onClick={filterPrograms} value='year'>2010</button>
				<button onClick={filterPrograms} value='year'>2011</button>
				<button onClick={filterPrograms} value='year'>2012</button>
				<button onClick={filterPrograms} value='year'>2013</button>
				<button onClick={filterPrograms} value='year'>2014</button>
				<button onClick={filterPrograms} value='year'>2015</button>
				<button onClick={filterPrograms} value='year'>2016</button>
				<button onClick={filterPrograms} value='year'>2017</button>
				<button onClick={filterPrograms} value='year'>2018</button>
				<button onClick={filterPrograms} value='year'>2019</button>
				<button onClick={filterPrograms} value='year'>2020</button>
			</div>
			<p className='filter-tag'>Successful Launch</p>
			<div className='success-launch'>
				<button onClick={filterPrograms} value='launch'>True</button>
				<button onClick={filterPrograms} value='launch'>False</button>
			</div>
			<p className='filter-tag'>Successful Landing</p>
			<div className='success-land'>
				<button onClick={filterPrograms} value='land'>True</button>
				<button onClick={filterPrograms} value='land'>False</button>
			</div>
		</div>
		</div>
	)
}

export default Filter