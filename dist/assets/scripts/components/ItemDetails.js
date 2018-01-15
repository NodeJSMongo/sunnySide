import React, { Component } from 'react';
import {connect} from 'react-redux';

class ItemDetails extends Component{
  render(){
    if(!this.props.Item){
      return <div>welcome</div>
    }
    return(
      <div>
        <h3>{this.props.Item.title}</h3>
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
