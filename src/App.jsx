import { v4 } from 'uuid';
import { useState } from 'react';

import { FaTrash, FaRocket } from 'react-icons/fa6';
import { Container, TodoList, TodoListInput, Button, ListItem } from './styles';

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleAdd() {
    if (task === '') return;
    setList([...list, { id: v4(), task: task, finished: false }]);
  }

  function finalizarTarefa(id) {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, finished: !item.finished };
      }
      return item;
    });
    setList(newList);
  }

  function deletarTarefa(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <Container>
      <TodoList>
        <TodoListInput onChange={handleChange} placeholder={'Digite algo'} value={task} />
        <Button onClick={handleAdd}>Adicionar</Button>

        <ul>
          {list.length === 0 && <h1>Nenhuma tarefa encontrada!</h1>}
          {list.map((item) => (
            <ListItem $isFinished={item.finished} key={item.id}>
              <FaRocket onClick={() => finalizarTarefa(item.id)} cursor={'grab'} />
              <li>{item.task}</li>
              <FaTrash onClick={() => deletarTarefa(item.id)} cursor={'grab'} />
            </ListItem>
          ))}
        </ul>
      </TodoList>
    </Container>
  );
}

export default App;
