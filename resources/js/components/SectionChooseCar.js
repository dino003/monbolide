import React from 'react'

export default function SectionChooseCar() {
    return (
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
            <div className="choose-content-wrap">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#popular_cars" role="tab" aria-selected="true">popular Cars</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#newest_cars" role="tab" aria-selected="false">newest cars</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#office_map" role="tab" aria-selected="false">Our Office</a>
                    </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="popular_cars" role="tabpanel" aria-labelledby="home-tab">
                        <div className="popular-cars-wrap">
                            <div className="popucar-menu text-center">
                                <a href="#" data-filter="*" className="active">all</a>
                                <a href="#" data-filter=".con">Conver</a>
                                <a href="#" data-filter=".hat">Truck</a>
                                <a href="#" data-filter=".mpv">MPV</a>
                                <a href="#" data-filter=".sedan">Sedan</a>
                                <a href="#" data-filter=".suv">SUV</a>
                            </div>


                            <div className="row popular-car-gird">
                                <div className="col-lg-4 col-md-6 con suv mpv">
                                    <div className="single-popular-car">
                                        <div className="p-car-thumbnails">
                                            <a className="car-hover" href="/assets/img/car/car-1.jpg" >
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

                                <div className="col-lg-4 col-md-6 hat sedan">
                                    <div className="single-popular-car">
                                        <div className="p-car-thumbnails">
                                            <a className="car-hover" href="/assets/img/car/car-2.jpg" >
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

                                <div className="col-lg-4 col-md-6 suv con mpv">
                                    <div className="single-popular-car">
                                        <div className="p-car-thumbnails">
                                            <a className="car-hover" href="/assets/img/car/car-3.jpg" >
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

                                <div className="col-lg-4 col-md-6 con hat">
                                    <div className="single-popular-car">
                                        <div className="p-car-thumbnails">
                                            <a className="car-hover" href="/assets/img/car/car-4.jpg" >
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

                                <div className="col-lg-4 col-md-6 con sedan mpv">
                                    <div className="single-popular-car">
                                        <div className="p-car-thumbnails">
                                            <a className="car-hover" href="/assets/img/car/car-5.jpg" >
                                              <img src="/assets/img/car/car-5.jpg" alt="JSOFT" />
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

                                <div className="col-lg-4 col-md-6 hat suv mpv">
                                    <div className="single-popular-car">
                                        <div className="p-car-thumbnails">
                                            <a className="car-hover" href="assets/img/car/car-6.jpg">
                                              <img src="/assets/img/car/car-6.jpg" alt="JSOFT" />
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

                    <div className="tab-pane fade" id="newest_cars" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="popular-cars-wrap">
                            <div className="newcar-menu text-center">
                                <a href="#" data-filter="*" className="active">all</a>
                                <a href="#" data-filter=".toyota">toyota</a>
                                <a href="#" data-filter=".bmw">bmw</a>
                                <a href="#" data-filter=".audi">audi</a>
                                <a href="#" data-filter=".tata">Tata</a>
                            </div>


                            <div className="row newest-car-gird">
                                <div className="col-lg-4 col-md-6 tata audi">
                                    <div className="single-new-car">
                                        <div className="p-car-thumbnails">
                                            <a className="car-hover" href="/assets/img/car/car-6.jpg" >
                                              <img src="/assets/img/car/car-6.jpg" alt="JSOFT" />
                                           </a>
                                        </div>

                                        <div className="p-car-content">
                                            <h3>
                                                <a href="#">Toyota RAV4 EV</a>
                                                <span className="price"><i className="fa fa-tag"></i> $35/day</span>
                                            </h3>

                                            <h5>Toyota</h5>

                                            <div className="p-car-feature">
                                                <a href="#">2018</a>
                                                <a href="#">Auto</a>
                                                <a href="#">Non AIR CONDITION</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 bmw tata toyota">
                                    <div className="single-new-car">
                                        <div className="p-car-thumbnails">
                                            <a className="car-hover" href="/assets/img/car/car-5.jpg" >
                                              <img src="/assets/img/car/car-5.jpg" alt="JSOFT" />
                                           </a>
                                        </div>

                                        <div className="p-car-content">
                                            <h3>
                                                <a href="#">Toyota RAV4 EV</a>
                                                <span className="price"><i className="fa fa-tag"></i> $35/day</span>
                                            </h3>

                                            <h5>Toyota</h5>

                                            <div className="p-car-feature">
                                                <a href="#">2018</a>
                                                <a href="#">Auto</a>
                                                <a href="#">Non AIR CONDITION</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 bmw">
                                    <div className="single-new-car">
                                        <div className="p-car-thumbnails">
                                            <a className="car-hover" href="/assets/img/car/car-4.jpg" >
                                              <img src="/assets/img/car/car-4.jpg" alt="JSOFT" />
                                           </a>
                                        </div>

                                        <div className="p-car-content">
                                            <h3>
                                                <a href="#">Toyota RAV4 EV</a>
                                                <span className="price"><i className="fa fa-tag"></i> $35/day</span>
                                            </h3>

                                            <h5>Toyota</h5>

                                            <div className="p-car-feature">
                                                <a href="#">2018</a>
                                                <a href="#">Auto</a>
                                                <a href="#">Non AIR CONDITION</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane fade" id="office_map" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="map-area">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6538067244583!2d90
                            .37092511435942!3d23.
                            79533919297639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1
                            m2!1s0x3755c0cce3251ab1%3A0x7a2aa979862a9643!2sJSoft!5e0!3m2!1sen!2sbd!4v1516771096779"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    )
}
