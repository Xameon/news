import { Link, useLocation } from 'react-router-dom';

export default function NavBar({ isAdmin }) {
  const location = useLocation().pathname;
  return (
    <div className='flex-ns justify-start items-center w-2'>
      <div className='pa1'>
        <Link to='/' className={setClassName(location, '/')}>
          Новини
        </Link>
      </div>
      <div className='pa1'>
        <Link to='/about' className={setClassName(location, '/about')}>
          Про сайт
        </Link>
      </div>
      {isAdmin && (
        <div className='pa1'>
          <Link to='/admin' className={setClassName(location, '/admin')}>
            Адмін панель
          </Link>
        </div>
      )}
    </div>
  );
}

function setClassName(location, path) {
  if (path.includes('admin')) {
    return location.includes('admin')
      ? 'fw6 red navLink pa2'
      : 'fw6 dark-gray navLink pa2';
  }
  return location === path ? 'fw6 yellow navLink pa2' : 'fw6 gray navLink pa2';
}
