import React from "react"

export default function InputSection(props) {
  return (
    <div className="inputSection">
      <div>
        <input onChange={(e) => props.setInputText(e.target.value)} type="text" placeholder="Enter your text" value={props.inputText} />
      </div>
      <div>
        <button onClick={() => props.addToArray()}>+</button>
      </div>
    </div>
  )
}
