import React from 'react';
import {shallow, mount} from 'enzyme';

import RegistrationForm from './RegistrationForm';
import {EmailField, PasswordField} from './../Fields/Inputs/InputFields'
import {SubmitButton} from './../Fields/Buttons/Buttons'
import PasswordCriteria from './../PasswordCriteria/PasswordCriteria';


const fakeEvent = {
    preventDefault: () => console.log('preventDefault'),
};

let wrapper;
let mountedWrapper;
beforeEach(() => {
    wrapper = shallow(<RegistrationForm/>)
    mountedWrapper = mount(<RegistrationForm/>)
})

it("validate RegistrationForm content", () => {

    const formField = wrapper.find('form');
    expect(formField.length).toBe(1);

    const emailField = wrapper.find(EmailField);
    expect(emailField.length).toBe(1);

    const passwordField = wrapper.find(PasswordField);
    expect(passwordField.length).toBe(1);

    const button = wrapper.find(SubmitButton);
    expect(button.length).toBe(1);

    const criteriaField = wrapper.find(PasswordCriteria);
    expect(criteriaField.length).toBe(1);

});

it('Validate RegistrationForm internal elements', () => {

    const formField = mountedWrapper.find('input');
    expect(formField.length).toBe(3);
    const textField = mountedWrapper.find('input[type="text"]');
    expect(textField.length).toBe(1);
    const passwordField = mountedWrapper.find('input[type="password"]');
    expect(passwordField.length).toBe(1);

})

it('Validate RegistrationForm email element & state', () => {

    const emailField = mountedWrapper.find('input[type="text"]');
    expect(mountedWrapper.state('email')).toEqual('')
    expect(mountedWrapper.state('emailValid')).toEqual(true)

    emailField.simulate('change', {
        target: {
            name: 'email',
            value: 'hello'
        }
    })
    expect(mountedWrapper.state('email')).toEqual('hello')
    expect(mountedWrapper.state('emailValid')).toEqual(false)
    
    emailField.simulate('change', {
        target: {
            name: 'email',
            value: ''
        }
    })
    expect(mountedWrapper.state('email')).toEqual('')
    expect(mountedWrapper.state('emailValid')).toEqual(true)

    emailField.simulate('change', {
        target: {
            name: 'email',
            value: 'nakul@gmail.com'
        }
    })
    expect(mountedWrapper.state('email')).toEqual('nakul@gmail.com')
    expect(mountedWrapper.state('emailValid')).toEqual(true)
})

it('Validate RegistrationForm password element & state', () => {

    const passwordField = mountedWrapper.find('input[type="password"]');
    mountedWrapper.setState({email: 'nakul@gmail.com'})

    expect(mountedWrapper.state('password')).toEqual('')
    expect(mountedWrapper.state('passwordValid')).toEqual(true)
    expect(mountedWrapper.state('passwordStrength')).toEqual(0)

    passwordField.simulate('change', {
        target: {
            name: 'password',
            value: 'hello'
        }
    })
    expect(mountedWrapper.state('password')).toEqual('hello')
    expect(mountedWrapper.state('passwordValid')).toEqual(false)
    expect(mountedWrapper.state('passwordStrength')).toEqual(0)
    
    passwordField.simulate('change', {
        target: {
            name: 'password',
            value: ''
        }
    })
    expect(mountedWrapper.state('password')).toEqual('')
    expect(mountedWrapper.state('passwordValid')).toEqual(true)
    expect(mountedWrapper.state('passwordStrength')).toEqual(0)

    passwordField.simulate('change', {
        target: {
            name: 'password',
            value: 'nakul'
        }
    })
    expect(mountedWrapper.state('password')).toEqual('nakul')
    expect(mountedWrapper.state('passwordValid')).toEqual(false)
    expect(mountedWrapper.state('passwordStrength')).toEqual(1)

    passwordField.simulate('change', {
        target: {
            name: 'password',
            value: 'hello@123'
        }
    })
    expect(mountedWrapper.state('password')).toEqual('hello@123')
    expect(mountedWrapper.state('passwordValid')).toEqual(false)
    expect(mountedWrapper.state('passwordStrength')).toEqual(2)
    
    passwordField.simulate('change', {
        target: {
            name: 'password',
            value: 'nakul!@#1122'
        }
    })
    expect(mountedWrapper.state('password')).toEqual('nakul!@#1122')
    expect(mountedWrapper.state('passwordValid')).toEqual(true)
    expect(mountedWrapper.state('passwordStrength')).toEqual(3)
})

it('Validate onSubmit check', () => {
    const instance = wrapper.instance();
    let result = instance.onSubmit(fakeEvent);
    expect(result).toEqual(false);
    wrapper.setState({email: 'nakul@gmail.com', passwordStrength:3})
    result = instance.onSubmit(fakeEvent);
    expect(result).toEqual(true);
});