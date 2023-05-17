import { Link } from 'react-router-dom';

export default function AdminPage() {
  return (
    <main className='flex-column'>
      <h1 className='red tc mt5'>Панель Адміністратора</h1>
      <div className='flex justify-around f2 bg-red pa3'>
        <div>
          <Link to='/admin/new' className='black fw6 admin-link pa2'>Додати новину</Link>
        </div>
      </div>
    </main>
  );
}
