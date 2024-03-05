import './task-board.scss';
import { FC, useState } from 'react';
import { ITask } from '../../types/tasks-types';
import TaskList from '../task-list/task-list';
import Input from '../ui/input/input';

const TaskBoard: FC = () => {
  const [taskValue, setTaskValue] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleAddTask = (value: string): void => {
    setTaskValue('');
    setTasks((prevTasks) => [...prevTasks, { value, checked: false }]);
  };

  const handleCheckTask = (index: number): void => {
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
};

export default TaskBoard;
