import * as React from 'react';
import '../App.css';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';



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
                            <IconButton>
                                <AddShoppingCartIcon  onClick={() => { console.log('onClick'); }}/>
                            </IconButton>
                            <IconButton>
                                <BookmarkBorderIcon />
                            </IconButton>
                            <IconButton>
                                <ShareIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>PS5</b></h4>
                            <IconButton>
                                <AddShoppingCartIcon  onClick={() => { console.log('onClick'); }}/>
                            </IconButton>
                            <IconButton>
                                <BookmarkBorderIcon />
                            </IconButton>
                            <IconButton>
                                <ShareIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>Home Theater</b></h4>
                            <IconButton>
                                <AddShoppingCartIcon  onClick={() => { console.log('onClick'); }}/>
                            </IconButton>
                            <IconButton>
                                <BookmarkBorderIcon />
                            </IconButton>
                            <IconButton>
                                <ShareIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>Iphone X</b></h4>
                            <IconButton>
                                <AddShoppingCartIcon  onClick={() => { console.log('onClick'); }}/>
                            </IconButton>
                            <IconButton>
                                <BookmarkBorderIcon />
                            </IconButton>
                            <IconButton>
                                <ShareIcon />
                            </IconButton>
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
                            <IconButton>
                                <AddShoppingCartIcon  onClick={() => { console.log('onClick'); }}/>
                            </IconButton>
                            <IconButton>
                                <BookmarkBorderIcon />
                            </IconButton>
                            <IconButton>
                                <ShareIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>Chromecast</b></h4>
                            <IconButton>
                                <AddShoppingCartIcon  onClick={() => { console.log('onClick'); }}/>
                            </IconButton>
                            <IconButton>
                                <BookmarkBorderIcon />
                            </IconButton>
                            <IconButton>
                                <ShareIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>Notebook Dell</b></h4>
                            <IconButton>
                                <AddShoppingCartIcon  onClick={() => { console.log('onClick'); }}/>
                            </IconButton>
                            <IconButton>
                                <BookmarkBorderIcon />
                            </IconButton>
                            <IconButton>
                                <ShareIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                        <img src="" alt="Avatar" className="card_img" />
                        <div className="card_container">
                            <h4><b>O Senhor dos Anéis - Livro</b></h4>
                            <IconButton>
                                <AddShoppingCartIcon  onClick={() => { console.log('onClick'); }}/>
                            </IconButton>
                            <IconButton>
                                <BookmarkBorderIcon />
                            </IconButton>
                            <IconButton>
                                <ShareIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}