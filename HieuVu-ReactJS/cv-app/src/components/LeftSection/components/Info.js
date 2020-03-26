import React, { Component } from 'react';
import Input from '../../InputField';

class Info extends Component {
  constructor(prop) {
    super(prop);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleButtonClicked = this.handleButtonClicked.bind(this);
    this.state = {
      isHovering: false,
      isButtonClicked: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  handleButtonClicked() {
    console.log('Clicked');
    this.setState(this.toggleButtonState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  toggleButtonState(state) {
    return {
      isButtonClicked: !state.isButtonClicked,
    };
  }

  render() {
    return (
      <div className="content">
        {!this.state.isButtonClicked ? (
          <div
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            <p>{this.props.InfoData ? this.props.InfoData : 'Data chua ve'}</p>
            {this.state.isHovering && (
              <button onClick={this.handleButtonClicked}>Bam di </button>
            )}
          </div>
        ) : (
          <Input
            Name="Description"
            ChangeLeftContent={this.props.changeLeftContent}
            handleButtonClicked={this.handleButtonClicked}
          />
        )}
      </div>
    );
  }
}

export default Info;
