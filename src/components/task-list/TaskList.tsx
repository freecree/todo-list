import './task-list.scss';
import { ITask } from '../../types/tasksTypes';
import Task from '../task/Task';
import dogImage from '../../assets/dog.png';

interface TaskListProps {
  tasks: ITask[];
  onTaskCheck: (index: number) => void;
}

function TaskList({ tasks, onTaskCheck }: TaskListProps) {
  return tasks.length > 0 ? (
    <div className='task-list'>
      {tasks.map((task, i) => (
        <Task key={i} task={task} onTaskCheck={() => onTaskCheck(i)} />
      ))}
    </div>
  ) : (
    <div className='no-tasks'>
      <p>Задача пока нет </p>
      <img src={dogImage} alt='No tasks' />
    </div>
  );
}

export default TaskList;
