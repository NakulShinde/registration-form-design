import React from 'react'

import styles from './InputFields.module.scss'

const Label = (props) => <label className={styles.label__field}>{props.label}</label>;

export const InputText = (props) => {
    return <input
        className={styles.input__field}
        type="text"
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}></input>
}

export const InputPassword = (props) => {
    return <input
        className={styles.input__field}
        type="password"
        name={props.name}
        placeholder={props.placeholder}></input>
}

export const EmailField = () => {
    return <div className='form__field'>
        <Label label="Email"></Label>
        <InputText id="email" name="email" placeholder="Your email.."></InputText>
    </div>
}

export const PasswordField = () => {
    return <div className='form__field'>
        <Label label="Password"></Label>
        <InputPassword id="password" name="password" placeholder="Your password.."></InputPassword>
    </div>
}