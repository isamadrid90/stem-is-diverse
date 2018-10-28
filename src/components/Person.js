import React, { Component } from 'react';
import './Person.css';


class Person extends Component {
  render() {
    return (
      <div className="Person">
        <div className="Picture">
            <img src={this.props.picture} alt={this.props.altText}></img>
        </div>
        <div className="information">
            <div className="Name"><span>{this.props.name}</span></div>
            <div className="Header">
                <span className="Country">{this.props.country}</span>
                <div className="Dates">{this.props.dates}</div>
                <div className="Tags">{this.props.tags}</div>
            </div>
            <div className="History">{this.props.history}</div>
            <a target="_blank" rel="noopener noreferrer" className="More" href={this.props.link}>More details</a>
        </div>
      </div>
    );
  }
}

export default Person;
