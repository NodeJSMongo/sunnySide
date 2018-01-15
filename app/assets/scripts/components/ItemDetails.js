import React, { Component } from 'react';
import {connect} from 'react-redux';
import Welcome from './welcome';

class ItemDetails extends Component{
  render(){
    if(!this.props.Item){
      return <div class="details"><Welcome /></div>;
    }
    return(
      <div class="details">
        <h3 class="section-title page-section">{this.props.Item.title}</h3>
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
