import * as React from 'react';
import '../App.css';

export default function ProductList() {
    return (
        <div>
            <table>
                <tr>
                    <th className="table_filter_container"><img src="../assets/icons/filter_icon.png" className="table_filter_icon" /></th>
                </tr>
                <tr id="title_row">
                    <th>Nome do produto</th>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Estado</th>
                    <th>Preço</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>Fogão à gás</td>
                    <td>Fogão à gás Brastemp</td>
                    <td>Cozinha</td>
                    <td>Usado</td>
                    <td>R$ 290,00</td>
                    <td>Em pausa</td>
                </tr>
                <tr>
                    <td>Fone de ouvido</td>
                    <td>Fones de ouvido Edifier</td>
                    <td>Eletrônicos</td>
                    <td>Novo</td>
                    <td>R$ 150,00</td>
                    <td>Anunciado</td>
                </tr>
                <tr>
                    <td>TV LED</td>
                    <td>TV LED 32' LG</td>
                    <td>Eletrônicos</td>
                    <td>Usado</td>
                    <td>R$ 899,99</td>
                    <td>Anunciado</td>
                </tr>
                <tr>
                    <td>CG 150</td>
                    <td>Moto CG 150 Cilindradas</td>
                    <td>Veículos</td>
                    <td>Seminovo</td>
                    <td>R$ 1000,00</td>
                    <td>Vendido</td>
                </tr>
            </table>
        </div>
    );
}