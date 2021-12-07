import { StylesContext } from '@mui/styles';
import { style } from '@mui/system';
import * as React from 'react';
import  styles from '../produtos.module.css';

var dropdown = document.getElementsByClassName("dropdown_btn");
var subitem = document.getElementsByClassName("dropdown_subitem");

for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("onClick", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

export default function SideNav() {
    return (
        <div className={styles.sidenav}>
        <button className={styles.dropdown_btn}>Cozinha
            <i className={styles.fa_caret_down}></i>
        </button>
        <div className={styles.dropdown_container}>
            <a className={styles.dropdown_subitem} href="#">Geladeiras</a>
            <a className={styles.dropdown_subitem} href="#">Fogões</a>
        </div>
        <button className={styles.dropdown_btn}>Livros
            <i className={styles.fa_caret_down}></i>
        </button>
        <div className={styles.dropdown_container}>
            <a className={styles.dropdown_subitem} href="#">Educacionais</a>
            <a className={styles.dropdown_subitem} href="#">Infantis</a>
        </div>
        <button className={styles.dropdown_btn}>Eletrônicos
            <i className={styles.fa_caret_down}></i>
        </button>
        <div className={styles.dropdown_container}>
            <a className={styles.dropdown_subitem} href="#">Televisões</a>
            <a className={styles.dropdown_subitem} href="#">Celulares</a>
            <a className={styles.dropdown_subitem} href="#">Computadores</a>
        </div>
        <button className={styles.dropdown_btn}>Alimentos
            <i className={styles.fa_caret_down}></i>
        </button>
        <div className={styles.dropdown_container}>
            <a className={styles.dropdown_subitem} href="#">Cereais</a>
            <a className={styles.dropdown_subitem} href="#">Bebidas</a>
            <a className={styles.dropdown_subitem} href="#">Enlatados</a>
        </div>
        <button className={styles.dropdown_btn}>Veículos
            <i className={styles.fa_caret_down}></i>
        </button>
        <div className={styles.dropdown_container}>
            <a className={styles.dropdown_subitem} href="#">Carros</a>
            <a className={styles.dropdown_subitem} href="#">Motos</a>
        </div>
    </div>
    );
}