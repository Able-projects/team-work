import React from "react"
import Nav from "./Nav"

export default function Main() {
  return (
    <div>
      <Nav />
      <div className="main_todo_list"></div>
      <div className="main_wheather"></div>
      <div className="main_calculator"></div>
      <div className="main_movies"></div>
    </div>
  )
}
