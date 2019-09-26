import React from "react"
import TodoItem from "./components/TodoItem"
import todosData from "./todosData"
 
const App = () => {
  const todosComponent = todosData.map(item => <TodoItem key={item.id} item={item}/>)
  return (
    <div className="todo-list">
     {todosComponent} 
    </div>   
  )
}

export default App
