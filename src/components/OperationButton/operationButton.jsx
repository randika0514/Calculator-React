import React from 'react'
import { ACTIONS } from '../../pages/Cal/cal'

export default function operationButton(dispatch, operation) {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: {operation}})}>
            {operation}
        </button>
    )
}
