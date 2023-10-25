import { Item } from './input-types';

export type Context = {
  boards: Item[] | undefined;
  inputValue: string;
  setInputValue: (value: string) => void;
  setBoards: (value: Item[]) => void;
};
