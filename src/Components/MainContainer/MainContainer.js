import React from 'react'

import RegistrationContainer from './../RegistrationContainer/RegistrationContainer'
 
import styles from './MainContainer.module.scss'

const MainContainer = () => {
    return <main className={styles.main__container}>
        <RegistrationContainer></RegistrationContainer>
    </main>
}

export default MainContainer;