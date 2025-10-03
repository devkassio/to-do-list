import { v4 } from 'uuid';
import { useState } from 'react';

import { FaTrash, FaRocket } from 'react-icons/fa6';
import { Container, TodoList, TodoListInput, Button, ListItem } from './styles';

function App() {
  const [list, setList] = useState([{ id: v4(), task: 'NADA PARA FAZER', finished: true }]);
  const [task, setTask] = useState('');

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleAdd() {
    setList([...list, { id: v4(), task: task, finished: false }]);
  }

  return (
    <Container>
      <TodoList>
        <TodoListInput onChange={handleChange} placeholder={'Digite algo'} value={task} />
        <Button onClick={handleAdd}>Adicionar</Button>

        <ul>
          {list.map((item) => (
            <ListItem isFinished={item.finished}>
              <FaRocket />
              <li key={item.id}>{item.task}</li>
              <FaTrash />
            </ListItem>
          ))}
        </ul>
      </TodoList>
    </Container>
  );
}

export default App;
