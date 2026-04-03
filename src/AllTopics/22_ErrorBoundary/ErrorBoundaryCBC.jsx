import React, { Component } from 'react'

export default class ErrorBoundaryCBC extends Component{

    constructor(){
        super();
        this.state = { hasError : false };
    };

    static getDerivedStateFromError(Error) {
        return {
            hasError: true
        };
    }

    render(){
        if (this.state.hasError){
            return <h1>Something went Wrong</h1>;
        }
        return this.props.children;
    }
};