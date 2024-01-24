import { useState } from 'react';
import TaskInput from './TaskInput';
import { ITask } from '../types/tasksTypes';
import TaskList from './TaksList';

function TaskBoard() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddTask(value: string) {
    setTasks([...tasks, { value: value, checked: false }]);
  }

  function handleCheckTask(index: number) {
    const nextTasks = [
      ...tasks.slice(0, index),
      { ...tasks[index], checked: !tasks[index].checked },
      ...tasks.slice(index + 1),
    ];
    setTasks(nextTasks);
  }

  return (
    <div className='taskboard wrapper'>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList onTaskCheck={handleCheckTask} tasks={tasks} />
    </div>
  );
}

export default TaskBoard;
