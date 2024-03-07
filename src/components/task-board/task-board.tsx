import './task-board.scss';
import { FC, useState } from 'react';
import TaskList from '../task-list/task-list';
import Input from '../ui/input/input';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { addTask, updateTaskCheck } from '../../slices/tasks-slice';
import FilterBar from '../filter-bar/filter-bar';
import { getFilteredTasks } from './utils/get-filtered-tasks';
import { TaskFilterOptions } from '../../consts';

const TaskBoard: FC = () => {
  const [taskValue, setTaskValue] = useState('');
  const [isTaskValid, setIsTaskValid] = useState(true);

  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasksReducer.tasks);

  const [selectedFilter, setSelectedFilter] = useState<TaskFilterOptions>(
    TaskFilterOptions.All,
  );
  const filteredTasks = getFilteredTasks(tasks, selectedFilter);

  const handleFilterChange = (filterOption: TaskFilterOptions): void => {
    setSelectedFilter(filterOption);
  };

  const handleAddTask = (value: string): void => {
    if (value.length < 3) {
      setIsTaskValid(false);
    } else {
      setIsTaskValid(true);
      setTaskValue('');
      dispatch(addTask(value));
    }
  };

  const handleCheckTask = (id: string): void => {
    dispatch(updateTaskCheck(id));
  };

  const completedCount = tasks.filter((task) => task.checked).length;
  const uncompletedCount = tasks.filter((task) => !task.checked).length;

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
      <div className='top-bar'>
        <div className='counter'>
          <p>
            Completed: <span>{completedCount}</span>
          </p>
          <p className='uncompleted'>
            Uncompleted: <span>{uncompletedCount}</span>
          </p>
        </div>
        <FilterBar
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
      </div>
      <TaskList onTaskCheck={handleCheckTask} tasks={filteredTasks} />
    </div>
  );
};

export default TaskBoard;
