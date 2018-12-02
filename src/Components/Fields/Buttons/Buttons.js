import React from 'react'
import styles from "./Buttons.module.scss";

export const SubmitButton = () => {
    return <div className={styles.button}>
        <input type="submit" value="Submit"></input>
    </div>
}