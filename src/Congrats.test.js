import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr,checkProps } from '../test/testUtil';

const defaultProps = { success : false };

const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Congrats {...setupProps}/>);
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
});

test('does not throw warning with expected props', () => {
    const expectedProps = { success : true };
    checkProps(Congrats,expectedProps);
});