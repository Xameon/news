import './Login.css';
import Center from '../../components/Center';
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <Center>
            <form className='loginForm'>
                <h1>Login</h1>

                <div>Nickname</div>

                <input type='text'/><br/><br/>

                <div>Password</div>

                <input type='password'/>

                <div className='loginBackHome'>
                    <Link to = "/" className = 'backHome'>Back</Link>
                    <button>Enter</button>
                </div>

            </form>  
        </Center>
    );
}