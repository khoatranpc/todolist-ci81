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
  const [isSearch, setIsSearch] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const [searchArray, setSearchArray] = useState([]);
  const [crrTodoEdit, setCrrTodoEdit] = useState({});

  const handleSearchNameTodo = (nameTodo) => {
    const filterSearch = initTodo.filter(item => item.name.toLowerCase().includes(nameTodo.toLowerCase()));
    /*
      nếu hàm filter phía bên trên trả ra kết quả:
        + không tìm thấy -> mảng rỗng + isSearch -> false
        + không tìm thấy -> mảng rỗng + isSearch -> true
        + nếu tìm thấy -> mảng != rỗng + isSearch -> true
    */
    setIsSearch(nameTodo);
    setSearchArray(filterSearch);
  }
  const handleCreateTodo = (e) => {
    e.preventDefault();
    if (!isUpdate) {
      const newTodo = {
        name: nameTodo,
        des: desTodo,
        status: false,
        id: initTodo.length
      }
      setInitTodo([...initTodo, newTodo]);
    } else {
      const idx = initTodo.findIndex((item) => item.id === crrTodoEdit.id);
      if (idx >= 0) {
        initTodo.splice(idx, 1, crrTodoEdit);
        setInitTodo([...initTodo]);
        setIsUpdate(false);
      }
    }
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
          <div className="search-input">
            <input type="text" name="search" placeholder="Type to search..."
              onChange={(e) => { handleSearchNameTodo(e.target.value) }}
            />
          </div>
          <form onSubmit={handleCreateTodo}>
            <input name="todoTitle" placeholder="Todo title" onChange={(e) => {
              if (!isUpdate) {
                setNameTodo(e.target.value);
              } else {
                setCrrTodoEdit({
                  ...crrTodoEdit,
                  name: e.target.value
                })
              }
            }}
              value={isUpdate && crrTodoEdit.name ? crrTodoEdit.name : ''}
            />
            {nameTodo.length < 6 && nameTodo && <p style={{ color: 'red' }}>Name todo must be large 6 character!</p>}
            <input name="todoDescription" className="midl-input" placeholder="Description"
              onChange={(e) => {
                if (!isUpdate) {
                  setDesTodo(e.target.value);
                } else {
                  setCrrTodoEdit({
                    ...crrTodoEdit,
                    des: e.target.value
                  })
                }
              }}
              value={isUpdate && crrTodoEdit.des ? crrTodoEdit.des : ''}
            />
            {desTodo.length < 6 && desTodo && <p style={{ color: 'red' }}>Description todo must be large 6 character!</p>}
            {!isUpdate ? <button>Create Todo</button> : <button>Update Todo</button>}
          </form>
        </div>
        <div className="middle-feat">
          <button>Clear Todos</button>
          <button>Mask As Completed</button>
        </div>
        <Table data={isSearch ? searchArray : initTodo}
          deleteTodo={handleDropTodo}
          showAlert={(todoItem) => {
            setCrrTodoEdit(todoItem);
            setIsUpdate(true);
          }}
          imgDoraemon={<img src={'https://thuthuatnhanh.com/wp-content/uploads/2019/05/hinh-anh-doremon-tha-bong-bay.jpg'} />}>
        </Table>
      </div>
    </div>
  );
}

export default App;
