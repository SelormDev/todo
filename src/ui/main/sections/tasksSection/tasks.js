const currentTasks = [{ id: 1, title: "Task 1", completed: false }, { id: 2, title: "Task 2", completed: false }, { id: 3, title: "Task 3", completed: true }, { id: 4, title: "Task 4", completed: true }, { id: 5, title: "Task 5", completed: false }]

const completedTasks = currentTasks.filter(task => task.completed)

export { currentTasks, completedTasks };