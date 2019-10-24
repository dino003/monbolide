<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
         <!--=== Favicon ===-->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

            <title>Mon Bolide.com</title>

            <!--=== Bootstrap CSS ===-->
            <link href="{{asset ('assets/css/bootstrap.min.css') }}" rel="stylesheet">
            <!--=== Vegas Min CSS ===-->
             <link href="{{ asset('assets/css/plugins/vegas.min.css') }}" rel="stylesheet">
            <!--=== Slicknav CSS ===-->
            <link href="{{asset ('assets/css/plugins/slicknav.min.css') }}" rel="stylesheet">
            <!--=== Magnific Popup CSS ===-->
            <link href="{{asset ('assets/css/plugins/magnific-popup.css') }}" rel="stylesheet">
            <!--=== Owl Carousel CSS ===-->
            <link href="{{asset ('assets/css/plugins/owl.carousel.min.css') }}" rel="stylesheet">
            <!--=== Gijgo CSS ===-->
            <link href="{{asset ('assets/css/plugins/gijgo.css') }}" rel="stylesheet">
            <!--=== FontAwesome CSS ===-->
            <link href="{{asset ('assets/css/font-awesome.css') }}" rel="stylesheet">
            <!--=== Theme Reset CSS ===-->
            <link href="{{asset ('assets/css/reset.css') }}" rel="stylesheet">
            <!--=== Main Style CSS ===-->
            <link href="{{asset ('style.css') }}" rel="stylesheet">
            <!--=== Responsive CSS ===-->
            <link href="{{asset ('assets/css/responsive.css') }}" rel="stylesheet">



            <!--[if lt IE 9]>
                <script src="//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
                <script src="//oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
            <![endif]-->
    </head>

    <body class="loader-active">
   

    <header id="header-area" class="fixed-top">
 
<div id="header-top" class="d-none d-xl-block">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 text-left">
                <i class="fa fa-map-marker"></i> 802/2, CI, Abidjan
            </div>

            <div class="col-lg-3 text-center">
                <i class="fa fa-mobile"></i> +225 89 85 12 24 / 59 85 10 67
            </div>

            <div class="col-lg-3 text-center">
                <i class="fa fa-clock-o"></i> Lun-Ven 09h00 - 17h00
            </div>

            <div class="col-lg-3 text-right">
                <div class="header-social-icons">
                    <a href="#"><i class="fa fa-behance"></i></a>
                    <a href="#"><i class="fa fa-pinterest"></i></a>
                    <a href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="header-bottom">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <a href="index.html" class="logo">
                    <img src="{{asset('assets/img/logo.png')}}" alt="JSOFT" />
                </a>
            </div>

            <div class="col-lg-8 d-none d-xl-block">
                <nav class="mainmenu alignright">
                    <ul>
                        <li class="active"><a href="#">Acceuil</a>
                      
                        </li>
                        <li><a href="/v1/back/back">About</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#exampleModal">services</a></li>
                        <li><a href="#">Compte</a>
                            <ul>
                                <li><a href="car-left-sidebar.html">Connexion</a></li>
                                <li><a href="car-right-sidebar.html">Inscription</a></li>
                                
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
<!-- section 1 -->
<section id="slideslow-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="slideshowcontent">
                        <div class="display-table">
                            <div class="display-table-cell">
                              <br /><br />

                                <h1>RESERVEZ UNE VOITURE AUJOURD'HUI !</h1>
                                    <p>POUR MOINS DE 5000 FCFA PAR JOUR PLUS 15% DE REDUCTION <br />
                                     POUR NOS FIDELES CLIENTS</p>

                                <div class="book-ur-car">
                             
                                        <div class="pick-location bookinput-item">
                                            <select class="custom-select">
                                              <option value="0">Pick Location</option>
                                              <option value="1">Dhaka</option>
                                              <option value="2">Comilla</option>
                                              <option value="3">Barishal</option>
                                              <option value="3">Rangpur</option>
                                            </select>
                                        </div>

                                        <div class="pick-date bookinput-item">
                                            <input id="startDate2" placeholder="Date proposée" />
                                        </div>

                                        <div class="retern-date bookinput-item">
                                            <input id="endDate2" placeholder="Return Date" />
                                        </div>

                                        <div class="car-choose bookinput-item">
                                            <select class="custom-select">
                                              <option value="0">Choose Car</option>
                                              <option value="1">BMW</option>
                                              <option value="2">Audi</option>
                                              <option value="3">Lexus</option>
                                            </select>
                                        </div>

                                        

                                        <div class="bookcar-btn bookinput-item">
                                            <button type="submit">Book Car</button>
                                        </div>
                                        <div class="bookcar-btn bookinput-item">
                                            <button type="submit">Book Car</button>
                                        </div>
                                </div>
                                <br /><br /><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- fin section 1 -->
<!-- section services -->
    <section id="service-area" class="section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title  text-center">
                        <h2>Nos Services</h2>
                        <span class="title-line"><i class="fa fa-car"></i></span>
                        <p>Nous proposons une large gamme de service pour améliorer votre quotidien.</p>
                    </div>
                </div>
            </div>

           
			<div class="row">
				<div class="col-lg-4 text-center">
					<div class="service-item">
						<i class="fa fa-taxi"></i>
						<h5>LOCATION DE VEHICULE</h5>
						<p>Louez des véhicules sur des périodes que vous voulez avec un excéllent rapport <br /> prix / temps.</p>
					</div>
				</div>
				
				<div class="col-lg-4 text-center">
					<div class="service-item">
						<i class="fa fa-cog"></i>
						<h5>COCHING A LA CONDUITE AUTOMOBILLE</h5>
						<p>Prennez la route sereinement après une formation complète de conduite auprès de nos experts.</p>
					</div>
				</div>
				
				<div class="col-lg-4 text-center">
					<div class="service-item">
						<i class="fa fa-map-marker"></i>
						<h5>COVOITURAGE</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
					</div>
				</div>
				
				<div class="col-lg-4 text-center">
					<div class="service-item">
						<i class="fa fa-life-ring"></i>
						<h3>life insurance</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
					</div>
				</div>
				
				<div class="col-lg-4 text-center">
					<div class="service-item">
						<i class="fa fa-bath"></i>
						<h3>car wash</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
					</div>
				</div>
				
				<div class="col-lg-4 text-center">
					<div class="service-item">
						<i class="fa fa-phone"></i>
						<h3>call driver</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
					</div>
				</div>
			</div>
        </div>
    </section>
    <!-- fin section services -->

    <!-- section fun fat -->
    <section id="funfact-area" class="overlay section-padding"> 
        <div class="container">
            <div class="row">
                <div class="col-lg-11 col-md-12 m-auto">
                    <div class="funfact-content-wrap">
                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="single-funfact">
                                    <div class="funfact-icon">
                                        <i class="fa fa-smile-o"></i>
                                    </div>
                                    <div class="funfact-content">
                                        <p>+ <span class="counter">550</span></p>
                                        <h4>CLIENTS SATISFAITS</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-funfact">
                                    <div class="funfact-icon">
                                        <i class="fa fa-car"></i>
                                    </div>
                                    <div class="funfact-content">
                                        <p>+ <span class="counter">250</span></p>
                                        <h4>VéHICULES EN STOCK</h4>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="single-funfact">
                                    <div class="funfact-icon">
                                        <i class="fa fa-bank"></i>
                                    </div>
                                    <div class="funfact-content">
                                        <p>+ <span class="counter">50</span></p>
                                        <h4>Répères à Abidjan</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- fin section fun fat -->

    <!-- section footer -->
    <section id="footer-area">
        <div class="footer-widget-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single-footer-widget">
                            <h2>About Us</h2>
                            <div class="widget-body">
                                <img src="/assets/img/logo.png" alt="JSOFT" />
                                <p>Lorem ipsum dolored is a sit ameted consectetur adipisicing elit.
                                     Nobis magni assumenda distinctio debitis, eum fuga fugiat error reiciendis.</p>

                                <div class="newsletter-area">
                                    <form action="index.html">
                                        <input type="email" placeholder="Subscribe Our Newsletter" />
                                        <button type="submit" class="newsletter-btn"><i class="fa fa-send"></i></button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-footer-widget">
                            <h2>Recent Posts</h2>
                            <div class="widget-body">
                                <ul class="recent-post">
                                    <li>
                                        <a href="#">
                                           Hello Bangladesh! 
                                           <i class="fa fa-long-arrow-right"></i>
                                       </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                          Lorem ipsum dolor sit amet
                                           <i class="fa fa-long-arrow-right"></i>
                                       </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                           Hello Bangladesh! 
                                           <i class="fa fa-long-arrow-right"></i>
                                       </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            consectetur adipisicing elit?
                                           <i class="fa fa-long-arrow-right"></i>
                                       </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <div class="single-footer-widget">
                            <h2>get touch</h2>
                            <div class="widget-body">
                                <p>Lorem ipsum doloer sited amet, consectetur adipisicing elit. nibh auguea, scelerisque sed</p>

                                <ul class="get-touch">
                                    <li><i class="fa fa-map-marker"></i> 800/8, Kazipara, Dhaka</li>
                                    <li><i class="fa fa-mobile"></i> +880 01 86 25 72 43</li>
                                    <li><i class="fa fa-envelope"></i> kazukamdu83@gmail.com</li>
                                </ul>
                                <a href="https://goo.gl/maps/b5mt45MCaPB2" class="map-show" target="_blank">
                                    Show Location</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <p>
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                            All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true">
                                </i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
 
    </section>
    <!-- fin section footer -->
    <div class="scroll-top">
        <img src="{{asset('assets/img/scroll-top.png')}}" alt="JSOFT">
    </div>

        <!--=======================Javascript============================-->
    <!--=== Jquery Min Js ===-->
    <script src="{{ asset('assets/js/jquery-3.2.1.min.js ') }}"></script>
    <!--=== Jquery Migrate Min Js ===-->
    <script src="{{ asset('assets/js/jquery-migrate.min.js ') }}"></script>
    <!--=== Popper Min Js ===-->
    <script src="{{ asset('assets/js/popper.min.js ') }}"></script>
    <!--=== Bootstrap Min Js ===-->
    <script src="{{ asset('assets/js/bootstrap.min.js ') }}"></script>
    <!--=== Gijgo Min Js ===-->
    <script src="{{ asset('assets/js/plugins/gijgo.js ') }}"></script>
    <!--=== Vegas Min Js ===-->
    <script src="{{ asset('assets/js/plugins/vegas.min.js ') }}"></script>
    <!--=== Isotope Min Js ===-->
    <script src="{{ asset('assets/js/plugins/isotope.min.js ') }}"></script>
    <!--=== Owl Caousel Min Js ===-->
    <script src="{{ asset('assets/js/plugins/owl.carousel.min.js ') }}"></script>
    <!--=== Waypoint Min Js ===-->
    <script src="{{ asset('assets/js/plugins/waypoints.min.js ') }}"></script>
    <!--=== CounTotop Min Js ===-->
    <script src="{{ asset('assets/js/plugins/counterup.min.js ') }}"></script>
    <!--=== YtPlayer Min Js ===-->
    <script src="{{ asset('assets/js/plugins/mb.YTPlayer.js ') }}"></script>
    <!--=== Magnific Popup Min Js ===-->
    <script src="{{ asset('assets/js/plugins/magnific-popup.min.js ') }}"></script>
    <!--=== Slicknav Min Js ===-->
  <!--  <script src="{{ asset('assets/js/plugins/slicknav.min.js')}}"></script> -->

    </body>
</html>



