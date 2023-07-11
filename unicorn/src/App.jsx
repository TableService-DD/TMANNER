import './App.css';
import { Outlet } from 'react-router';
import Header from './components/Header';
import { CartContextProvider } from './Context/context';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <Outlet />
      </div>
    </CartContextProvider>

  );
}

export default App;
