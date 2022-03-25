import React from "react"
import { moveClockwise, moveCounterClockwise } from '../state/action-creators'
import { connect } from "react-redux"

export function Wheel(props) {

  const { moveClockwise, moveCounterClockwise } = props; 

  const handleClockwise = evt => {
    const {value} = evt.target
    moveClockwise(value)
  }

  const handleCount = evt => {
    const { value } = evt.target
    moveCounterClockwise(value)
  }
  
  return (
    
    <div id="wrapper">
      <div id="wheel">
      <div className={`${props.wheel === 0 ? "cog active" : "cog"}`} style={{ "--i": 0 }}>
      {props.wheel === 0 ? "B" : ""} </div>
        
      <div className={`${props.wheel === 1 ? "cog active" : "cog"}`} style={{ "--i": 1 }}>
      {props.wheel === 1 ? "B" : ""} </div>
        
      <div className={`${props.wheel === 2 ? "cog active" : "cog"}`} style={{ "--i": 2 }}>
      {props.wheel === 2 ? "B" : ""} </div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        
        <button id="counterClockwiseBtn" onClick = {handleCount} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick = {handleClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    wheel: state.wheel.counter, 
  }
}

export default connect(mapState, {moveClockwise, moveCounterClockwise}) (Wheel)



