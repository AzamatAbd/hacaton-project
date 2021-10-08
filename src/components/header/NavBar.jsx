import React from 'react';
import searchIcon from '../../images/search.svg'
import avatarIcon from '../../images/avatar.svg'
import cartIcon from '../../images/shopping-cart.svg'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div className="navbar">
                    <div className="navbar-top">
                        <div className="navbar-top-cont">
                            <div className="navbar-top-left">
                                <div className="navbar-top-left-1">
                                    <span>О нас</span>
                                </div>
                                <div className="navbar-top-left-2">
                                    <span>Доставка & Возвраты</span>
                                </div>
                            </div>
                            <div className="navbar-top-center">
                                <span>Бесплатная доставка до двери</span>
                            </div>
                            <div className="navbar-top-right">
                                <Link to="/signup">РЕГИСТРАЦИЯ</Link>
                                <span>ПОДДЕРЖКА</span>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <div className="navbar-center-left">
                            <span>STROYKA.KG</span>
                            <div></div>
                        </div>
                        <div className="navbar-center-right">
                            <input type="text" placeholder="Что вы ишите?" />
                            <button>
                                <img src={searchIcon} alt="Кнопка поиск" />
                            </button>
                        </div>
                    </div>
                    <div className="navbar-bottom">
                        <div className="navbar-bottom-left">
                            <div className="navbar-bottom-left-elem">
                                <p>Все категории</p>
                            </div>                            
                            <div className="navbar-bottom-left-elem">
                                <p>Скидки & Предложения</p>
                            </div>
                            <div className="navbar-bottom-left-elem">
                                <p>DIY проекты & Идеи</p>
                            </div>
                            <div className="navbar-bottom-left-elem">
                                <p>Сервис</p>
                            </div>
                        </div>
                        <div className="navbar-bottom-right">
                            <Link to='/signin' >
                                <div className="navbar-bottom-right-elem">
                                    <img src={avatarIcon} alt="Аватар" />
                                    <span>ВХОД</span>
                                </div>
                            </Link>
                            <button>
                                <img src={cartIcon} alt="Корзина" />
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default NavBar;