import './App.css';
import { Outlet } from 'react-router';
import Header from './components/Header';
import { CartContextProvider } from './Context/context';

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <Outlet />
      </CartContextProvider>
    </div>
  );
}

export default App;
