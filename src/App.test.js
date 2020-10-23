import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import App from './App';
import Filter from './components/Filter'
import Header from './components/Header'
import Footer from './components/Footer'
import fetchMock from 'jest-fetch-mock'

Enzyme.configure({ adapter : new Adapter() })
fetchMock.enableMocks()

describe('App Component', () => {
	it('renders the react app', () => {
  		const wrapper = shallow(<App />)
  		expect(wrapper.exists()).toBeTruthy()
	});

	it('renders the Header, Footer, Filter and ProgramsList components', () => {
		const wrapper = shallow(<App />)
		const filter = wrapper.find(Filter)
		const header = wrapper.find(Header)
		const footer = wrapper.find(Footer)

		expect(filter.exists()).toBeTruthy()
		expect(header.exists()).toBeTruthy()
		expect(footer.exists()).toBeTruthy()
	})
})

