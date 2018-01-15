import React, {Component} from 'react';
import MenuList from './MenuList';
import ItemDetails from'./ItemDetails';

export default class App extends Component{
  render(){
    return(
      <div>
        <MenuList />
        <ItemDetails />
      </div>
    );
  }
}
