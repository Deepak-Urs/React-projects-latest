import React, { Component } from 'react'

export default class StatesClassBased extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Deepak',
            age: 1,
            array: [1,2,3,4,5,6,7,8,9,10]
        }
    }

    changeStatus = () => {
        this.setState({
            age: this.state.age * 2,
            name: 'Uday'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.age}</h1>
                <button onClick={this.changeStatus}>Change Status</button>
                {
                    this.state.array.map((ele) => (
                        <h1>{ele}</h1>
                    ))
                }
            </div>
        )
    }
}
