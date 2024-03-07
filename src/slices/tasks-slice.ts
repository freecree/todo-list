import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ITask } from '../types/tasks-types';

interface TasksState {
  tasks: ITask[];
}

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const id = nanoid();
      state.tasks.push({ value: action.payload, checked: false, id });
    },
    updateTaskCheck: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const prevTask = state.tasks.find((task) => id === task.id);
      if (prevTask) {
        prevTask.checked = !prevTask.checked;
      }
    },
  },
});

export const { addTask, updateTaskCheck } = tasksSlice.actions;

export default tasksSlice.reducer;
