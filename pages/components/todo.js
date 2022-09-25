import { useState } from "react"

const Todo = (props) => {
    const[todoDesign, setTodoDeisign] = useState("todo-uncompleted");
    const[checkBoxDesign, setCheckBoxDesign] = useState("check-box-unChecked");

    return (
        <div  id={todoDesign}>
            <input type="checkbox" id={checkBoxDesign}></input>
          <h1>{props.task}</h1>

        </div>
    )
}

export default Todo