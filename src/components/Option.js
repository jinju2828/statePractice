import React, { Component } from 'react';

class Option extends Component {
    constructor(props){
        super(props);
        this.onChange1 = this.onChange1.bind(this);
    }
    onChange1(event){
        this.props.onChange1(event.target.value);
    }
    render(){
        return(
            <div>
                <input value = {this.props.diff} onChange={this.onChange1} />
            </div>
        );
    }
}

export default Option;