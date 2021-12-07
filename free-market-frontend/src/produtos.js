import React from "react";
import PrimarySearchAppBar from './components/PrimarySearchAppBar.js';
import SideNav from './components/SideNav.js';
import ProductForm from "./components/ProductForm.js";
import ProductList from "./components/ProductList.js";
import PopularProducts from "./components/PopularProducts"
import Footer from "./components/Footer.js";
import { withStyles } from '@mui/styles';
import styles from './produtos.module.css';

function Produtos() {
  return (
    <body className={styles.main}>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <SideNav></SideNav>
      <ProductForm></ProductForm>
      <ProductList></ProductList>
      <PopularProducts></PopularProducts>
      <Footer></Footer>
    </body>
  );
}

export default Produtos;
