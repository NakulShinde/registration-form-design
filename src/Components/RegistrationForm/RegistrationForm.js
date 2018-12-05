import React, {Component} from 'react'
import zxcvbn from 'zxcvbn'

import {EmailField, PasswordField} from './../Fields/Inputs/InputFields'
import {SubmitButton} from './../Fields/Buttons/Buttons'

import styles from './RegistrationForm.module.scss'
import PasswordCriteria from './../PasswordCriteria/PasswordCriteria';

const EMAIL_CHECK_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ig;
const PSSWORD_MAX_STRENGTH = 3;
const VALID_PASSWORD_STRENGTH = 3;
class RegistrationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            showCharCriteria: false,
            showStrengthCriteria: false,
            emailValid: true,
            passwordValid: true,
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

        if (e.target.name === 'email') {
            stateObj.emailValid = EMAIL_CHECK_REGEX.test(e.target.value)
                ? true
                : (e.target.value === '')
                    ? true
                    : false;
        }

        if (e.target.name === 'password') {
            //calculate password strength with current value of password field
            const strengthObject = zxcvbn(e.target.value, this.state.email);
            // score returned from zxcvbn function is range of 0 to 4. Range to consider is
            // 0 to 3 only
            stateObj.passwordStrength = (strengthObject.score > PSSWORD_MAX_STRENGTH)
                ? 3
                : strengthObject.score;
            stateObj.passwordValid = (strengthObject.score >= VALID_PASSWORD_STRENGTH)
                ? true
                : (e.target.value === '')
                    ? true
                    : false;
        }

        stateObj[e.target.name] = e.target.value;

        this.setState({
            ...stateObj
        })
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.state.email !== '' && this.state.passwordStrength >= VALID_PASSWORD_STRENGTH) {
            console.log('Registration Submit Success')
            return true;
        }
        return false;
    }
    render() {
        const {email, emailValid, password, passwordStrength, passwordValid} = this.state;
        return (
            <div className={styles.registration__form}>
                <form action="#">
                    <EmailField
                        name="email"
                        onChange={this.onInputChange}
                        value={email}
                        isValid={emailValid}></EmailField>
                    <PasswordField
                        name="password"
                        onChange={this.onInputChange}
                        value={password}
                        isValid={passwordValid}></PasswordField>
                    <PasswordCriteria passwordStrength={passwordStrength}></PasswordCriteria>
                    <SubmitButton onClick={this.onSubmit} isEnabled={emailValid && passwordValid}></SubmitButton>
                </form>
            </div>
        )
    }
}

export default RegistrationForm;