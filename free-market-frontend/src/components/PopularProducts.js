import * as React from 'react';
import '../App.css';

export default function PopularProducts() {
    return (
        <div className="element_container">
            <div className="element_title">
                <text className="element_title"><strong id="most-visited">Os mais populares da semana </strong></text>
                <a href=""><small className="ver_mais">Ver mais</small></a>
            </div>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>Televisão 4K</b></h4>
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>PS5</b></h4>
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>Home Theater</b></h4>
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>Iphone X</b></h4>
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>Geladeira Samsung</b></h4>
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>Chromecast</b></h4>
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>Notebook Dell</b></h4>
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>O Senhor dos Anéis - Livro</b></h4>
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                            <img src="" className="card_icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}