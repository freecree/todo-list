import './task.scss';
import React, { FC } from 'react';
import { ITask } from '../../types/tasks-types';
import Checkbox from '../ui/checkbox/checkbox';

interface TaskProps {
  task: ITask;
  onTaskCheck: () => void;
}
const Task: FC<TaskProps> = ({ task, onTaskCheck }) => {
  const handleClick = (): void => {
    onTaskCheck();
  };
  return (
    <div
      className={`task-item ${task.checked ? 'checked' : ''}`}
      onClick={handleClick}
    >
      <div>{task.value}</div>
      <Checkbox isChecked={task.checked} />
    </div>
  );
};

export default Task;
