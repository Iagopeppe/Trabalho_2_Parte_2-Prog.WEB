import * as React from 'react';
import styles from '../../produtos.module.css';

function productItem(props) {
    return(
            <tr>
                <td>{props.product.nome}</td>
                <td>{props.product.descricao}</td>
                <td>{props.product.categoriaId}</td>
                <td>{props.product.estado}</td>
                <td>{props.product.valor}</td>
                <td>Em pausa</td>
            </tr>
    )
}

export default productItem