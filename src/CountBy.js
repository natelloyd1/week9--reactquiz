import React, { Component } from "react";

class StepCounter extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            counter: 0
            };

        this.handleClick = this.handleClick.bind(this);

    };

    // In here we are setting up the response from an event.
    // The set state is altered every time we click on the button.
    handleClick() {

            this.setState({ 
                counter: this.state.counter + this.props.step
            })
        } 
    
    render() {

        const { counter } = this.state;

            return <p onClick={ this.handleClick }> { counter } </p>
    }

};

export default StepCounter;