import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import { findByTestAttr } from '../test/testUtil';

Enzyme.configure({ adapter : new EnzymeAdapter() });

const setup = (props = {}) => {
    return shallow(<Congrats {...props}/>);
}

test('renders without error',() => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper,'component-congrats');
    expect(component.length).toBe(1);
});

it('renders no text when `success` prop is false', () => {
    const wrapper = setup({ success : false });
    const component = findByTestAttr(wrapper,'component-congrats');
    expect(component.text()).toBe('');
});

it('renders non-empty congrats message when `success` prop is false',() => {
    const wrapper = setup({ success : true });
    const message = findByTestAttr(wrapper,'congrats-message');
    expect(message.text().length).not.toBe(0);  // text converts the data into string.
})