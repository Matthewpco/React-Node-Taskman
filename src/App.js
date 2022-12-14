import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'text1',
        day: 'day1',
        reminder: 'true'
    },
    {
      id: 2,
      text: 'text2',
      day: 'day2',
      reminder: 'true'
    },
    {
      id: 3,
      text: 'text3',
      day: 'day3',
      reminder: 'true'
    }
])

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  console.log(id)
  const newTask = { id, ...task} 
  console.log(newTask)
  setTasks([...tasks, newTask])
}
// Delete Task

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ?
   {...task,reminder:!task.reminder } : task
   )
   )
}
  return (
    <div className="container">
      <Header 
      onAdd={() => setShowAddTask
      (!showAddTask)} 
      showAdd={showAddTask}
      />

      {showAddTask &&  
      <AddTask onAdd={addTask}/>}
      
      { tasks.length > 0 ? ( <Tasks tasks={tasks} 
      onDelete={deleteTask}
      onToggle={toggleReminder}
      /> ) : (
        'No Tasks'
      )
    }
    </div>
  );
}

export default App;
