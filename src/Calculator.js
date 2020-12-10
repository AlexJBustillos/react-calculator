import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super()

        this.state = {
            num1: '',
            num2: '',
            answer: '',
            operator: '+'

        }
    }
    setNum = (e, num) => {
        this.setState({ [num]: parseInt(e.target.value)});
    }

    operator = (e) => {
        let type = e.target.value;
        this.setState({operator: type })
    }

    addNum = () => {
        let num1 = this.state.num1;
        let num2 = this.state.num2;

        if (this.state.operator === '+') {
            let addValue = num1 + num2
            this.setState({answer: addValue })
        } else if (this.state.operator === '-') {
            let addValue = num1 - num2
            this.setState({answer: addValue })
        } else if (this.state.operator === '/') {
            let addValue = num1 / num2
            this.setState({answer: addValue })
        } else if (this.state.operator === '*') {
            let addValue = num1 * num2
            this.setState({answer: addValue })
        } 

        
    }
    
    render() {
        return (
            <div>
                <h1>React Calculator!</h1>

                <div className="add">
                    <input type="number"
                    name="num1"
                    placeholder="Enter your first number"
                    value={this.state.num1}
                    onChange={ (e) => this.setNum(e, 'num1')}
                    />
                    <select onChange={this.operator}>
                        <option>+</option>   
                        <option>-</option>   
                        <option>/</option>   
                        <option>*</option>   
                    </select>
                    <option>+</option>   
                    <option>-</option>   
                    <option>/</option>   
                    <option>*</option>   
                    <input type="number"
                    name="num2"
                    placeholder="Enter your second number"
                    value={this.state.num2}
                    onChange={ (e) => this.setNum(e, 'num2')}
                    />
                    <button onClick={this.addNum}>=</button>
                    <h3>Results: {this.state.answer}</h3>
                </div>
            </div>

        );
    }
}

export default Calculator;