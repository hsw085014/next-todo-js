const Todo = (props) => {
    return (
        <div id="todo">
            <div>
                <h1 id="todoHeader">{props.task}</h1>
            </div>
        </div>
    )
}

export default Todo