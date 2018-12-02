import React, {Component} from 'react';

import styles from  './App.module.scss';

import Header from './Components/Header/Header'
import MainContainer from './Components/MainContainer/MainContainer'

class App extends Component {
    render() {
        return (
            <div className={styles.app}>
                <Header></Header>
				<MainContainer></MainContainer>
            </div>
        );
    }
}

export default App;
