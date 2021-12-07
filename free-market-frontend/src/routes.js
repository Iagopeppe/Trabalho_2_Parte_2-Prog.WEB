import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./login";
import Produtos from "./Produtos";
import Cadastro from "./cadastro";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/produtos" element={<Produtos />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;