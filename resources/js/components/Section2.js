import React from 'react'

export default function Section2() {
    return (
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
        
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi aliquid debitis optio praesentium, voluptate repellat accusantium deserunt eius.</p>
                                <div className="about-btn">
                                    <a href="#">Book a Car</a>
                                    <a href="#">Contact Us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div className="col-lg-6">
                    <div className="about-video">
                        <iframe src="https://player.vimeo.com/video/121982328?title=0&byline=0&portrait=0"></iframe>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
