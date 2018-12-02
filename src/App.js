import React, {Component} from 'react';
import './App.css';

import Header from './Components/Header/Header'
import MainContainer from './Components/MainContainer/MainContainer'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header></Header>
				<MainContainer></MainContainer>
            </div>
        );
    }
}

export default App;
