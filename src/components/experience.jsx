import React from "react"

class Experience extends React.Component {
  render() {
    return (
      <section className="resume py-5 d-lg-flex justify-content-center align-items-center" id="resume">
        <div className="container">
          <div className="row">
              <div className="col-lg-6 col-12">
                <h2 className="mb-4">Experiences</h2>

                  <div className="timeline">
                      <div className="timeline-wrapper">
                           <div className="timeline-yr">
                                <span>2020</span>
                           </div>
                           <div className="timeline-info">
                                <h3><span>IT Infrastructure and Operations Coordinator</span><small>Metrô de São Paulo</small></h3>
                                <p>Head of an IT infrastructure team with more than 30 professionals whose mission is to maintain and provide IT infrastructure resources for Metrô de São Paulo.</p>
                           </div>
                      </div>

                      <div className="timeline-wrapper">
                           <div className="timeline-yr">
                                <span>2019</span>
                           </div>
                           <div className="timeline-info">
                                <h3><span>Freelancer at Workana</span></h3>
                                <p>I performed more than 10 jobs as a freelancer on the Workana platform in parallel with my fulltime work.
                                I developed several Expert Advisors and Indicators for automation in the financial market.
                                </p>
                           </div>
                      </div>

                      <div className="timeline-wrapper">
                          <div className="timeline-yr">
                              <span>2012</span>
                          </div>
                          <div className="timeline-info">
                              <h3><span>Datacenter Administrator</span><small>Metrô de São Paulo</small></h3>
                              <p>Software development for infrastructure automation and DevOps.</p>
                          </div>
                      </div>

                      <div className="timeline-wrapper">
                          <div className="timeline-yr">
                              <span>2011</span>
                          </div>
                          <div className="timeline-info">
                              <h3>Software Developer<small>UNIFESP</small></h3>
                              <p>Modernization of more than 20 applications developed in Delphi. Development of new applications using PHP and ExtJS.</p>
                          </div>
                      </div>
                      
                      <div className="timeline-wrapper">
                          <div className="timeline-yr">
                              <span>2006</span>
                          </div>
                          <div className="timeline-info">
                              <h3>IT Technician<small>Sabrina Joias</small></h3>
                              <p>Development of several applications in Delphi and PHP for management and increase company productivity.</p>
                          </div>
                      </div>

                  </div>
              </div>

              <div className="col-lg-6 col-12">
                <h2 className="mb-4 mobile-mt-2">Educations</h2>

                  <div className="timeline">
                      <div className="timeline-wrapper">
                           <div className="timeline-yr">
                                <span>2015</span>
                           </div>
                           <div className="timeline-info">
                                <h3><span>Information Security Management</span><small>FEI - Faculdade de Engenharia Industrial</small></h3>
                                <p>Postgraduate Degree</p>
                           </div>
                      </div>

                      <div className="timeline-wrapper">
                          <div className="timeline-yr">
                              <span>2011</span>
                          </div>
                          <div className="timeline-info">
                              <h3><span>Master of Business Administration - MBA</span><small>Universidade Paulista</small></h3>
                              <p>Web Software Development</p>
                          </div>
                      </div>
                      
                      <div className="timeline-wrapper">
                          <div className="timeline-yr">
                              <span>2008</span>
                          </div>
                          <div className="timeline-info">
                              <h3><span>Business Management with an emphasis on IT</span><small>Fatec Tatuí</small></h3>
                              <p>Technology degree</p>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}

export default Experience