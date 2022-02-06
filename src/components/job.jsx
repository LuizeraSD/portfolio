import React from "react"

class Job extends React.Component {
  constructor (props = {}) {
    super(props)
    this.title = props.data.title || ''
    this.img = props.data.img || ''
    this.description = props.data.description || ''
    this.url = props.data.url || '#'
  }
  render () {
    return (
      <div className="item">
        <div className="project-info">
          <h3>{this.title}</h3>
          <a href={this.url}>
            <img src={this.img} className="img-fluid" alt="project image" />
          </a>
          <p>{this.description}</p>
        </div>
      </div>
    )
  }
}

export default Job