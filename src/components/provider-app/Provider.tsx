import React, { createContext, useState } from 'react';
import { Item } from '../types/input-types';
import { MyContextType, ProviderProps } from '../types/provider-types';

export const MyContext = createContext<MyContextType | undefined>(undefined);

const MyProvider = ({ children }: ProviderProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [boards, setBoards] = useState<Item[]>([
    { id: 1, name: 'First', elements: [] },
    { id: 2, name: 'Second', elements: [] },
    { id: 3, name: 'Third', elements: [] },
  ]);
  return (
    <div>
      <MyContext.Provider
        value={{ inputValue, setInputValue, boards, setBoards }}
      >
        {children}
      </MyContext.Provider>
    </div>
  );
};

export default MyProvider;
