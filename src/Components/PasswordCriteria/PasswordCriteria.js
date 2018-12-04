import React from 'react'

import PasswordCriteriaStrength from './PasswordCriteriaStrength'

const PasswordCriteria = (props) => {
    let content = <PasswordCriteriaStrength passwordStrength={props.passwordStrength}></PasswordCriteriaStrength>
    if (props.charCriteria) {
        //TODO: passsword strength indicator with char criteria can be enabled with 'charCriteria' props property.
        content = <div>PasswordCharContainer</div>
    }
    return <div>
        {content}
    </div>
}
export default PasswordCriteria;
