import { Item } from './input-types';

export type BoardsProps = {
  boards: Item[];
  setBoards: (value: Item[]) => void;
};
