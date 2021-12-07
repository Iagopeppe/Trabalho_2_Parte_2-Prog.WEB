import React, {useState} from 'react';
import styles from '../produtos.module.css';
import axios from 'axios'

export default function ProductForm() {

    const [productName, setProductName] = useState(''); // '' is the initial state value
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productState, setProductState] = useState('');


    function create() {
        //Validacao dos campos
        if (productName === "") {
          alert("O campo nome é inválido!\nO nome do produto não pode ser vazio");
          return;
        }
      
        if (productDescription === "") {
          alert("O campo descrição é inválido!\nA descrição do produto não pode ser vazia");
          return;
        }
      
        if (productCategory === "") {
          alert("O campo categoria é inválido!\nA categoria do produto não pode ser vazia");
          return;
        }
      
        if (productPrice=== "") {
          alert("O campo preço é inválido!\nO preço do produto não pode ser vazio");
          return;
        }
        if (productPrice <= 0) {
          alert("O campo preço é inválido!\nO preço do produto deve ser maior que zero");
          return;
        }
      

        if (productState === "") {
          alert("É necessário selecionar o estado do produto!");
          return;
        }
      
        const url = `http://localhost:8080/api/produto/new`
        const data= {
            nome: productName,
            descricao: productDescription,
            categoriaId: "68e005cc-56fa-11ec-b1e9-0242ac110006",
            clienteId: "57b8989e-457f-4f61-bff7-dafe96d49653",
            valor: productPrice,
            estado: productState
        };
        axios.post(url, data)
        
        alert("Parabéns!\nSeu produto foi anunciado com sucesso!");
    }


    return (
        <form className={styles.element_container}>
            <p className={styles.element_title}><strong>Anunciar produto</strong></p>
            <div>
                <input id="product_name" type="text" placeholder="Nome do produto" value={productName} onInput={e => setProductName(e.target.value)}/>
            </div>
            <div>
                <input id="product_description" type="text" placeholder="Descrição do produto" value={productDescription} onInput={e => setProductDescription(e.target.value)}/>
            </div>
            <div>
                <input id="product_category" type="text" placeholder="Categoria do produto" value={productCategory} onInput={e => setProductCategory(e.target.value)}/>
            </div>
            <div>
                <input id="product_price" type="number" placeholder="Preço do produto" value={productPrice} onInput={e => setProductPrice(e.target.value)}/>
            </div>
            <div>
                <text>Estado do produto: </text>
                <label className={styles.container}>Usado
                    <input type="radio" name="estado_produto" id="product_state_used" onClick={e => setProductState("U")} />
                    <span className={styles.radio}></span>
                </label>
                <label className={styles.container}>Seminovo
                    <input type="radio" name="estado_produto" id="product_state_almost_new" onClick={e => setProductState("S")} />
                    <span className={styles.radio}></span>
                </label>
                <label className={styles.container}>Novo
                    <input type="radio" name="estado_produto" id="product_state_new" onClick={e => setProductState("N")} />
                    <span className={styles.radio}></span>
                </label>
            </div>
            <div className={styles.left_aligned}>
                <button type="button" className={styles.button_right}>Adicionar imagem</button>
            </div>
            <div className={styles.right_aligned}>
                <button type="reset" className={styles.clear_button}>Limpar</button>
                <button className={styles.form_button} type="submit" onClick={() => create()}>Confirmar</button>
            </div>
        </form>
    );
}