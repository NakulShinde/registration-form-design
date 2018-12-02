import React from 'react'

import RegistrationForm from './../RegistrationForm/RegistrationForm'

import styles from './RegistrationContainer.module.scss'

const RegistrationContainer = () => {
    return <div className={styles.registration__container}>
        <RegistrationForm></RegistrationForm>
    </div>
}

export default RegistrationContainer;