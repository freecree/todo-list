import './task-list.scss';
import { ITask } from '../../types/tasks-types';
import Task from '../task/task';
import dogImage from '../../assets/dog.png';
import { FC } from 'react';

interface TaskListProps {
  tasks: ITask[];
  onTaskCheck: (id: string) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, onTaskCheck }) => {
  return tasks.length > 0 ? (
    <div className='task-list'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onTaskCheck={() => onTaskCheck(task.id)}
        />
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
