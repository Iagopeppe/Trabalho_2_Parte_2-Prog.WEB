import React, { Fragment, useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./login";
import Produtos from "./produtos";
import Cadastro from "./cadastro";
import { getToken, removeUserSession, setUserSession } from "./Utils/Commons";
import axios from "axios";

const Rotas = () => {

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/produtos" element={<Produtos />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default Rotas;