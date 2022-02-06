import React from 'react'
import Job from './job.jsx'

class Projects extends React.Component {
  constructor(props){
    super(props)
    this.state = { jobs : []}
  }

  componentDidMount() {
    const getJobs = async () => {
      const res = await fetch('https://luizcubas-portfolio-backend.herokuapp.com/jobs')
      const data = await res.json()      
      this.setState({ jobs: data })
    }
    getJobs()    
  }
  
  render() {
    const jobs = this.state.jobs.map(job => <Job key={job._id} data={job} />)
    return (      
      <section className="project py-5" id="project">        
        <div className="container">                
          <div className="row">
            <div className="col-lg-11 text-center mx-auto col-12">

                <div className="col-lg-8 mx-auto">
                  <h2>Things I have done</h2>
                </div>

                  {jobs}   

            </div>
          </div>
        </div>
    </section>
    )
  }
}

export default Projects