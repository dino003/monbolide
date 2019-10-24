import React from 'react'

export default function SectionFooter() {
    return (
        <section id="footer-area">
        <div className="footer-widget-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                            <h2>About Us</h2>
                            <div className="widget-body">
                                <img src="/assets/img/logo.png" alt="JSOFT" />
                                <p>Lorem ipsum dolored is a sit ameted consectetur adipisicing elit.
                                     Nobis magni assumenda distinctio debitis, eum fuga fugiat error reiciendis.</p>

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
                                <a href="https://goo.gl/maps/b5mt45MCaPB2" className="map-show" target="_blank">
                                    Show Location</a>
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
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                            All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true">
                                </i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
 
    </section>
    )
}
