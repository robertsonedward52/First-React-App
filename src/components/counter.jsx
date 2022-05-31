// abbreviation for importing react component run: imrc
import React, { Component } from 'react';
// abbreviation for creating class
class Counter extends Component {
     // embedding expressions in jsx 
     state = {
        count: 0,
        // imageURL: "https://picsum.photos/200",
        name: <h1>Edward Robertson</h1>
        };
        // adding styles
        styles = {
            fontSize: 10,
            fontWeight: 900,
            color: "black"
        }
    render() { 
        return (
           <div>
           {/* adding altribute */}
           {/* <img src={this.state.imageURL} alt='' /> */}
            <button style={this.styles} className={this.getBtnClasses()}> {this.formatCount()} </button> <br></br>
            <button style={ {fontSize: '2rem'}} className='btn btn-primary btn-sm m-2'>Increment</button>    
           </div>
        );
    }
    getBtnClasses() {
        let classes = "btn m-2 btn-";
        classes += this.state.count === 0 ? "warning" : "info";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero": count;
    }
}
export default Counter;
 