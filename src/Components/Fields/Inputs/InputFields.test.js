import React from 'react';
import {shallow} from 'enzyme';

import {EmailField, InputPassword, InputText, PasswordField} from './InputFields';

// create props to initialize
const props = {
    onChange: jest.fn(),
    name: 'someName',
    isValid: 'true',
    value: 'someValue'
}

const fakeEvent = {
    preventDefault: () => console.log('preventDefault'),
    target: {
        name: 'someName',
        value: 'someValue'
    }
};

it("validate InputText content", () => {
    let wrapper = shallow(<InputText {...props}/>)

    const input = wrapper.find('input');
    expect(input.length).toBe(1);
    const inputText = wrapper.find('input[type="text"]');
    expect(inputText.length).toBe(1);

    inputText.simulate('change', fakeEvent)
    expect(props.onChange).toHaveBeenCalled();
});

it("validate InputPassword content", () => {
    let wrapper = shallow(<InputPassword {...props}/>)

    const input = wrapper.find('input');
    expect(input.length).toBe(1);
    const inputPassword = wrapper.find('input[type="passwordw"]');
    expect(inputPassword.length).toBe(1);

    inputPassword.simulate('change', fakeEvent)
    expect(props.onChange).toHaveBeenCalled();
});

it("validate EmailField content", () => {
    let wrapper = shallow(<EmailField {...props}/>)

    const inputField = wrapper.find(InputText);
    expect(inputField.length).toBe(1);

    inputField.simulate('change', fakeEvent)
    expect(props.onChange).toHaveBeenCalled();
});

it("validate PasswordField content", () => {
    let wrapper = shallow(<PasswordField {...props}/>)

    const inputPassword = wrapper.find(InputPassword);
    expect(inputPassword.length).toBe(1);

    inputPassword.simulate('change', fakeEvent)
    expect(props.onChange).toHaveBeenCalled();
});