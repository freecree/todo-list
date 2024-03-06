import { createSlice } from '@reduxjs/toolkit';
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
      state.tasks.push({ value: action.payload, checked: false });
    },
    updateTaskCheck: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.tasks[index].checked = !state.tasks[index].checked;
    },
  },
});

export const { addTask, updateTaskCheck } = tasksSlice.actions;

export default tasksSlice.reducer;
