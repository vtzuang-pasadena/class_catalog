import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='App-header'>
      <h1 className='headerTitle'>Faux College Class Schedule</h1>
      <nav>
        <Link to='add'>Add</Link> | <Link to='view'>View</Link> |{' '}
        <Link to='editDelete'>Update/Delete</Link>
      </nav>
    </header>
  );
}

export default Header;
