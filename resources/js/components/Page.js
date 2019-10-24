import React from 'react'

export default function Page() {
    return (
        <div className="main-content-container container-fluid px-4">
            <div className="page-header row no-gutters py-1">
              <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                <span className="text-uppercase page-subtitle">Dashboard</span>
                <h3 className="page-title">Blog Overview</h3>
              </div>
            </div>

            <div className="row">
              <div className="col-lg col-md-6 col-sm-6 mb-4">
                <div className="stats-small stats-small--1 card card-small">
                  <div className="card-body p-0 d-flex">
                    <div className="d-flex flex-column m-auto">
                      <div className="stats-small__data text-center">
                        <span className="stats-small__label text-uppercase">Posts</span>
                        <h6 className="stats-small__value count my-3">2,390</h6>
                      </div>
                      <div className="stats-small__data">
                        <span className="stats-small__percentage stats-small__percentage--increase">4.7%</span>
                      </div>
                    </div>
                    <canvas height="120" className="blog-overview-stats-small-1"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-lg col-md-6 col-sm-6 mb-4">
                <div className="stats-small stats-small--1 card card-small">
                  <div className="card-body p-0 d-flex">
                    <div className="d-flex flex-column m-auto">
                      <div className="stats-small__data text-center">
                        <span className="stats-small__label text-uppercase">Pages</span>
                        <h6 className="stats-small__value count my-3">182</h6>
                      </div>
                      <div className="stats-small__data">
                        <span className="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                      </div>
                    </div>
                    <canvas height="120" className="blog-overview-stats-small-2"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-lg col-md-4 col-sm-6 mb-4">
                <div className="stats-small stats-small--1 card card-small">
                  <div className="card-body p-0 d-flex">
                    <div className="d-flex flex-column m-auto">
                      <div className="stats-small__data text-center">
                        <span className="stats-small__label text-uppercase">Comments</span>
                        <h6 className="stats-small__value count my-3">8,147</h6>
                      </div>
                      <div className="stats-small__data">
                        <span className="stats-small__percentage stats-small__percentage--decrease">3.8%</span>
                      </div>
                    </div>
                    <canvas height="120" className="blog-overview-stats-small-3"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-lg col-md-4 col-sm-6 mb-4">
                <div className="stats-small stats-small--1 card card-small">
                  <div className="card-body p-0 d-flex">
                    <div className="d-flex flex-column m-auto">
                      <div className="stats-small__data text-center">
                        <span className="stats-small__label text-uppercase">Users</span>
                        <h6 className="stats-small__value count my-3">2,413</h6>
                      </div>
                      <div className="stats-small__data">
                        <span className="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                      </div>
                    </div>
                    <canvas height="120" className="blog-overview-stats-small-4"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-lg col-md-4 col-sm-12 mb-4">
                <div className="stats-small stats-small--1 card card-small">
                  <div className="card-body p-0 d-flex">
                    <div className="d-flex flex-column m-auto">
                      <div className="stats-small__data text-center">
                        <span className="stats-small__label text-uppercase">Subscribers</span>
                        <h6 className="stats-small__value count my-3">17,281</h6>
                      </div>
                      <div className="stats-small__data">
                        <span className="stats-small__percentage stats-small__percentage--decrease">2.4%</span>
                      </div>
                    </div>
                    <canvas height="120" className="blog-overview-stats-small-5"></canvas>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-12 col-sm-12 mb-4">
                <div className="card card-small">
                  <div className="card-header border-bottom">
                    <h6 className="m-0">Users</h6>
                  </div>
                  <div className="card-body pt-0">
                    <div className="row border-bottom py-2 bg-light">
                      <div className="col-12 col-sm-6">
                        <div id="blog-overview-date-range"
                         className="input-daterange input-group input-group-sm my-auto ml-auto mr-auto ml-sm-auto mr-sm-0"
                          style={{maxWidth: '350px'}}>
                          <input type="text" className="input-sm form-control" name="start" 
                          placeholder="Start Date" id="blog-overview-date-range-1" />
                          <input type="text" className="input-sm form-control" name="end"
                           placeholder="End Date" id="blog-overview-date-range-2" />
                          <span className="input-group-append">
                            <span className="input-group-text">
                              <i className="material-icons"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-sm-6 d-flex mb-2 mb-sm-0">
                        <button type="button" className="btn btn-sm btn-white ml-auto mr-auto ml-sm-auto mr-sm-0 mt-3 mt-sm-0">View Full Report &rarr;</button>
                      </div>
                    </div>
                    <canvas height="130" style={{maxWidth: '100%'}} className="blog-overview-users"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card card-small h-100">
                  <div className="card-header border-bottom">
                    <h6 className="m-0">Users by device</h6>
                  </div>
                  <div className="card-body d-flex py-0">
                    <canvas height="220" className="blog-users-by-device m-auto"></canvas>
                  </div>
                  <div className="card-footer border-top">
                    <div className="row">
                      <div className="col">
                        <select className="custom-select custom-select-sm" style={{maxWidth: '130px'}}>
                          <option value="0">Last Week</option>
                          <option value="1">Today</option>
                          <option value="2">Last Month</option>
                          <option value="3">Last Year</option>
                        </select>
                      </div>
                      <div className="col text-right view-report">
                        <a href="#">Full report &rarr;</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card card-small h-100">
                  <div className="card-header border-bottom">
                    <h6 className="m-0">New Draft</h6>
                  </div>
                  <div className="card-body d-flex flex-column">
                    <form className="quick-post-form">
                      <div className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1"
                         aria-describedby="emailHelp" placeholder="Brave New World" /> </div>
                      <div className="form-group">
                        <textarea className="form-control" placeholder="Words can be like X-rays if you use them properly..."></textarea>
                      </div>
                      <div className="form-group mb-0">
                        <button type="submit" className="btn btn-accent">Create Draft</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-sm-12 mb-4">
                <div className="card card-small blog-comments">
                  <div className="card-header border-bottom">
                    <h6 className="m-0">Discussions</h6>
                  </div>
                  <div className="card-body p-0">
                    <div className="blog-comments__item d-flex p-3">
                      <div className="blog-comments__avatar mr-3">
                        <img src="/back/images/avatars/1.jpg" alt="User avatar" /> </div>
                      <div className="blog-comments__content">
                        <div className="blog-comments__meta text-muted">
                          <a className="text-secondary" href="#">James Johnson</a> on
                          <a className="text-secondary" href="#">Hello World!</a>
                          <span className="text-muted">– 3 days ago</span>
                        </div>
                        <p className="m-0 my-1 mb-2 text-muted">Well, the way they make shows is, they make one show ...</p>
                        <div className="blog-comments__actions">
                          <div className="btn-group btn-group-sm">
                            <button type="button" className="btn btn-white">
                              <span className="text-success">
                                <i className="material-icons">check</i>
                              </span> Approve </button>
                            <button type="button" className="btn btn-white">
                              <span className="text-danger">
                                <i className="material-icons">clear</i>
                              </span> Reject </button>
                            <button type="button" className="btn btn-white">
                              <span className="text-light">
                                <i className="material-icons">more_vert</i>
                              </span> Edit </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-comments__item d-flex p-3">
                      <div className="blog-comments__avatar mr-3">
                        <img src="/back/images/avatars/2.jpg" alt="User avatar" /> </div>
                      <div className="blog-comments__content">
                        <div className="blog-comments__meta text-muted">
                          <a className="text-secondary" href="#">James Johnson</a> on
                          <a className="text-secondary" href="#">Hello World!</a>
                          <span className="text-muted">– 4 days ago</span>
                        </div>
                        <p className="m-0 my-1 mb-2 text-muted">After the avalanche, it took us a week to climb out. Now...</p>
                        <div className="blog-comments__actions">
                          <div className="btn-group btn-group-sm">
                            <button type="button" className="btn btn-white">
                              <span className="text-success">
                                <i className="material-icons">check</i>
                              </span> Approve </button>
                            <button type="button" className="btn btn-white">
                              <span className="text-danger">
                                <i className="material-icons">clear</i>
                              </span> Reject </button>
                            <button type="button" className="btn btn-white">
                              <span className="text-light">
                                <i className="material-icons">more_vert</i>
                              </span> Edit </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="blog-comments__item d-flex p-3">
                      <div className="blog-comments__avatar mr-3">
                        <img src="/back/images/avatars/3.jpg" alt="User avatar" /> </div>
                      <div className="blog-comments__content">
                        <div className="blog-comments__meta text-muted">
                          <a className="text-secondary" href="#">James Johnson</a> on
                          <a className="text-secondary" href="#">Hello World!</a>
                          <span className="text-muted">– 5 days ago</span>
                        </div>
                        <p className="m-0 my-1 mb-2 text-muted">My money's in that office, right? If she start giving me...</p>
                        <div className="blog-comments__actions">
                          <div className="btn-group btn-group-sm">
                            <button type="button" className="btn btn-white">
                              <span className="text-success">
                                <i className="material-icons">check</i>
                              </span> Approve </button>
                            <button type="button" className="btn btn-white">
                              <span className="text-danger">
                                <i className="material-icons">clear</i>
                              </span> Reject </button>
                            <button type="button" className="btn btn-white">
                              <span className="text-light">
                                <i className="material-icons">more_vert</i>
                              </span> Edit </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer border-top">
                    <div className="row">
                      <div className="col text-center view-report">
                        <button type="submit" className="btn btn-white">View All Comments</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 col-sm-12 mb-4">
                <div className="card card-small">
                  <div className="card-header border-bottom">
                    <h6 className="m-0">Top Referrals</h6>
                  </div>
                  <div className="card-body p-0">
                    <ul className="list-group list-group-small list-group-flush">
                      <li className="list-group-item d-flex px-3">
                        <span className="text-semibold text-fiord-blue">GitHub</span>
                        <span className="ml-auto text-right text-semibold text-reagent-gray">19,291</span>
                      </li>
                      <li className="list-group-item d-flex px-3">
                        <span className="text-semibold text-fiord-blue">Stack Overflow</span>
                        <span className="ml-auto text-right text-semibold text-reagent-gray">11,201</span>
                      </li>
                      <li className="list-group-item d-flex px-3">
                        <span className="text-semibold text-fiord-blue">Hacker News</span>
                        <span className="ml-auto text-right text-semibold text-reagent-gray">9,291</span>
                      </li>
                      <li className="list-group-item d-flex px-3">
                        <span className="text-semibold text-fiord-blue">Reddit</span>
                        <span className="ml-auto text-right text-semibold text-reagent-gray">8,281</span>
                      </li>
                      <li className="list-group-item d-flex px-3">
                        <span className="text-semibold text-fiord-blue">The Next Web</span>
                        <span className="ml-auto text-right text-semibold text-reagent-gray">7,128</span>
                      </li>
                      <li className="list-group-item d-flex px-3">
                        <span className="text-semibold text-fiord-blue">Tech Crunch</span>
                        <span className="ml-auto text-right text-semibold text-reagent-gray">6,218</span>
                      </li>
                      <li className="list-group-item d-flex px-3">
                        <span className="text-semibold text-fiord-blue">YouTube</span>
                        <span className="ml-auto text-right text-semibold text-reagent-gray">1,218</span>
                      </li>
                      <li className="list-group-item d-flex px-3">
                        <span className="text-semibold text-fiord-blue">Adobe</span>
                        <span className="ml-auto text-right text-semibold text-reagent-gray">827</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer border-top">
                    <div className="row">
                      <div className="col">
                        <select className="custom-select custom-select-sm">
                          <option value="0">Last Week</option>
                          <option value="1">Today</option>
                          <option value="2">Last Month</option>
                          <option value="3">Last Year</option>
                        </select>
                      </div>
                      <div className="col text-right view-report">
                        <a href="#">Full report &rarr;</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}
