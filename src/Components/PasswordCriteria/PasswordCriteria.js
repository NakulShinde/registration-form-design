import React from 'react'

import PasswordCriteriaStrength from './PasswordCriteriaStrength'

const PasswordCriteria = (props) => {
    let content = <PasswordCriteriaStrength passwordStrength={props.passwordStrength}></PasswordCriteriaStrength>
    if (props.charCriteria) {
        content = <div>PasswordCharContainer</div>
    }
    return <div>
        {content}
    </div>
}
export default PasswordCriteria;
