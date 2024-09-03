import todo from './modules/todo';
import app from './modules/ui'
import './app.css'

const newTodo = todo('Run 2 miles', 'Run 2 miles around the park', '2021-09-30', 'High', 'Bring water');
console.log(newTodo.dueDate);
console.log(app)