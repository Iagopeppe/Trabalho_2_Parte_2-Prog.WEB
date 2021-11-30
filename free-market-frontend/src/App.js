import React from "react";
import PrimarySearchAppBar from './PrimarySearchAppBar.js';
import { withStyles } from '@mui/styles';
import './App.css';

const styles = {
  
}

function App( classes ) {
  return (
    <div>
      <PrimarySearchAppBar></PrimarySearchAppBar>


      {/*
      <NavMenu></NavMenu>
      <CadastroProduto></CadastroProduto>
      <ListaAnuncios></ListaAnuncios>
      <ProdutosPopulares></ProdutosPopulares>
      */}
    </div>
  );
}



export default withStyles(styles)(App);
