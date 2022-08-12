import Header from './header';
import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header></Header>

      <Outlet />
      <div></div>
    </div>
  );
}

export default App;
