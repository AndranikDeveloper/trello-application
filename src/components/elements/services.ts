import React from 'react';
import { Element, Item } from '../types/input-types';

export const handleDragStart = (
  e: React.DragEvent,
  board: Item,
  element: Element,
  setCurrentBoard: (value: Item) => void,
  setCurrentElement: (value: Element) => void
) => {
  //   e.preventDefault();
  setCurrentBoard(board);
  setCurrentElement(element);
};

export const handleDragOver = (e: React.DragEvent) => {
  e.preventDefault();
};

export const handleDrop = (
  e: React.DragEvent,
  board: Item,
  element: Element,
  currentBoard: Item | undefined,
  currentElement: Element | undefined,
  setCurrentBoard: (value: Item) => void,
  setCurrentElement: (value: Element) => void,
  boards: Item[] | undefined,
  setBoards: (value: Item[]) => void
) => {
  e.preventDefault();
  if (currentBoard && currentElement && boards) {
    const dropIndex = board.elements.indexOf(element);

    const newBoard = boards.map((b) => {
      const filtredArr = b.elements.filter((i) => i.id !== currentElement.id);
      return {
        ...b,
        elements: [...filtredArr],
      };
    });
    newBoard[newBoard.findIndex((i) => i.id === board.id)].elements.splice(
      dropIndex,
      0,
      currentElement
    );
    setBoards(newBoard);
  }
};

export const handleDropBoard = (
  e: React.DragEvent,
  board: Item,
  currentBoard: Item | undefined,
  setCurrentBoard: (value: Item) => void,
  setBoards: (value: Item[]) => void,
  boards: Item[] | undefined,
  currentElement: Element | undefined
) => {
  if (currentBoard && currentElement && boards) {
    const newBoard = boards?.map((b) => {
      const filtredArr = b.elements.filter((i) => i.id !== currentElement.id);
      return {
        ...b,
        elements: [...filtredArr],
      };
    });
    console.log(newBoard);
    newBoard[newBoard?.findIndex((i) => i.id === board.id)].elements.splice(
      board.id,
      0,
      currentElement
    );
    setBoards(newBoard);
  }
};
