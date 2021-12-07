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
    <body>
    <div>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <SideNav></SideNav>
      <div className={styles.main}>
        <br />
        <ProductForm></ProductForm>
        <br />
        <ProductList></ProductList>
        <br />
        <PopularProducts></PopularProducts>
        <br />
      </div>
      <Footer></Footer>
    </div>
    </body>
  );
}

export default withStyles(styles)(Produtos);
