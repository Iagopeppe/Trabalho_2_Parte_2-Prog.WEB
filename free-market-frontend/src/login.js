import React from 'react';
import LoginForm from './components/LoginForm';
import styles from './login.module.css';

function Login() {
    return (
        <div className={styles.loginBody}>
            <LoginForm></LoginForm>
        </div>
    );
}

export default Login;