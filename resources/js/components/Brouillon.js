
  import React, { Component } from 'react'
  import ReactDOM from 'react-dom'
  import { BrowserRouter, Route, Switch } from 'react-router-dom'
  import Header from '../layouts/Header'
  import Section1 from '../components/Section1'
  import Section2 from '../components/Section2'
  import SectionPartenaire from '../components/SectionPartenaire'
  import SectionServices from '../components/SectionServices'
  import SectionFooter from '../components/SectionFooter'
  import SectionFunFat from '../components/SectionFunFat'
  import SectionChooseCar from '../components/SectionChooseCar'


  class Main extends Component {
    render () {
      return (
        <BrowserRouter>
          <div>
            {/*
          <Header />
          <Section1 />
          <Section2 />
          <SectionPartenaire />
          <SectionServices />
          <SectionFunFat />
          <SectionChooseCar />

          <SectionFooter />
                */}

      <header id="header-area" className="fixed-top">
        <div id="header-top" className="d-none d-xl-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 text-left">
                        <i className="fa fa-map-marker"></i> 802/2, Mirpur, Dhaka
                    </div>

                    <div className="col-lg-3 text-center">
                        <i className="fa fa-mobile"></i> +1 800 345 678
                    </div>

                    <div className="col-lg-3 text-center">
                        <i className="fa fa-clock-o"></i> Mon-Fri 09.00 - 17.00
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
                        <a href="index2.html" className="logo">
                            <img src="/assets/img/logo.png" alt="JSOFT" />
                        </a>
                    </div>

                    <div className="col-lg-8 d-none d-xl-block">
                        <nav className="mainmenu alignright">
                            <ul>
                                <li className="active"><a href="#">Home</a>
                                    <ul>
                                        <li><a href="index.html">Home 1</a></li>
                                        <li><a href="index2.html">Home 2</a></li>
                                        <li><a href="index3.html">Home 3</a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="services.html">services</a></li>
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

    <section id="slideslow-bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="slideshowcontent">
                        <div className="display-table">
                            <div className="display-table-cell">
                              <br /><br /><br />
                                <h1>BOOK A CAR TODAY!</h1>
                                <p>FOR AS LOW AS $10 A DAY PLUS 15% DISCOUNT <br /> FOR OUR RETURNING CUSTOMERS</p>

                                <div className="book-ur-car">
                                    <form action="index2.html">
                                        <div className="pick-location bookinput-item">
                                            <select className="custom-select">
                                              <option selected>Pick Location</option>
                                              <option value="1">Dhaka</option>
                                              <option value="2">Comilla</option>
                                              <option value="3">Barishal</option>
                                              <option value="3">Rangpur</option>
                                            </select>
                                        </div>

                                        <div className="pick-date bookinput-item">
                                            <input id="startDate2" placeholder="Pick Date" />
                                        </div>

                                        <div className="retern-date bookinput-item">
                                            <input id="endDate2" placeholder="Return Date" />
                                        </div>

                                        <div className="car-choose bookinput-item">
                                            <select className="custom-select">
                                              <option selected>Choose Car</option>
                                              <option value="1">BMW</option>
                                              <option value="2">Audi</option>
                                              <option value="3">Lexus</option>
                                            </select>
                                        </div>

                                        <div className="bookcar-btn bookinput-item">
                                            <button type="submit">Book Car</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about-area" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>About us</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6">
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="about-content">
                                <p>Lorem simply dummy is a texted of the printing costed and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="about-image">
                        <img src="/assets/img/home-2-about.png" alt="JSOFT" />
                    </div>
                </div>
            </div>

            <div className="about-feature-area">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="about-feature-item active">
                            <i className="fa fa-car"></i>
                            <h3>ALL BRANDS</h3>
                            <p>Loremed ipsumed is a compnayes odsoyel dolor sit amet, consectetur adipisicing elit. Nesciunted all of.</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="about-feature-item">
                            <i className="fa fa-car"></i>
                            <h3>ALL BRANDS</h3>
                            <p>Loremed ipsumed is a compnayes odsoyel dolor sit amet, consectetur adipisicing elit. Nesciunted all of.</p>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="about-feature-item">
                            <i className="fa fa-car"></i>
                            <h3>ALL BRANDS</h3>
                            <p>Loremed ipsumed is a compnayes odsoyel dolor sit amet, consectetur adipisicing elit. Nesciunted all of.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div id="partner-area">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="partner-content-wrap">
                        <div className="single-partner">
                            <div className="display-table">
                                <div className="display-table-cell">
                                    <img src="/assets/img/partner/partner-logo-1.png" alt="JSOFT" />
                                </div>
                            </div>
                        </div>

                        <div className="single-partner">
                            <div className="display-table">
                                <div className="display-table-cell">
                                    <img src="/assets/img/partner/partner-logo-2.png" alt="JSOFT" />
                                </div>
                            </div>
                        </div>

                        <div className="single-partner">
                            <div className="display-table">
                                <div className="display-table-cell">
                                    <img src="/assets/img/partner/partner-logo-3.png" alt="JSOFT" />
                                </div>
                            </div>
                        </div>

                        <div className="single-partner">
                            <div className="display-table">
                                <div className="display-table-cell">
                                    <img src="/assets/img/partner/partner-logo-4.png" alt="JSOFT" />
                                </div>
                            </div>
                        </div>

                        <div className="single-partner">
                            <div className="display-table">
                                <div className="display-table-cell">
                                    <img src="/assets/img/partner/partner-logo-5.png" alt="JSOFT" />
                                </div>
                            </div>
                        </div>

                        <div className="single-partner">
                            <div className="display-table">
                                <div className="display-table-cell">
                                    <img src="/assets/img/partner/partner-logo-1.png" alt="JSOFT" />
                                </div>
                            </div>
                        </div>

                        <div className="single-partner">
                            <div className="display-table">
                                <div className="display-table-cell">
                                    <img src="/assets/img/partner/partner-logo-4.png" alt="JSOFT" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section id="service-area" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>Our Services</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

			<div className="row">
				<div className="col-lg-11 m-auto text-center">
					<div className="service-container-wrap">
						<div className="service-item">
							<i className="fa fa-taxi"></i>
							<h3>RENTAL CAR</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
						</div>

						<div className="service-item">
							<i className="fa fa-cog"></i>
							<h3>CAR REPAIR</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
						</div>

						<div className="service-item">
							<i className="fa fa-map-marker"></i>
							<h3>TAXI SERVICE</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
						</div>

						<div className="service-item">
							<i className="fa fa-life-ring"></i>
							<h3>life insurance</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
						</div>

						<div className="service-item">
							<i className="fa fa-bath"></i>
							<h3>car wash</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
						</div>

						<div className="service-item">
							<i className="fa fa-phone"></i>
							<h3>call driver</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit admollitia.</p>
						</div>
					</div>
				</div>
			</div>
        </div>
    </section>

    <section id="funfact-area" className="overlay section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-11 col-md-12 m-auto">
                    <div className="funfact-content-wrap">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-funfact">
                                    <div className="funfact-icon">
                                        <i className="fa fa-smile-o"></i>
                                    </div>
                                    <div className="funfact-content">
                                        <p><span className="counter">550</span>+</p>
                                        <h4>HAPPY CLIENTS</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-funfact">
                                    <div className="funfact-icon">
                                        <i className="fa fa-car"></i>
                                    </div>
                                    <div className="funfact-content">
                                        <p><span className="counter">250</span>+</p>
                                        <h4>CARS IN STOCK</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-funfact">
                                    <div className="funfact-icon">
                                        <i className="fa fa-bank"></i>
                                    </div>
                                    <div className="funfact-content">
                                        <p><span className="counter">50</span>+</p>
                                        <h4>office in cities</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="choose-car" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>Choose your Car</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="choose-ur-cars">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="home2-car-filter">
                                    <a href="#" data-filter="*" className="active">all</a>
                                    <a href="#" data-filter=".con">Conver</a>
                                    <a href="#" data-filter=".hat">Truck</a>
                                    <a href="#" data-filter=".mpv">MPV</a>
                                    <a href="#" data-filter=".sedan">Sedan</a>
                                    <a href="#" data-filter=".suv">SUV</a>
                                </div>
                            </div>

                            <div className="col-lg-9">
                                <div className="row popular-car-gird">

                                    <div className="col-lg-6 col-md-6 con suv mpv">
                                        <div className="single-popular-car">
                                            <div className="p-car-thumbnails">
                                                <a className="car-hover" href="assets/img/car/car-1.jpg">
                                                    <img src="/assets/img/car/car-1.jpg" alt="JSOFT" />
                                                </a>
                                            </div>

                                            <div className="p-car-content">
                                                <h3>
                                                    <a href="#">Dodge Ram 1500</a>
                                                    <span className="price"><i className="fa fa-tag"></i> $55/day</span>
                                                </h3>

                                                <h5>HATCHBACK</h5>

                                                <div className="p-car-feature">
                                                    <a href="#">2017</a>
                                                    <a href="#">manual</a>
                                                    <a href="#">AIR CONDITION</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 hat sedan">
                                        <div className="single-popular-car">
                                            <div className="p-car-thumbnails">
                                                <a className="car-hover" href="assets/img/car/car-2.jpg">
                                                    <img src="/assets/img/car/car-2.jpg" alt="JSOFT" />
                                                </a>
                                            </div>

                                            <div className="p-car-content">
                                                <h3>
                                                    <a href="#">Dodge Ram 1500</a>
                                                    <span className="price"><i className="fa fa-tag"></i> $55/day</span>
                                                </h3>

                                                <h5>HATCHBACK</h5>

                                                <div className="p-car-feature">
                                                    <a href="#">2017</a>
                                                    <a href="#">manual</a>
                                                    <a href="#">AIR CONDITION</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 suv con mpv">
                                        <div className="single-popular-car">
                                            <div className="p-car-thumbnails">
                                                <a className="car-hover" href="assets/img/car/car-3.jpg">
                                                   <img src="/assets/img/car/car-3.jpg" alt="JSOFT" />
                                                </a>
                                            </div>

                                            <div className="p-car-content">
                                                <h3>
                                                    <a href="#">Dodge Ram 1500</a>
                                                    <span className="price"><i className="fa fa-tag"></i> $55/day</span>
                                                </h3>

                                                <h5>HATCHBACK</h5>

                                                <div className="p-car-feature">
                                                    <a href="#">2017</a>
                                                    <a href="#">manual</a>
                                                    <a href="#">AIR CONDITION</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 con hat">
                                        <div className="single-popular-car">
                                            <div className="p-car-thumbnails">
                                                <a className="car-hover" href="assets/img/car/car-4.jpg">
                                                    <img src="/assets/img/car/car-4.jpg" alt="JSOFT" />
                                                </a>
                                            </div>

                                            <div className="p-car-content">
                                                <h3>
                                                    <a href="#">Dodge Ram 1500</a>
                                                    <span className="price"><i className="fa fa-tag"></i> $55/day</span>
                                                </h3>

                                                <h5>HATCHBACK</h5>

                                                <div className="p-car-feature">
                                                    <a href="#">2017</a>
                                                    <a href="#">manual</a>
                                                    <a href="#">AIR CONDITION</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="pricing-area" className="section-padding overlay">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>Only quality for clients</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6 text-center">
                    <div className="single-pricing-table">
                        <h3>BUSINESS</h3>
                        <h2>$ 55.99</h2>
                        <h5>PER MONTH</h5>

                        <ul className="package-list">
                            <li>FREE VEHICLE DELIVERY</li>
                            <li>WEDDINGS CELEBRATIONS</li>
                            <li>FULL INSURANCE INCLUDED</li>
                            <li>TRANSPORT ABROAD</li>
                            <li>ALL INCLUSIVE MINI BAR</li>
                            <li>CHAUFFER INCLUDED IN PRICE</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 text-center">
                    <div className="single-pricing-table">
                        <h3>Trial</h3>
                        <h2>Free</h2>
                        <h5>PER MONTH</h5>

                        <ul className="package-list">
                            <li>FREE VEHICLE DELIVERY</li>
                            <li>OTHER CELEBRATIONS</li>
                            <li>FULL INSURANCE</li>
                            <li>TRANSPORT ABROAD</li>
                            <li>MINI BAR</li>
                            <li>INCLUDED IN PRICE</li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 text-center">
                    <div className="single-pricing-table">
                        <h3>standard</h3>
                        <h2>$ 35.99</h2>
                        <h5>PER MONTH</h5>

                        <ul className="package-list">
                            <li>DELIVERY AT AIRPORT</li>
                            <li>WEDDINGS AND OTHER</li>
                            <li>FULL INCLUDED</li>
                            <li>TRANSPORT ABROAD</li>
                            <li>ALL MINI BAR</li>
                            <li>CHAUFFER PRICE</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="team-area" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>Our Creative Persons</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>Lorem ipsum dolor sit amet elit.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="team-content">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="team-tab-menu">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="tab_item_1" data-toggle="tab" href="#team_member_1" role="tab" aria-selected="true">
                                                <div className="team-mem-icon">
                                                    <img src="/assets/img/team/team-mem-thumb-1.png" alt="JSOFT" />
                                                </div>
                                                <h5>Raju Ahammad</h5>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="tab_item_2" data-toggle="tab" href="#team_member_2" role="tab" aria-selected="true">
                                                <div className="team-mem-icon">
                                                    <img src="/assets/img/team/team-mem-thumb-3.png" alt="JSOFT" />
                                                </div>
                                                <h5>Vongchong Smith</h5>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="tab_item_3" data-toggle="tab" href="#team_member_3" role="tab" aria-selected="true">
                                                <div className="team-mem-icon">
                                                    <img src="/assets/img/team/team-mem-thumb-2.png" alt="JSOFT" />
                                                </div>
                                                <h5>Alex Tuntuni</h5>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="tab_item_4" data-toggle="tab" href="#team_member_4" role="tab" aria-selected="true">
                                                <div className="team-mem-icon">
                                                    <img src="/assets/img/team/team-mem-thumb-4.png" alt="JSOFT" />
                                                </div>
                                                <h5>Any Anderssen</h5>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="team_member_1" role="tabpanel" aria-labelledby="tab_item_1">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-pro-pic">
                                                    <img src="/assets/img/team/team-mem-1.png" alt="JSOFT" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-info text-center">
                                                    <h4>Raju Ahammad</h4>
                                                    <h5>Developer</h5>
                                                    <span className="quote-icon"><i className="fa fa-quote-left"></i></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin fermentum dolor. Nunc nec augue urna. Cras varius orci vitae lacinia efficitur.</p>
                                                    <div className="team-social-icon">
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                                        <a href="#"><i className="fa fa-pinterest"></i></a>
                                                        <a href="#"><i className="fa fa-dribbble"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="team_member_2" role="tabpanel" aria-labelledby="tab_item_2">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-pro-pic">
                                                    <img src="/assets/img/team/team-mem-3.png" alt="JSOFT" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-info text-center">
                                                    <h4>Vongchong Smith</h4>
                                                    <h5>Designer</h5>
                                                    <span className="quote-icon"><i className="fa fa-quote-left"></i></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin fermentum dolor. Nunc nec augue urna. Cras varius orci vitae lacinia efficitur.</p>
                                                    <div className="team-social-icon">
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                                        <a href="#"><i className="fa fa-pinterest"></i></a>
                                                        <a href="#"><i className="fa fa-dribbble"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="team_member_3" role="tabpanel" aria-labelledby="tab_item_3">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-pro-pic">
                                                    <img src="/assets/img/team/team-mem-2.png" alt="JSOFT" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-info text-center">
                                                    <h4>Alex Tuntuni</h4>
                                                    <h5>Marketer</h5>
                                                    <span className="quote-icon"><i className="fa fa-quote-left"></i></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin fermentum dolor. Nunc nec augue urna. Cras varius orci vitae lacinia efficitur.</p>
                                                    <div className="team-social-icon">
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                                        <a href="#"><i className="fa fa-pinterest"></i></a>
                                                        <a href="#"><i className="fa fa-dribbble"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="team_member_4" role="tabpanel" aria-labelledby="tab_item_4">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-pro-pic">
                                                    <img src="/assets/img/team/team-mem-4.png" alt="JSOFT" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="team-member-info text-center">
                                                    <h4>Any Anderssen</h4>
                                                    <h5>Manager</h5>
                                                    <span className="quote-icon"><i className="fa fa-quote-left"></i></span>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin fermentum dolor. Nunc nec augue urna. Cras varius orci vitae lacinia efficitur.</p>
                                                    <div className="team-social-icon">
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                        <a href="#"><i className="fa fa-linkedin"></i></a>
                                                        <a href="#"><i className="fa fa-pinterest"></i></a>
                                                        <a href="#"><i className="fa fa-dribbble"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div id="mobileapp-video-bg"></div>
    <section id="mobile-app-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="mobile-app-content">
                        <h2>SAVE 30% WITH THE APP</h2>
                        <p>Easy &amp; Fast - Book a car in 60 seconds</p>
                        <div className="app-btns">
                            <a href="#"><i className="fa fa-android"></i> Android Store</a>
                            <a href="#"><i className="fa fa-apple"></i> Apple Store</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="tips-article-area" className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title  text-center">
                        <h2>Tips and articles</h2>
                        <span className="title-line"><i className="fa fa-car"></i></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <article className="single-article">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="article-thumb">
                                    <img src="/assets/img/article/arti-thumb-1.jpg" alt="JSOFT" />
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <div className="article-body">
                                            <h3><a href="article-details.html">Wliquam sit amet urna eullam</a></h3>
                                            <div className="article-meta">
                                                <a href="#" className="author">By :: <span>Admin</span></a>
                                                <a href="#" className="commnet">Comments :: <span>10</span></a>
                                            </div>

                                            <div className="article-date">25 <span className="month">jan</span></div>

                                            <p>Wlam aiber vestibulum fringilla oremedad ipsum dolor sit amet consectetur adipisicing elit sed doned eiusmod tempored incididunt ut labore et dolore magna aliquaa enimd ad minim veniad.</p>

                                            <a href="article-details.html" className="readmore-btn">Read More <i className="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="col-lg-12">
                    <article className="single-article middle">
                        <div className="row">

                            <div className="col-lg-5 d-xl-none">
                                <div className="article-thumb">
                                    <img src="/assets/img/article/arti-thumb-2.jpg" alt="JSOFT" />
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <div className="article-body">
                                            <h3><a href="article-details.html">fringilla oremedad ipsum dolor sit</a></h3>
                                            <div className="article-meta">
                                                <a href="#" className="author">By :: <span>Admin</span></a>
                                                <a href="#" className="commnet">Comments :: <span>10</span></a>
                                            </div>

                                            <div className="article-date">14<span className="month">feb</span></div>

                                            <p>Wlam aiber vestibulum fringilla oremedad ipsum dolor sit amet consectetur adipisicing elit sed doned eiusmod tempored incididunt ut labore et dolore magna aliquaa enimd ad minim veniad.</p>

                                            <a href="article-details.html" className="readmore-btn">Read More 
                                            <i className="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-5 d-none d-xl-block">
                                <div className="article-thumb">
                                    <img src="/assets/img/article/arti-thumb-2.jpg" alt="JSOFT" />
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="col-lg-12">
                    <article className="single-article">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="article-thumb">
                                    <img src="/assets/img/article/arti-thumb-3.jpg" alt="JSOFT" />
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="display-table">
                                    <div className="display-table-cell">
                                        <div className="article-body">
                                            <h3><a href="article-details.html">Tempored incididunt ut labore</a></h3>
                                            <div className="article-meta">
                                                <a href="#" className="author">By :: <span>Admin</span></a>
                                                <a href="#" className="commnet">Comments :: <span>10</span></a>
                                            </div>

                                            <div className="article-date">17 <span className="month">feb</span></div>

                                            <p>Wlam aiber vestibulum fringilla oremedad ipsum dolor sit amet consectetur adipisicing elit sed doned eiusmod tempored incididunt ut labore et dolore magna aliquaa enimd ad minim veniad.</p>

                                            <a href="article-details.html" className="readmore-btn">Read More <i className="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>

    <section id="footer-area">
        <div className="footer-widget-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                            <h2>About Us</h2>
                            <div className="widget-body">
                                <img src="/assets/img/logo.png" alt="JSOFT" />
                                <p>Lorem ipsum dolored is a sit ameted consectetur adipisicing elit. Nobis magni assumenda distinctio debitis, eum fuga fugiat error reiciendis.</p>

                                <div className="newsletter-area">
                                    <form action="index.html">
                                        <input type="email" placeholder="Subscribe Our Newsletter" />
                                        <button type="submit" className="newsletter-btn"><i className="fa fa-send"></i></button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                            <h2>Recent Posts</h2>
                            <div className="widget-body">
                                <ul className="recent-post">
                                    <li>
                                        <a href="#">
                                           Hello Bangladesh! 
                                           <i className="fa fa-long-arrow-right"></i>
                                       </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                          Lorem ipsum dolor sit amet
                                           <i className="fa fa-long-arrow-right"></i>
                                       </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                           Hello Bangladesh! 
                                           <i className="fa fa-long-arrow-right"></i>
                                       </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            consectetur adipisicing elit?
                                           <i className="fa fa-long-arrow-right"></i>
                                       </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                            <h2>get touch</h2>
                            <div className="widget-body">
                                <p>Lorem ipsum doloer sited amet, consectetur adipisicing elit. nibh auguea, scelerisque sed</p>

                                <ul className="get-touch">
                                    <li><i className="fa fa-map-marker"></i> 800/8, Kazipara, Dhaka</li>
                                    <li><i className="fa fa-mobile"></i> +880 01 86 25 72 43</li>
                                    <li><i className="fa fa-envelope"></i> kazukamdu83@gmail.com</li>
                                </ul>
                                <a href="https://goo.gl/maps/b5mt45MCaPB2" className="map-show" target="_blank">Show Location</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-bottom-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <p>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


          </div>
        </BrowserRouter>
      )
    }
  }

  ReactDOM.render(<Main />, document.getElementById('app'))