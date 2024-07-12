import {useState} from 'react';
import './Password.css';

const Password = () => {
    const [buttons] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '<', '0', 'E']);

    return (
        <div>
            <input type="password" value='' className='Password' disabled={true}/>
            <div className='password-container'>
                {buttons.map((button) => (
                    <button key={button} className='btn btn-primary'>{button}</button>
                ))}
            </div>
        </div>
    );
};

export default Password;