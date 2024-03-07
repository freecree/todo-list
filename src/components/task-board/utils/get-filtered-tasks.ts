import { TaskFilterOptions } from '../../../consts';
import { ITask } from '../../../types/tasks-types';

export const getFilteredTasks = (
  tasks: ITask[],
  filter: TaskFilterOptions,
): ITask[] => {
  switch (filter) {
    case TaskFilterOptions.All: {
      return tasks;
    }
    case TaskFilterOptions.Completed: {
      return tasks.filter((task) => task.checked);
    }
    case TaskFilterOptions.Current: {
      return tasks.filter((task) => !task.checked);
    }
    default: {
      return tasks;
    }
  }
};
