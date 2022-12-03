import './App.css';
import TodoTable from './components/TodoTable';
import TodoRowItem from './components/TodoRowItem';

function App() {

  const todos = [
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User one'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User two'},
    {rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User three'}
  ]

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          You Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
