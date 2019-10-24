import React from 'react'

export default function Section1() {
    return (
        <section id="slideslow-bg">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="slideshowcontent">
                        <div className="display-table">
                            <div className="display-table-cell">
                              <br /><br />

                                <h1>RESERVEZ UNE VOITURE AUJOURD'HUI !</h1>
                                    <p>POUR MOINS DE 5000 FCFA PAR JOUR PLUS 15% DE REDUCTION <br />
                                     POUR NOS FIDELES CLIENTS</p>

                                <div className="book-ur-car">
                             
                                        <div className="pick-location bookinput-item">
                                            <select className="custom-select">
                                              <option value="0">Pick Location</option>
                                              <option value="1">Dhaka</option>
                                              <option value="2">Comilla</option>
                                              <option value="3">Barishal</option>
                                              <option value="3">Rangpur</option>
                                            </select>
                                        </div>

                                        <div className="pick-date bookinput-item">
                                            <input id="startDate2" placeholder="Date proposée" />
                                        </div>

                                        <div className="retern-date bookinput-item">
                                            <input id="endDate2" placeholder="Return Date" />
                                        </div>

                                        <div className="car-choose bookinput-item">
                                            <select className="custom-select">
                                              <option value="0">Choose Car</option>
                                              <option value="1">BMW</option>
                                              <option value="2">Audi</option>
                                              <option value="3">Lexus</option>
                                            </select>
                                        </div>

                                        

                                        <div className="bookcar-btn bookinput-item">
                                            <button type="submit">Book Car</button>
                                        </div>
                                        <div className="bookcar-btn bookinput-item">
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
    )
}
