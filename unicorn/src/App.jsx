import './App.css';
import { Outlet } from 'react-router';
import Header from './components/Header';
import { CartContextProvider } from './Context/context';
import { useEffect } from 'react';
import setScreenSize from './functions';

function App() {
  useEffect(() => {
    setScreenSize();
  });

  return (
    <CartContextProvider>
      <div className="App">
        <Outlet />
      </div>
    </CartContextProvider>

  );
}

export default App;
