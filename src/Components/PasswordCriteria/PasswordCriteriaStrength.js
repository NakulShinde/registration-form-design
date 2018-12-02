import React, {Component} from 'react'

import styles from './PasswordCriteriaStrength.module.scss'

const STRENGTH_LABELS = ['Invalid', 'Weak', 'Good', 'Strong']

class PasswordCriteriaStrength extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strength: 0
        }
        this.renderStrengthBar = this
            .renderStrengthBar
            .bind(this)
    }

    componentWillReceiveProps(newProps) {
        if (newProps !== this.state) {
            this.setState({strength: newProps.passwordStrength})
        }
    }

    renderStrengthBar(value, index) {
        const {strength} = this.state;
        const className = `${styles.strength} ${ (index < strength)
            ? styles[STRENGTH_LABELS[strength].toLowerCase()]
            : 'invalid'}`
        return <div key={index} className={className}></div>
    }

    render() {
        const {strength} = this.state;
        return (
            <React.Fragment>
                <div className={styles.strength__container}>
                    {[1, 2, 3].map(this.renderStrengthBar)}
                </div>
                <div className={styles.strength__label}>
                    Strength: {STRENGTH_LABELS[strength]}
                </div>
            </React.Fragment>
        )
    }
}

export default PasswordCriteriaStrength;