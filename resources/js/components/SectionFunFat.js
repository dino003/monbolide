import React from 'react'

export default function SectionFunFat() {
    return (
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
                                        <p>+ <span className="counter">550</span></p>
                                        <h4>CLIENTS SATISFAITS</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-funfact">
                                    <div className="funfact-icon">
                                        <i className="fa fa-car"></i>
                                    </div>
                                    <div className="funfact-content">
                                        <p>+ <span className="counter">250</span></p>
                                        <h4>VéHICULES EN STOCK</h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-funfact">
                                    <div className="funfact-icon">
                                        <i className="fa fa-bank"></i>
                                    </div>
                                    <div className="funfact-content">
                                        <p>+ <span className="counter">50</span></p>
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
    )
}
