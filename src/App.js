import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User one'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User two'},
    {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User three'},
    {rowNumber: 4, rowDescription: 'Wash the motocycle', rowAssigned: 'User four'}
  ]

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'new Todo',
        rowAssigned: 'Three'
    };
    todos.push(newTodo);
    console.log(todos);
    }
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          You Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
          <button className="btn btn-primary" onClick={addTodo} >
            Add new todo
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
