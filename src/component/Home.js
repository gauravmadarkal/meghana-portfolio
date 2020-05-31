import React from 'react';
import "../css/bootstrap.min.css"
import "../css/mainbody.css"

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {hidden : true};
  }

  componentDidMount() {
      setTimeout(() => {
          this.setState({hidden: false});
      }, this.props.waitBeforeShow);
  }
    render() {
        return(
        //   this.state.hidden ? <div id = "animation" class="shapeshifter play"></div> :
            <main role="main" class="cover">
                <div class="rows">
                    <img class="hero-image" src={require("../assets/img/hero_image.svg")}></img>
                    <div class="columns">
                        <h1 class="cover-heading greetings">Hi</h1><h1 class="name">I'm Meghana.</h1>
                        <p class="lead self-description">Robotics enthusiast. Take a peek at my work, you want me to do anything for you? Hit me up!!</p>
                        <p class="lead">
                        <a href="/about" class="btn btn-lg btn-secondary learnmore-button">Learn more</a>
                        </p>
                    </div>
                </div>
          </main>
        );
    }
}
export default Home;