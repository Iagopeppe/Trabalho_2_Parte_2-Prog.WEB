import React from "react";
import styles from '../login.module.css';

function LoginForm() {
    return (
        <>
            <div className={styles.title}>
                <p><strong>Faça seu login</strong></p>
            </div>
            <form>
                <div>
                    <input className={styles.input} type="text" id="user" placeholder="Usuário"/>
                </div>
                <div>
                    <input className={styles.input} type="password" id="password" placeholder="Senha"/>
                </div>
                <div>
                    <label className={styles.container}>Lembrar de mim
                        <input className={styles.input} type="checkbox"/>
                        <span className={styles.checkbox}></span>
                    </label>
                </div>
                <div>
                    <button className={styles.button} type="button" onclick="login()">LOGIN</button>
                </div>
            </form>
            <div className={styles.hyperlink}>
                <a href="">Esqueci minha senha</a>
            </div>
            <div className={styles.hyperlink}>
                <a href="cadastro.html">É novo por aqui? Faça já o seu cadastro e comece a anunciar agora mesmo</a>
            </div>
        </>
    );
}

export default LoginForm;