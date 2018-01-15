import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectItem} from '../actions/index';
import {bindActionCreators} from 'redux';

class MenuList extends Component{
  renderList(){
    return this.props.Items.map((Item)=>{
      return(
        <li
          key="{item.title}"
          onClick={()=>this.props.selectItem(Item)}>
          {item.title}
        </li>
      );
    });
  }
  render(){
    return(
      <ul>
        {this.renderList()} //helper function
      </ul>
    );
  }
}

//what ever returns form this function will show up as props inside the
//MenuList class
function mapStateToProps(state){
  return{
      Items: state.Items
  };
}
//bindActionCreators() takes an action and dispatch the action to all the reducers
//the first selectItem in the arguments list is the key and 2nd one is the value.
// first one will be available as props in this class, 2nd one is the actual action
function mapDispatchToProps(dispatch){
  return bindActionCreators({selectItem:selectItem}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
