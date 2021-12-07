import axios from "axios";
import React, {useState} from "react";
import styles from '../cadastro.module.css';
import { setUserSession } from "../Utils/Commons";

export default function CadastroForm() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [gender, setGender] = useState('');

    function create() {
        if (!validateEmail(email)) {
            alert("O campo e-mail é inválido!\nO e-mail deve estar no formato endereco@dominio.dominio");
            return;
        }
    
        if (username === "") {
            alert("O campo usuário é inválido!\nO nome do usuário não pode ser vazio");
            return;
        }
    
        if (password === "") {
            alert("O campo senha é inválido!\nA senha não pode ser vazia");
            return;
        }
    
        if (firstName === "") {
            alert("O primeiro nome é inválido!\nO primeiro nome não pode ser vazio");
            return;
        }
    
        if (lastName === "") {
            alert("O campo sobrenome é inválido!\nO sobrenome não pode ser vazio");
            return;
        }
        
        if (birthDate == null) {
            alert("O campo data de nascimento é inválido!\nA data deve estar no formato DD/MM/AAAA");
            return;
        }
    
        if (gender === "") {
            alert("É necessário selecionar seu sexo!");
            return;
        }

        const url = "http://localhost:8080/api/cliente/new";
        const data = {
            email: email,
            nome: firstName,
            sobrenome: lastName,
            dataAniversario: birthDate,
            sexo: gender,
            login: username,
            senha: password
        };
        axios.post(url, data).then(response => {
            setUserSession(response.data.token, response.data.id);
            window.location.href="http://localhost:3000/produtos";
        }).catch(error => {
            alert("Houve um erro ao realizar o seu cadastro");
        });
    
    }

    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <>
            <div className={styles.title}>
                <p><strong>Cadastro</strong></p>
            </div>
            <form>
                <div>
                    <input className={styles.input} type="text" id="email" placeholder="Endereço de E-mail" onInput={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <input className={styles.input} type="text" id="username" placeholder="Nome de Usuário" onInput={e => setUsername(e.target.value)}/>
                </div>
                <div>
                    <input className={styles.input} type="password" id="password" placeholder="Senha" onInput={e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <input className={styles.name} type="text" id="firstName" placeholder="Nome" onInput={e => setFirstName(e.target.value)}/>
                    <input className={styles.surname} type="text" id="lastName" placeholder="Sobrenome" onInput={e => setLastName(e.target.value)}/>
                </div>
                <div>
                    <input className={styles.input} type="date" id="birthDate" placeholder="Data de Nascimento" onInput={e => setBirthDate(e.target.value)}/>
                </div>
                <div>
                    <label className={styles.container}>F
                        <input type="checkbox" id="checkboxF" onClick={e => setGender("F")}/>
                        <span className={styles.checkbox}></span>
                    </label>
                    <label className={styles.container}>M
                        <input type="checkbox" id="checkboxM" onClick={e => setGender("M")}/>
                        <span className={styles.checkbox}></span>
                    </label>
                </div>
                <div>
                    <button className={styles.clean} type="reset">LIMPAR</button>
                    <button type="button" onClick={() => create()}>CONFIRMAR</button>
                </div>
            </form>
        </>
    )
}