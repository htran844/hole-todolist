import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useCallback, useState } from "react";
import { v4 } from "uuid";
function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, settextInput] = useState("");
  const onTextInputChange = useCallback((e) => {
    settextInput(e.target.value);
  }, []);
  const onAddbtnClick = useCallback(
    (e) => {
      setTodoList([
        ...todoList,
        { id: v4(), name: textInput, isCompleted: false },
      ]);
      settextInput("");
    },
    [textInput, todoList]
  );
  return (
    <div>
      <h3>Danh sách cần làm</h3>
      <InputGroup>
        <FormControl
          placeholder="Nhập việc cần làm"
          aria-label="Todo"
          value={textInput}
          onChange={onTextInputChange}
        />
        <Button
          className="btn btn-primary text-dark"
          variant="outline-secondary"
          id="button-addon1"
          onClick={onAddbtnClick}
        >
          Thêm
        </Button>
      </InputGroup>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
