import './task-board.scss';
import { FC, useState } from 'react';
import TaskList from '../task-list/task-list';
import Input from '../ui/input/input';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { addTask, updateTaskCheck } from '../../slices/tasks-slice';

const TaskBoard: FC = () => {
  const [taskValue, setTaskValue] = useState('');
  const [isTaskValid, setIsTaskValid] = useState(true);

  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasksReducer.tasks);

  const handleAddTask = (value: string): void => {
    if (value.length < 3) {
      setIsTaskValid(false);
    } else {
      setIsTaskValid(true);
      setTaskValue('');
      dispatch(addTask(value));
    }
  };

  const handleCheckTask = (index: number): void => {
    dispatch(updateTaskCheck(index));
  };

  return (
    <div className='taskboard wrapper'>
      <Input
        value={taskValue}
        onChange={setTaskValue}
        onSubmit={handleAddTask}
      />
      {!isTaskValid && (
        <p className='error-message'>
          Length of task must be equal to or more than 3 characters
        </p>
      )}
      <TaskList onTaskCheck={handleCheckTask} tasks={tasks} />
    </div>
  );
};

export default TaskBoard;
