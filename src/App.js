import React, { Component } from 'react';
import './App.css';
import Filter from './components/Filter'
import Programs from './components/Programs'
import Header from './components/Header'
import Footer from './components/Footer'

class App extends Component {

  constructor(){
    super()
    this.state = {
      isLoading: false,
      error: null,
      programs: [],
      filter: {
        year: '',
        launch: null,
        land: null
      }
    }
  }

  componentDidMount(){
    this.setState({ isLoading: true })
    fetch('https://api.spaceXdata.com/v3/launches?limit=100')
    .then(response => response.json())
    .then(data => {
      this.setState({ programs: data})
      this.setState({ isLoading: false })
    })
    .catch(error => {
      this.setState({ error: error.message })
      this.setState({ isLoading: false })      
    })
  }

  filterPrograms = (event) => {
    event.target.classList.add('clicked-btn')
    let tempFilter = this.state.filter
    if (event.target.value === 'launch'){
      tempFilter.launch = event.target.innerText === 'False' ? false : true
    }
    if (event.target.value === 'year'){
      tempFilter.year = event.target.innerText
    }
    if (event.target.value === 'land'){
      tempFilter.land = event.target.innerText === 'False' ? false : true
    }
    this.setState({filter : tempFilter})
    let URL = ''
    let yearFilter = this.state.filter.year !== '' ? `&launch_year=${this.state.filter.year}` : ''
    let launchFilter = this.state.filter.launch !== null ? `&launch_success=${this.state.filter.launch}` : ''
    let landFilter = this.state.filter.land !== null ? `&land_success=${this.state.filter.land}` : ''
    URL = `https://api.spaceXdata.com/v3/launches?limit=100${launchFilter}${landFilter}${yearFilter}`
    fetch(URL)
    .then(response => response.json())
    .then(data => this.setState({programs : data}))
  }

  render(){
    return (
      <div className="App">
        <Header />
        <div className='programs-body'>
          <Filter filterPrograms={this.filterPrograms}/>
          {this.state.isLoading && this.state.error === null ? 
            (<div className="spinner"></div>)
            : this.state.error ?
            (<div className="error">Ooops! {this.state.error}...</div>)
            : (<Programs programList={this.state.programs}/>)
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
