import Header from "./header";
import Todo from "./todo";

const Board = (props) => {
    return (
        <div id="board">
            {props.taskList.map((task) =><Todo key="uniqueId1" task={task} />)}
        </div>
    )
}

export default Board;