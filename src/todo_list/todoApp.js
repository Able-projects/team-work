import "./todoApp.css"
import InputSection from "./components/InputSection"
import ListItems from "./components/ListItems"
import { useState } from "react"
import Nav from "../components/Nav"

function TodoApp() {
  const [inputText, setInputText] = useState("")
  const [array, setArray] = useState([])
  const [index, setIndex] = useState(0)
  const colorArr = ["#BBAFFD", "#008CFF", "#42E3C1"]

  function addToArray() {
    setIndex(index + 1)
    if (index === colorArr.length - 1) {
      setIndex(0)
    }
    setArray([...array, { text: inputText, color: colorArr[index] }])
    setInputText("") // To clean the input
  }

  function cleanList(myItem) {
    setArray(array.filter((e) => e !== myItem))
  }
  console.log(inputText)
  console.log(array)
  return (
    <div className="todoApp">
      <Nav />
      <h2>Plan list</h2>
      <InputSection inputText={inputText} setInputText={setInputText} addToArray={addToArray} />
      {array.map((e, key) => (
        <ListItems item={e} cleanList={cleanList} key={key} />
      ))}

      <div className="item">Items: {array.length}</div>
    </div>
  )
}

export default TodoApp
