import React from "react";
import CadastroForm from "./components/CadastroForm";
import styles from "./cadastro.module.css"

function Cadastro() {
    return (
        <div className={styles.cadastroBody}>
            <CadastroForm></CadastroForm>
        </div>
    )
}

export default Cadastro;