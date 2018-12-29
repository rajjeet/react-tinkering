import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ""}
    }

    handleClick = () => {
        this.setState({text: "PROCEED TO CHECKOUT"});
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.text || this.props.text}
            </button>
        );
    }

}

export default Button;