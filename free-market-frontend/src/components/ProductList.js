import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import styles from '../produtos.module.css'
import ProductItem from './product/productItem.js'

function ProductList() {
    const url = `http://localhost:8080/api/produto/getMyProducts/57b8989e-457f-4f61-bff7-dafe96d49653`
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    let content = null

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false
        })

        axios.get(url)
            .then(response => {
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false
                })
            })
            .catch(() => {
                setProducts({
                    loading: false,
                    data: null,
                    error: true
                })
            })   
    }, [url])

    if(products.error){
        content = <p>
            Houve um erro. Abra o terminal para mais detalhes
        </p>
    }

    if(products.loading){
        content=
        <div>
            Carregando
        </div>
    }

    if(products.data){
        content = 
        products.data.map((product, key) => 
            <ProductItem product={product}/>
        )
    }

    return (
        <div>
            <table>
                <tr>
                    <th className={styles.table_filter_container}><img src="../assets/icons/filter_icon.png" className={styles.table_filter_icon} /></th>
                </tr>
                <tr id="title_row">
                    <th>Nome do produto</th>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Estado</th>
                    <th>Preço</th>
                    <th>Status</th>
                </tr>
                {content}
            </table>
        </div>
    );

}

export default ProductList
