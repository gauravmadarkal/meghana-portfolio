import React from 'react';
import "../css/bootstrap.min.css"
import "../css/projects.css"
import "../css/mycard.css"
import MyCard from './MyCard';
const projects = [
  {
    id : 1,
    title : "First Project",
    imageName : "1.png",
    description : "lorem ipsum dolor sit amet",
    details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id : 2,
    title : "Second Project",
    imageName : "2.png",
    description : "lorem ipsum dolor sit amet",
    details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id : 3,
    title : "Third Project",
    imageName : "3.png",
    description : "lorem ipsum dolor sit amet",
    details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    id : 4,
    title : "Fourth Project",
    imageName : "4.png",
    description : "lorem ipsum dolor sit amet",
    details : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
]

class Projects extends React.Component{
  constructor(props) {
    super(props);
    this.state = {hidden : true};
  }
  componentDidMount() {
    document.body.style.backgroundImage = "none";
      setTimeout(() => {
          this.setState({hidden: false});
      }, this.props.waitBeforeShow);
  }
    render() {
        return(
        //   this.state.hidden ? <div id = "animation" class="shapeshifter play"></div>  :
          <div className="project-cards">
            <h1 className="my-projects">My Work</h1>
            <div class="row">
              {projects.map( project => 
                <MyCard title={project.title} description={project.description} imageName={project.imageName} details={project.details}/>
              )}
            </div>
          </div>
        );
    }
}
export default Projects;