import { useContext } from 'react';
import { MyContext } from '../provider-app/Provider';
import './style.css';
import Elements from '../elements/Elements';

const Boards = () => {
  const data = useContext(MyContext);

  const deleteItem = (id: number) => {
    if (data?.boards) {
      data.setBoards([
        ...data.boards.map((board) => ({
          ...board,
          elements: board.elements.filter((el) => el.id !== id),
        })),
      ]);
    }
  };
  return (
    <div className='boards'>
      <Elements deleteItem={deleteItem} />
    </div>
  );
};

export default Boards;
