import './task-board.scss';
import { useState } from 'react';
import { ITask } from '../../types/tasksTypes';
import TaskList from '../task-list/TaskList';
import Input from '../ui/input/Input';

function TaskBoard() {
  const [taskValue, setTaskValue] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleAddTask = (value: string) => {
    setTaskValue('');
    setTasks((prevTasks) => [...prevTasks, { value: value, checked: false }]);
  };

  const handleCheckTask = (index: number) => {
    setTasks((prevTasks) => [
      ...prevTasks.slice(0, index),
      { ...prevTasks[index], checked: !prevTasks[index].checked },
      ...prevTasks.slice(index + 1),
    ]);
  };

  return (
    <div className='taskboard wrapper'>
      <Input
        value={taskValue}
        onChange={setTaskValue}
        onSubmit={handleAddTask}
      />
      <TaskList onTaskCheck={handleCheckTask} tasks={tasks} />
    </div>
  );
}

export default TaskBoard;
