import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header';

Enzyme.configure({ adapter : new Adapter() })

describe('Header', () => {
	it('renders the Filters header', () => {
		const wrapper = shallow(<Header />)
		const header = wrapper.find('h2')
		expect(header.text()).toBe('SpaceX Launch Programs')
	})
})