import React from "react";
import PrimarySearchAppBar from './components/PrimarySearchAppBar.js';
import SideNav from './components/SideNav.js';
import ProductForm from "./components/ProductForm.js";
import ProductList from "./components/ProductList.js";
import PopularProducts from "./components/PopularProducts"
import Footer from "./components/Footer.js";
import { withStyles } from '@mui/styles';
import './App.css';

const styles = {
  
}

function App( classes ) {
  return (
    <div>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <SideNav></SideNav>
      <div className="main">
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
  );
}

export default withStyles(styles)(App);
