import React, { Component } from 'react';
import {connect} from 'react-redux';
import Welcome from './welcome';

class ItemDetails extends Component{
  render(){
    if(!this.props.Item){
      return <div />;
    }
    return(
      <div className="card__details" >
        <h3 className="card__details__section-title">{this.props.Item.title}</h3>
        <p>{this.props.Item.description}</p>
        <p>Visit <a href="http://higherstudyincanada.com">www.higherstudyincanada.com</a> to get your preperation.</p>
        <p>Download or read all sample documents <a href="http://higherstudyincanada.com/resources">here</a>.</p>
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
