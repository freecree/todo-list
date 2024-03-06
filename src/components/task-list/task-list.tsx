import './task-list.scss';
import { ITask } from '../../types/tasks-types';
import Task from '../task/task';
import dogImage from '../../assets/dog.png';
import { FC } from 'react';

interface TaskListProps {
  tasks: ITask[];
  onTaskCheck: (index: number) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, onTaskCheck }) => {
  return tasks.length > 0 ? (
    <div className='task-list'>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onTaskCheck={() => onTaskCheck(index)} />
      ))}
    </div>
  ) : (
    <div className='no-tasks'>
      <p>No tasks yet</p>
      <img src={dogImage} alt='No tasks' />
    </div>
  );
};

export default TaskList;
