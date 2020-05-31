import React from 'react';
import "../css/bootstrap.min.css"
import "../css/mainbody.css"
import "../css/button-anim.css"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));
const template_id = "template_bdQS097j";

class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {hidden : true,
      name: null,
      email: null,
      subject: null,
      message: null  
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("component did mount called");
    document.body.style.backgroundImage = "none";
      setTimeout(() => {
          this.setState({hidden: false});
      }, this.props.waitBeforeShow);
  }
  sendMessage(event){
    if(event.target.id === "sendMessageBtn"){

      alert("hi");
    }
  }
  handleInputChange(event) {
    const target = event.target;
    switch(target.id){
      case "name":
        this.setState({
          name: event.target.value
        })
        break;
      case "email":
        this.setState({
          email: event.target.value
        })
        break;
      case "message":
        this.setState({
          message: event.target.value
        })
        break;
      case "subject":  
        this.setState({
          subject: event.target.value
        })
        break;
    }
  }
  handleSubmit(event) {

    var template_params = {
      from_name : this.state.name,
      reply_to : this.state.email,
      subject : this.state.subject,
      message_html : this.state.message
    }   
    // window.emailjs.send(
    //   'gmail', template_id,
    //   template_params

    //   ).then(res => {
    //     this.setState({
    //       name : '',
    //       email : '',
    //       subject : '',
    //       message : ''
    //     })
    //     alert('Email successfully sent!')
    //   })
    //   .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      event.preventDefault();
  }
    render() {
        return(
        //   this.state.hidden ? <div id = "animation" class="shapeshifter play"></div>  :
          <div class="cover">
            <div class="rows">
              <img class="hero-image contact-us" src={require("../assets/img/contact_us.svg")}></img>
              <div class="background-contact column">
              <h2 class ="align-center">I would love to hear from you!</h2>
              <form onSubmit={this.handleSubmit}>
              <div class="formInput">  
              <TextField
                id="sender_name"
                label="Name"
                required
                style={{ margin: 8 }}
                placeholder="Enter your name"
                value = {this.state.name}
                // helperText="Full width!"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={this.handleInputChange}
              />
              <TextField
                id="sender_email"
                label="Email Address"
                style={{ margin: 8 }}
                value = {this.state.email}
                required
                placeholder="Enter your e-mail address"
                // helperText="Full width!"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleInputChange}
                variant="outlined"
              />
              <TextField
                id="sender_subject"
                label="Subject"
                value = {this.state.subject}
                style={{ margin: 8 }}
                placeholder="Enter the subject"
                helperText="Optional, but good to have"
                fullWidth    
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}

                onChange={this.handleInputChange}
                variant="outlined"
              />
              <p> </p>
              <TextField
                id="sender_message"
                label="Message"
                style={{ margin: 8 }}
                required
                value = {this.state.message}
                placeholder="Type your message here"
                multiline
                fullWidth
                rows={4}
                defaultValue="I'm awesome"
                onChange={this.handleInputChange}
                variant="outlined"
              />
              </div>
              <button type="submit"  value="submit" class="button" id="sendMessageBtn" ><span id="sendMessageBtn">Send Message</span></button>
              </form>
              </div>
            </div>
          </div> 
        );
    }
}

export default Contact;
