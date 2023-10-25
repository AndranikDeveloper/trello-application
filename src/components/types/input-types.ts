export type Item = {
  id: number;
  name: string;
  elements: { id: number; title: string }[];
};

export type Element = {
  id: number;
  title: string;
};

export type BoardsType = {
  boards: Item[];
};
