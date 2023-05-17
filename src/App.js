import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navigation/Navigation';
import MainPage from './pages/Main/MainPage';
import AboutPage from './pages/About/AboutPage';
import AdminPage from './pages/Admin/AdminPage';
import EditPage from './pages/Edit/EditPage';
import NewPage from './pages/New/NewPage';
import { useEffect, useState } from 'react';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = window.confirm('Admin?');
    if (role) {
      setIsAdmin(true);
    }
  }, []);

  return (
    <div>
      <header>
        <NavBar isAdmin={isAdmin} />
      </header>
      <Routes>
        <Route path='/' element={<MainPage isAdmin={isAdmin} />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/admin' element={<AdminPage />}></Route>
        <Route path='/admin/new' element={<NewPage />}></Route>
        <Route path='/admin/edit' element={<EditPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
