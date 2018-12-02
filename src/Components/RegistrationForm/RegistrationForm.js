import React from 'react'
import {EmailField, PasswordField} from './../Fields/Inputs/InputFields'
import {SubmitButton} from './../Fields/Buttons/Buttons'

import styles from './RegistrationForm.module.scss'

const RegistrationForm = () => {
    return <div className={styles.registration__form}>
        <form action="#">
            <EmailField></EmailField>
            <PasswordField></PasswordField>
            <SubmitButton></SubmitButton>
        </form>
    </div>
}

export default RegistrationForm;