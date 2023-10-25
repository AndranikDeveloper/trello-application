import { ReactNode } from 'react';
import { Item } from './input-types';

export type ProviderProps = {
  children: ReactNode;
};

export type MyContextType = {
  inputValue: string;
  setInputValue: (value: string) => void;
  boards: Item[] | undefined;
  setBoards: (value: Item[]) => void;
};
