import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Filter from './Filter';

Enzyme.configure({ adapter : new Adapter() })

describe('Filter', () => {
	it('renders the Filters header', () => {
		const wrapper = shallow(<Filter />)
		const filterHeader = wrapper.find('h4')
		expect(filterHeader.text()).toBe('Filters')
	})

	it('renders the buttons for years', () => {
		const wrapper = mount(<Filter />)
		const buttons = wrapper.find('div.year-grid button')
		expect(buttons).toHaveLength(15)
	})

	it('renders the buttons for Successful Launch', () => {
		const wrapper = mount(<Filter />)
		const buttons = wrapper.find('div.success-launch button')
		expect(buttons).toHaveLength(2)
	})

	it('renders the buttons for Successful Landing', () => {
		const wrapper = mount(<Filter />)
		const buttons = wrapper.find('div.success-land button')
		expect(buttons).toHaveLength(2)
	})

	it('renders the Launch Year header', () => {
		const wrapper = shallow(<Filter />)
		const launchYear = wrapper.find('p.filter-tag').at(0)
		expect(launchYear.text()).toBe('Launch Year')
	})

	it('renders the Successful Launch header', () => {
		const wrapper = shallow(<Filter />)
		const successLaunch = wrapper.find('p.filter-tag').at(1)
		expect(successLaunch.text()).toBe('Successful Launch')
	})

	it('renders the Successful Landing header', () => {
		const wrapper = shallow(<Filter />)
		const successLand = wrapper.find('p.filter-tag').at(2)
		expect(successLand.text()).toBe('Successful Landing')
	})
})