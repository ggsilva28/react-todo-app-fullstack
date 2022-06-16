import React, { Component } from 'react';

export default class Grid extends Component {

    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : [];
        let classList = '';

        if(cols[0]) classList += ` col-xs-${cols[0]}`;
        if(cols[1]) classList += ` col-sm-${cols[1]}`;
        if(cols[2]) classList += ` col-md-${cols[2]}`;
        if(cols[3]) classList += ` col-lg-${cols[3]}`;

        return classList;
    }

    render(){
        const gridClass = this.toCssClasses(this.props.cols || 12)
        
        return (
            <div className={gridClass}>
                {this.props.children}
            </div>
        )
    }

}