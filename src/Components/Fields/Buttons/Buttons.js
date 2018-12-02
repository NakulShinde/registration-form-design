import React from 'react'
import styles from "./Buttons.module.scss";

export const SubmitButton = (props) => {
    return <div className={styles.button}>
        <input type="submit" value="Submit" onClick={props.onClick} disabled={!props.isEnabled}></input>
    </div>
}