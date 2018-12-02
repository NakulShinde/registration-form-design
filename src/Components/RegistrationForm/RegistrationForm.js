import React, {Component} from 'react'
import zxcvbn from 'zxcvbn'

import {EmailField, PasswordField} from './../Fields/Inputs/InputFields'
import {SubmitButton} from './../Fields/Buttons/Buttons'

import styles from './RegistrationForm.module.scss'
import PasswordCriteria from './../PasswordCriteria/PasswordCriteria';

class RegistrationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            showCharCriteria: false,
            showStrengthCriteria: false,
            passwordValid: false,
            passwordStrength: 0
        }
        this.onInputChange = this
            .onInputChange
            .bind(this)
        this.onSubmit = this
            .onSubmit
            .bind(this)
    }

    onInputChange(e) {
        let stateObj = {};
        if (e.target.name === 'password') {
            //calculate password strength with current value of password field
            const strengthObject = zxcvbn(e.target.value, this.state.email);
            // score returned from zxcvbn function is range of 0 to 4. Range to consider is 0
            // to 3 only
            stateObj.passwordStrength = (strengthObject.score > 3)
                ? 3
                : strengthObject.score;
            stateObj.passwordValid = (stateObj.passwordStrength > 2)? true : false;
        }
        stateObj[e.target.name] = e.target.value;
        this.setState({
            ...stateObj
        })
    }
    onSubmit(e) {
        e.preventDefault();
    }
    render() {
        return (
            <div className={styles.registration__form}>
                <form action="#">
                    <EmailField name="email" onChange={this.onInputChange} value={this.state.email}></EmailField>
                    <PasswordField
                        name="password"
                        onChange={this.onInputChange}
                        value={this.state.password}></PasswordField>
                    <PasswordCriteria passwordStrength={this.state.passwordStrength}></PasswordCriteria>
                    <SubmitButton onClick={this.onSubmit} isEnabled={this.state.passwordValid}></SubmitButton>
                </form>
            </div>
        )
    }
}

export default RegistrationForm;