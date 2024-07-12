import { useState } from 'react';
import './Password.css';
import {addSymbol, checkValue, deleteSymbol, reset} from './passwordSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import { PasswordState } from './passwordSlice';

const Password = () => {
  const [buttons] = useState([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '<',
    '0',
    'E',
  ]);
  const dispatch = useDispatch();
  const password = useSelector((state: RootState) => state.password.value);
  const confirmPassword = useSelector(
    (state: RootState) => state.password.confirmPassword,
  );
  const commands = (btn: string) => {
    if (btn === '<') {
      dispatch(deleteSymbol());
    } else if (btn === 'E') {
      dispatch(checkValue());
    } else {
      dispatch(addSymbol(btn as PasswordState));
    }
  };

  return (
    <div>
      <div>
        {confirmPassword !== null ? (
          <>
            {confirmPassword ? (
              <div className="correct">Access Granted</div>
            ) : (
                <>
                  <button className="btn" onClick={() => dispatch(reset())}>Reenter password</button>
                  <div className="incorrect">Access Denied</div>
                </>

            )}
          </>
        ) : (
          <input
            type="password"
            value={password}
            className="Password"
            disabled={true}
          />
        )}
      </div>
      <div className="password-container">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => commands(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Password;
