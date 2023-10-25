import './App.css';
import AddInput from './components/input/Input';
import MyProvider from './components/provider-app/Provider';

function App() {
  return (
    <div className='App'>
      <MyProvider>
        <AddInput />
      </MyProvider>
    </div>
  );
}

export default App;
