import * as React from 'react';
import '../App.css';

var dropdown = document.getElementsByClassName("dropdown-btn");
var subitem = document.getElementsByClassName("dropdown-subitem");

for (var i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
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
        <div className="sidenav">
        <button className="dropdown-btn">Cozinha
            <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
            <a className="dropdown-subitem" href="#">Geladeiras</a>
            <a className="dropdown-subitem" href="#">Fogões</a>
        </div>
        <button className="dropdown-btn">Livros
            <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
            <a className="dropdown-subitem" href="#">Educacionais</a>
            <a className="dropdown-subitem" href="#">Infantis</a>
        </div>
        <button className="dropdown-btn">Eletrônicos
            <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
            <a className="dropdown-subitem" href="#">Televisões</a>
            <a className="dropdown-subitem" href="#">Celulares</a>
            <a className="dropdown-subitem" href="#">Computadores</a>
        </div>
        <button className="dropdown-btn">Alimentos
            <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
            <a className="dropdown-subitem" href="#">Cereais</a>
            <a className="dropdown-subitem" href="#">Bebidas</a>
            <a className="dropdown-subitem" href="#">Enlatados</a>
        </div>
        <button className="dropdown-btn">Veículos
            <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container">
            <a className="dropdown-subitem" href="#">Carros</a>
            <a className="dropdown-subitem" href="#">Motos</a>
        </div>
    </div>
    );
}