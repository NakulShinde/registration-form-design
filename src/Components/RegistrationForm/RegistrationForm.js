import React, {Component} from 'react'
import {EmailField, PasswordField} from './../Fields/Inputs/InputFields'
import {SubmitButton} from './../Fields/Buttons/Buttons'

import styles from './RegistrationForm.module.scss'

class RegistrationForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            showCharCriteria: false,
            showStrengthCriteria: false
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onInputChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        console.log("onSubmit", this.state.email, this.state.password)
    }
    render() {
        return (
            <div className={styles.registration__form}>
                <form action="#">
                    <EmailField name="email" onChange={this.onInputChange} value={this.state.email}></EmailField>
                    <PasswordField name="password" onChange={this.onInputChange} value={this.state.password}></PasswordField>
                    <SubmitButton onClick={this.onSubmit}></SubmitButton>
                </form>
            </div>
        )
    }
}

export default RegistrationForm;