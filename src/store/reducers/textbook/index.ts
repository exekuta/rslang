import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'src/store';
import { DictionaryName, GroupName } from 'src/types/Dictionary.type';

interface TextbookState {
  group: GroupName;
  page: number;
}

const initialState: TextbookState = {
  group: DictionaryName.LEVEL_1,
  page: 0,
};

const textbookSlice = createSlice({
  name: 'textbook',
  initialState,
  reducers: {
    setPagination(state, action: PayloadAction<{
      group: GroupName,
      page: number
    }>) {
      const { group, page } = action.payload;
      state.group = group;
      state.page = page;
    },
    setGroup(state, action: PayloadAction<GroupName>) {
      state.group = action.payload;
      state.page = 0;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export default textbookSlice.reducer;

export const { setGroup, setPage, setPagination } = textbookSlice.actions;

export const selectTextbook = (state: RootState) => state.textbook;
