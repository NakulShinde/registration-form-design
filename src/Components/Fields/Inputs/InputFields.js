import React from 'react'

import styles from './InputFields.module.scss'

const Label = (props) => <label className={styles.label__field}>{props.label}</label>;

export const InputText = (props) => {
    return <input
        className={styles.input__field}
        type="text"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}></input>
}

export const InputPassword = (props) => {
    return <input
        className={styles.input__field}
        type="password"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}></input>
}

export const EmailField = (props) => {
    return <div className='form__field'>
        <Label label="Email"></Label>
        <InputText
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            placeholder="Your email.."></InputText>
    </div>
}

export const PasswordField = (props) => {
    return <div className='form__field'>
        <Label label="Password"></Label>
        <InputPassword
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            placeholder="Your password.."></InputPassword>
    </div>
}