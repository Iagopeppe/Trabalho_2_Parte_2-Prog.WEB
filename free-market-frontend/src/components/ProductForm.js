import * as React from 'react';
import styles from '../produtos.module.css';

export default function ProductForm() {
    return (
        <form className={styles.element_container}>
            <p className={styles.element_title}><strong>Anunciar produto</strong></p>
            <div>
                <input id="product_name" type="text" placeholder="Nome do produto" />
            </div>
            <div>
                <input id="product_description" type="text" placeholder="Descrição do produto" />
            </div>
            <div>
                <input id="product_category" type="text" placeholder="Categoria do produto" />
            </div>
            <div>
                <input id="product_price" type="number" placeholder="Preço do produto" />
            </div>
            <div>
                <text>Estado do produto: </text>
                <label className={styles.container}>Usado
                    <input type="radio" name="estado_produto" id="product_state_used" />
                    <span className={styles.radio}></span>
                </label>
                <label className={styles.container}>Seminovo
                    <input type="radio" name="estado_produto" id="product_state_almost_new" />
                    <span className={styles.radio}></span>
                </label>
                <label className={styles.container}>Novo
                    <input type="radio" name="estado_produto" id="product_state_new" />
                    <span className={styles.radio}></span>
                </label>
            </div>
            <div className={styles.left_aligned}>
                <button type="button" className={styles.button_right}>Adicionar imagem</button>
            </div>
            <div className={styles.right_aligned}>
                <button type="reset" className={styles.clear_button}>Limpar</button>
                <button className={styles.form_button} type="button" onclick="create()">Confirmar</button>
            </div>
        </form>
    );
}