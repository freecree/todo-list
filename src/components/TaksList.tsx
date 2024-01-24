import { ITask } from '../types/tasksTypes';
import Task from './Task';

interface TaskListProps {
  tasks: ITask[];
  onTaskCheck: (index: number) => void;
}

function TaskList({ tasks, onTaskCheck }: TaskListProps) {
  return (
    <div className='task-list'>
      {tasks.map((task, i) => (
        <Task key={i} task={task} onTaskCheck={() => onTaskCheck(i)} />
      ))}
    </div>
  );
}

export default TaskList;
