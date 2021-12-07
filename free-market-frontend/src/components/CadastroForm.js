import React from "react";
import styles from '../cadastro.module.css';

function CadastroForm() {
    return (
        <>
            <div className={styles.title}>
                <p><strong>Cadastro</strong></p>
            </div>
            <form>
                <div>
                    <input className={styles.input} type="text" id="email" placeholder="Endereço de E-mail" />
                </div>
                <div>
                    <input className={styles.input} type="text" id="username" placeholder="Nome de Usuário" />
                </div>
                <div>
                    <input className={styles.input} type="password" id="password" placeholder="Senha" />
                </div>
                <div>
                    <input className={styles.name} type="text" id="firstName" placeholder="Nome" />
                    <input className={styles.surname} type="text" id="lastName" placeholder="Sobrenome" />
                </div>
                <div>
                    <input className={styles.input} type="date" id="birthDate" placeholder="Data de Nascimento" />
                </div>
                <div>
                    <label className={styles.container}>F
                        <input type="checkbox" id="checkboxF" />
                        <span className={styles.checkbox}></span>
                    </label>
                    <label className={styles.container}>M
                        <input type="checkbox" id="checkboxM" />
                        <span className={styles.checkbox}></span>
                    </label>
                </div>
                <div>
                    <button className={styles.clean} type="button" onclick="clean()">LIMPAR</button>
                    <button type="button" onclick="send()">CONFIRMAR</button>
                </div>
            </form>
        </>
    )
}

export default CadastroForm;