import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super()

        this.state = {
            num1: '',
            num2: '',
            answer: '',

        }
    }
    setNum = (e, num) => {
        this.setState({ [num]: e.target.value});
    }

    addNum = () => {
        let addValue = parseInt(this.state.num1) + parseInt(this.state.num2)

        this.setState({answer: addValue})
    }
    
    render() {
        return (
            <div>
                <h1>Add with React!</h1>

                <div className="add">
                    <input type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1')}
                    />
                    <span>+</span>
                    <input type="number"
                    name="num2"
                    placeholder="Enter your second number"
                    value={this.state.num2}
                    onChange={ (e) => this.setNum(e, 'num2')}
                    />
                    <button onClick={this.addNum}>=</button>
                    <h3>Addition results go here!</h3>
                    <h3> {this.state.answer}</h3>
                </div>
            </div>

        );
    }
}

export default Calculator;