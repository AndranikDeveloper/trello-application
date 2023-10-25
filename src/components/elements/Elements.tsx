import React, { useContext, useState } from 'react';
import '../boards/style.css';
import { MyContext } from '../provider-app/Provider';
import { Button } from '@mui/material';
import { ElementsProps } from '../types/elements-types';
import { Element, Item } from '../types/input-types';
import {
  handleDragOver,
  handleDragStart,
  handleDrop,
  handleDropBoard,
} from './services';

const Elements = ({ deleteItem }: ElementsProps) => {
  const data = useContext(MyContext);
  const [currentBoard, setCurrentBoard] = useState<Item>();
  const [currentElement, setCurrentElement] = useState<Element>();

  return (
    <div className='boards__container'>
      {data?.boards?.map((board) => (
        <div
          key={board.id}
          className='board'
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) =>
            handleDropBoard(
              e,
              board,
              currentBoard,
              setCurrentBoard,
              data.setBoards,
              data.boards,
              currentElement
            )
          }
        >
          <h1 className='board__name'>{board.name}</h1>
          {board.elements.map((element) => (
            <div
              key={element.id}
              className='board__elements'
              draggable
              onDragStart={(e) =>
                handleDragStart(
                  e,
                  board,
                  element,
                  setCurrentBoard,
                  setCurrentElement
                )
              }
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) =>
                handleDrop(
                  e,
                  board,
                  element,
                  currentBoard,
                  currentElement,
                  setCurrentBoard,
                  setCurrentElement,
                  data.boards,
                  data.setBoards
                )
              }
            >
              <div className='elements__content'>
                <div className='element__title'>{element.title}</div>
                <div className='element__btn'>
                  <Button
                    onClick={(e) => deleteItem(element.id)}
                    variant='contained'
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Elements;
