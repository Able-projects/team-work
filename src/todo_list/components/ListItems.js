import React from "react"

export default function ListItems(props) {
  console.log(props)
  return (
    <div className="listItem" style={{ backgroundColor: props.item.color }}>
      <p>{props.item.text}</p>
      <button onClick={() => props.cleanList(props.item)} className="btnRemove">
        x
      </button>
    </div>
  )
}
