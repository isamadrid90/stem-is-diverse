import React, { Component } from 'react';
//import './Person.css';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';


class Person extends Component {
  render() {
    return (
      // <div key={this.props.id}>
      // <Grid container spacing={16} className="Person">

      //   <Grid item xs={4} sm={4} lg={5} xl={4} className="Picture" >
      //         <img src={this.props.picture} alt={this.props.altText}></img>
      //   </Grid>
      //   <Grid item xs={8} sm={8} lg={7} xl={8}>
      //     <div className="information">
      //         <div className="Name"><span>{this.props.name}</span></div>
      //         <div className="Header">
      //             <span className="Country">{this.props.country}</span>
      //             <div className="Dates">{this.props.dates}</div>
      //             <div className="Tags">{this.props.tags}</div>
      //         </div>
      //         <div className="History">{this.props.history}</div>
      //         <a target="_blank" rel="noopener noreferrer" className="More" href={this.props.link}>More details</a>
      //     </div>
      //     </Grid>
      // </Grid>
      // </div>

      <GridListTile key={this.props.picture}>
            <img src={this.props.picture} alt={this.props.altText} />
            <GridListTileBar
              title={this.props.name}
              subtitle={<span>{this.props.tags}</span>}
              actionIcon={
                <IconButton >
                </IconButton>
              }
            />
        </GridListTile>
    );
  }
}

export default Person;
