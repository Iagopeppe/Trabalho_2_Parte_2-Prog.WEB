import * as React from 'react';
import styles from '../produtos.module.css';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';

export default function PopularProducts() {
    return (
        <div className={styles.element_container}>
            <div className={styles.element_title}>
                <text className={styles.element_title}><strong id="most-visited">Os mais populares da semana </strong></text>
                <a href=""><small className={styles.ver_mais}>Ver mais</small></a>
            </div>
            <div className={styles.row}>
                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="" alt="Avatar" className={styles.card_img} />
                        <div className={styles.card_container}>
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
                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="" alt="Avatar" className={styles.card_img} />
                        <div className={styles.card_container}>
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
                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="" alt="Avatar" className={styles.card_img} />
                        <div className={styles.card_container}>
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
                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="" alt="Avatar" className={styles.card_img} />
                        <div className={styles.card_container}>
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

            <div className={styles.row}>
            <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="" alt="Avatar" className={styles.card_img} />
                        <div className={styles.card_container}>
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
                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="" alt="Avatar" className={styles.card_img} />
                        <div className={styles.card_container}>
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
                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="" alt="Avatar" className={styles.card_img} />
                        <div className={styles.card_container}>
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
                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="" alt="Avatar" className={styles.card_img} />
                        <div className={styles.card_container}>
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