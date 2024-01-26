import './task.scss';
import React from 'react';
import { ITask } from '../../types/tasksTypes';
import Checkbox from '../ui/checkbox/Checkbox';

interface TaskProps {
  task: ITask;
  onTaskCheck: () => void;
}

function Task({ task, onTaskCheck }: TaskProps) {
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    onTaskCheck();
    e.stopPropagation();
  }
  return (
    <div
      className={`task-item ${task.checked ? 'checked' : ''}`}
      onClick={handleClick}
    >
      <div>{task.value}</div>
      <Checkbox isChecked={task.checked} onChange={onTaskCheck} />
    </div>
  );
}

export default Task;
