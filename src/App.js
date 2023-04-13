import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import './App.css';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
            </Routes>
        </>
    );
}

export default App;
