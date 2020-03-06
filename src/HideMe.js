import React, { Component } from "react";

class HideMe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hide: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

        handleClick() {
            this.setState({ 
                hide: !this.state.hide,
            })
        }; 

        render() {

            let { hide } = this.state; 

            return (    

                hide ? "" : 

                <p onClick={ this.handleClick }> {this.props.children} </p>
        
            );
    } 
}
export default HideMe; 