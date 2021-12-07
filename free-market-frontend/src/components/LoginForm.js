import React, {useState} from "react";
import styles from '../login.module.css';
import axios from 'axios';
import { setUserSession } from "../Utils/Commons";
import { Navigate } from "react-router-dom";

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function login() {
        if (username === "") {
            alert("O campo usuário é inválido!\nO usuário não pode ser vazio");
            return;
        }

        if (password === "") {
            alert("O campo senha é inválido!\nA senha não pode ser vazia");
            return;
        }
        
        axios.post('http://localhost:8080/api/usuario/login', {login: username, senha: password}).then(response => {
            setUserSession(response.data.token, response.data.id);
            window.location.href="http://localhost:3000/produtos"
        }).catch(error => {
            console.log(error);
            if (error.response.status === 401) {
                alert("Usuário e/ou senha inválidos.");
            } else {
                alert("Algo deu errado. Por favor tente novamente mais tarde.");
            }
        });
    }

    return (
        <>
            <div className={styles.title}>
                <p><strong>Faça seu login</strong></p>
            </div>
            <form>
                <div>
                    <input className={styles.input} type="text" id="user" placeholder="Usuário" onInput={e => setUsername(e.target.value)}/>
                </div>
                <div>
                    <input className={styles.input} type="password" id="password" placeholder="Senha" onInput={e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label className={styles.container}>Lembrar de mim
                        <input className={styles.input} type="checkbox"/>
                        <span className={styles.checkbox}></span>
                    </label>
                </div>
                <div>
                    <button className={styles.button} type="button" onClick={() => login()}>LOGIN</button>
                </div>
            </form>
            <div className={styles.hyperlink}>
                <a href="">Esqueci minha senha</a>
            </div>
            <div className={styles.hyperlink}>
                <a href="/cadastro">É novo por aqui? Faça já o seu cadastro e comece a anunciar agora mesmo</a>
            </div>
        </>
    );
}
