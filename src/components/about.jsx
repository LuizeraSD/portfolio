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
                          <a href="public/resume.pdf" className="btn mr-lg-2 custom-btn"><i className="fas fa-file-alt"></i> Download Resume</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-12 col-12">
                    <div className="about-image svg">
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGX5ERT33KKsQ/profile-displayphoto-shrink_200_200/0/1571094099438?e=1649894400&v=beta&t=tAbEQSy3LQaC-xLmELdcP9fDwOtS7xUE5ZiNoJdRy7U" className="profile-picture" alt="image" />
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
  }
}

export default About