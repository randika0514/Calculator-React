import React, { useReducer } from 'react'
import "./style.css"
import digitButton from '../../components/DigitButton/digitButton'

export const ACTIONS = {
  ADD_DIGIT:'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${currentOperand || ""}${payload.digit}`
      }
  }
}

export default function () {

  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {})
  
  dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit: 1}})
  return (
    <div className='calculator-grid'>
        <div className='output'>
            <div className='previous-operand'>{previousOperand} {operation}</div>
            <div className='current-operand'>{currentOperand}</div>
        </div>
        <button className='span-two'>AC</button>
        <button>DEL</button>
      
        <operationButton digit="÷" dispatch={dispatch}/>

        <digitButton digit="1" dispatch={dispatch}/>
        <digitButton digit="2" dispatch={dispatch}/>
        <digitButton digit="3" dispatch={dispatch}/>
        <operationButton digit="*" dispatch={dispatch}/>
        <digitButton digit="4" dispatch={dispatch}/>
        <digitButton digit="5" dispatch={dispatch}/>
        <digitButton digit="6" dispatch={dispatch}/>
        <operationButton digit="+" dispatch={dispatch}/>
        <digitButton digit="7" dispatch={dispatch}/>
        <digitButton digit="8" dispatch={dispatch}/>
        <digitButton digit="9" dispatch={dispatch}/>
        <operationButton digit="-" dispatch={dispatch}/>
        <digitButton digit="." dispatch={dispatch}/>
        <digitButton digit="0" dispatch={dispatch}/>
        <button className='span-two'>=</button>
    </div>
  )
}
