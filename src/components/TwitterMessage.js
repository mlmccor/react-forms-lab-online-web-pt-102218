import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
      remainingChars: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleChange}/>
        <div>{this.props.maxChars-this.state.message.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
