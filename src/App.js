import { useState } from 'react';
import Table from './components/Table';
import './App.css';

const dataTodos = [
  {
    name: 'Todo 1 hih',
    des: 'This is to do 1 .reactjsx',
    status: false,
    id: 0
  },
  {
    name: 'kkkooo hih',
    des: 'This is to do 1 .reactjsx',
    status: true,
    id: 1
  },
  {
    name: 'THOOI KHONG LAM GI CA',
    des: 'This is to do 1 .reactjsx',
    status: true,
    id: 2
  },
]

function App() {
  const [initTodo, setInitTodo] = useState(dataTodos);
  const [nameTodo, setNameTodo] = useState('');
  const [desTodo, setDesTodo] = useState('');
  const handleCreateTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      name: nameTodo,
      des: desTodo,
      status: false,
      id: initTodo.length
    }
    setInitTodo([...initTodo, newTodo]);
  }
  const handleDropTodo = (id) => {
    setInitTodo((prev) => {
      return prev.filter(item => item.id !== id);
    });
  }
  return (
    <div className="App">
      <h1>Todo application</h1>
      <div className="content-main">
        <div className="feat-top-form">
          <form onSubmit={handleCreateTodo}>
            <input name="todoTitle" placeholder="Todo title" onChange={(e) => {
              setNameTodo(e.target.value);
            }} />
            {nameTodo.length < 6 && nameTodo && <p style={{ color: 'red' }}>Name todo must be large 6 character!</p>}
            <input name="todoDescription" className="midl-input" placeholder="Description"
              onChange={(e) => {
                setDesTodo(e.target.value);
              }} />
            {desTodo.length < 6 && desTodo && <p style={{ color: 'red' }}>Description todo must be large 6 character!</p>}
            <button>Create Todo</button>
          </form>
        </div>
        <div className="middle-feat">
          <button>Clear Todos</button>
          <button>Mask As Completed</button>
        </div>
        <Table data={initTodo} deleteTodo={handleDropTodo} showAlert={() => { alert('his ae') }} imgDoraemon={<img src={'https://thuthuatnhanh.com/wp-content/uploads/2019/05/hinh-anh-doremon-tha-bong-bay.jpg'} />}>
        </Table>
      </div>
    </div>
  );
}

export default App;
