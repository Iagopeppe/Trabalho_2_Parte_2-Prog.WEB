import * as React from 'react';
import '../App.css';

export default function ProductForm() {
    return (
        <form className="element_container">
            <p className="element_title"><strong>Anunciar produto</strong></p>
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
                <label className="container">Usado
                    <input type="radio" name="estado_produto" id="product_state_used" />
                    <span className="radio"></span>
                </label>
                <label className="container">Seminovo
                    <input type="radio" name="estado_produto" id="product_state_almost_new" />
                    <span className="radio"></span>
                </label>
                <label className="container">Novo
                    <input type="radio" name="estado_produto" id="product_state_new" />
                    <span className="radio"></span>
                </label>
            </div>
            <div className="left_aligned">
                <button type="button" className="button_right">Adicionar imagem</button>
            </div>
            <div className="right_aligned">
                <button type="reset" className="clear_button">Limpar</button>
                <button type="button" onclick="create()">Confirmar</button>
            </div>
        </form>
    );
}