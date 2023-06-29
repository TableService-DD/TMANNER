import './App.css';
import { Outlet } from 'react-router';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className=' text-4xl font-bold p-4'>hh</h1>
      <button className='p-2 bg-primary'>button</button>
      <Outlet />
    </div>
  );
}

export default App;
