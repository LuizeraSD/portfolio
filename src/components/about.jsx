import React from "react"

class About extends React.Component {
  render(){
    return (
      <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
        <div className="container">
            <div className="row">
                
                <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                    <div className="about-text">
                        <small className="small-text">Welcome to <span className="mobile-block">my portfolio website!</span></small>
                        <h1 className="animated animated-text">
                            <span className="mr-2">Hey folks, I'm</span>
                                <div className="animated-info">
                                    <span className="animated-item">Luiz Cubas</span>
                                    <span className="animated-item">JS Developer</span>
                                    <span className="animated-item">IT Passionate</span>
                                </div>
                        </h1>

                        <p>Developing Softwares and Games since 2006.</p>
                        
                        <div className="custom-btn-group mt-4">                          
                          <a href="/Resume.pdf" className="btn mr-lg-2 custom-btn"><i className="fas fa-file-alt"></i> Download Resume</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-12 col-12">
                    <div className="about-image svg">
                        <img src="/Foto_Linkedin.jpg" className="profile-picture" alt="image" />
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
  }
}

export default About