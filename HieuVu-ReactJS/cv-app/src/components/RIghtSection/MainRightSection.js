import React, { Component } from 'react';
import RenderData from "../RenderData"

class MainRightSection extends Component {

    constructor(prop) {
        super(prop)
        this.handleMouseHover = this.handleMouseHover.bind(this)
        this.handleButtonClicked = this.handleButtonClicked.bind(this)
        this.state = {
            isHovering: false,
            isButtonClicked: false
        }
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState)
    }

    handleButtonClicked() {
        this.setState(this.toggleButtonState)
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering
        }
    }

    toggleButtonState(state) {
        return {
            isButtonClicked: !state.isButtonClicked
        }
    }


    render() {
        if (this.props.data.rightSection) {

            console.log(this.props.data.rightSection)

            return (
                <section id="right" >
                    <RenderData props={this.props.data.rightSection}/>
                    <h3>Chay</h3>
                </section>
            );
        } else {
            return "Data chua ve"
        }
    }
}

export default MainRightSection;