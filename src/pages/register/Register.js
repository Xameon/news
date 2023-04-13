import './Register.css';
import Center from '../../components/Center';
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <Center>
            <form className='registerForm'>
                <h1>Register</h1>

                <div>Nickname</div>

                <input type='text'/>
                <br/><br/>

                <div>E-mail</div>

                <input type='email'/>
                <br/><br/>

                <div>Password</div>

                <input type='password'/>
                <br/><br/>

                <div>Confirm password</div>

                <input type='password'/>
                <br/><br/>

                <div className='registerBackHome'>
                    <Link to = "/" className = 'backHome'>Back</Link>
                    <button>Enter</button>
                </div>

            </form>  
        </Center>
    );
}