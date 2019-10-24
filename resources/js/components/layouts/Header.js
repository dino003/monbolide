import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
   

<header id="header-area" className="fixed-top">
     {/*
  <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
    <div className='container'>
      <Link className='navbar-brand' to='/'>Tasksman</Link>
    </div>
</nav> */}
<div id="header-top" className="d-none d-xl-block">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 text-left">
                <i className="fa fa-map-marker"></i> 802/2, CI, Abidjan
            </div>

            <div className="col-lg-3 text-center">
                <i className="fa fa-mobile"></i> +225 89 85 12 24 / 59 85 10 67
            </div>

            <div className="col-lg-3 text-center">
                <i className="fa fa-clock-o"></i> Lun-Ven 09h00 - 17h00
            </div>

            <div className="col-lg-3 text-right">
                <div className="header-social-icons">
                    <a href="#"><i className="fa fa-behance"></i></a>
                    <a href="#"><i className="fa fa-pinterest"></i></a>
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="header-bottom">
    <div className="container">
        <div className="row">
            <div className="col-lg-4">
                <a href="index.html" className="logo">
                    <img src="/assets/img/logo.png" alt="JSOFT" />
                </a>
            </div>

            <div className="col-lg-8 d-none d-xl-block">
                <nav className="mainmenu alignright">
                    <ul>
                        <li className="active"><a href="#">Acceuil</a>
                        {/*
                            <ul>
                                <li><a href="index.html">Home 1</a></li>
                                <li><a href="index2.html">Home 2</a></li>
                                <li><a href="index3.html">Home 3</a></li>
                            </ul>
                            */}
                        </li>
                        <li><a href="/v1/back/back">About</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#exampleModal">services</a></li>
                        <li><a href="#">Cars</a>
                            <ul>
                                <li><a href="car-left-sidebar.html">Car Left Sidebar</a></li>
                                <li><a href="car-right-sidebar.html">Car Right Sidebar</a></li>
                                <li><a href="car-without-sidebar.html">Car Without Sidebar</a></li>
                                <li><a href="car-details.html">Car Details</a></li>
                            </ul>
                        </li>
                        <li><a href="index.html">Pages</a>
                            <ul>
                                <li><a href="package.html">Pricing</a></li>
                                <li><a href="driver.html">Driver</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="help-desk.html">Help Desk</a></li>
                                <li><a href="login.html">Log In</a></li>
                                <li><a href="register.html">Register</a></li>
                                <li><a href="404.html">404</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Blog</a>
                            <ul>
                                <li><a href="article.html">Blog Page</a></li>
                                <li><a href="article-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>
</header>
)

export default Header