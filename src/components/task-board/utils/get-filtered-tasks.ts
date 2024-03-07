import { TaskFilterOptions } from '../../../consts';
import { ITask } from '../../../types/tasks-types';

export const getFilteredTasks = (
  tasks: ITask[],
  filter: TaskFilterOptions,
): ITask[] => {
  if (filter === TaskFilterOptions.Completed) {
    return tasks.filter((task) => task.checked);
  }
  if (filter === TaskFilterOptions.Current) {
    return tasks.filter((task) => !task.checked);
  }
  return tasks;
};
