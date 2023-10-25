import { Button, TextField } from '@mui/material';
import './style.css';
import Boards from '../boards/Boards';
import { useContext } from 'react';
import { MyContext } from '../provider-app/Provider';

const AddInput = () => {
  const data = useContext(MyContext);
  const addItem = () => {
    if (data?.boards) {
      if (data.inputValue === '') return alert('This Field can not be empty');
      const newItem = { id: Date.now(), title: data.inputValue };
      const updatedBoard = [...data.boards];
      updatedBoard[0].elements.push(newItem);
      data.setBoards(updatedBoard);
      data.setInputValue('');
    }
  };
  return (
    <div className='add-input'>
      <div className='add-fields'>
        <TextField
          className='input__field'
          placeholder='Add Item'
          value={data?.inputValue}
          onChange={(e) => data?.setInputValue(e.target.value)}
        />
        <Button
          onClick={() => addItem()}
          className='add-btn'
          variant='outlined'
        >
          Add +
        </Button>
      </div>
      <Boards />
    </div>
  );
};

export default AddInput;
