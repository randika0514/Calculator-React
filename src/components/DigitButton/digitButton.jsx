import React from 'react'
import { ACTIONS } from '../../pages/Cal/cal'

export default function digitButton(dispatch, digit) {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit}})}>
            {digit}
        </button>
    )
}
