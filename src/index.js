import React from 'react';
import ReactDOM from 'react-dom';


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '' };
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }
    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
        };
        return (
            <form>
                <h1 style={mystyle}>Hello {this.state.username}</h1>
                <p>Enter your name:</p>
                <input
                    type='text'
                    onChange={this.myChangeHandler}
                />
            </form>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));