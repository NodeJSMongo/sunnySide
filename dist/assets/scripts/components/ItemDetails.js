import React, { Component } from 'react';
import {connect} from 'react-redux';
import Welcome from './welcome';

class ItemDetails extends Component{
  render(){
    if(!this.props.Item){
      return <div className="details"><Welcome /></div>;
    }
    return(
      <div className="details">
        <h3 className="details__section-title details__page-section">{this.props.Item.title}</h3>
        <p>{this.props.Item.description}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    Item: state.currentItem
  };
}

export default connect(mapStateToProps)(ItemDetails);
