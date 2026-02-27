import { Component } from "react";

class StatesInCBC extends Component {
    constructor() {
        super();
        this.state = { Count: 0};
    }

    increment = () => {
        this.setState((prev) => {
            return {Count : prev.Count + 1};
        });
    };

    render() {
        console.log(this);
        
        return (
            <>
                <h1>States in CBC</h1>
                <h2>Counter : {this.state.Count}</h2>
                <button onClick={this.increment}>Increment</button>
            </>
        );
    };
};

export default StatesInCBC;