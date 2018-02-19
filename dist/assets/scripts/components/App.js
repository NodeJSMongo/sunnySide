import React, { Component } from 'react';
import MenuList from './MenuList';
import ItemDetails from'./ItemDetails';

export default class App extends Component{
  render(){
    return(
      <div className="card">
        <div className="card__menuList">
            <MenuList />
        </div>
        <div className="card__itemDetails">
          <ItemDetails />
        </div>
      </div>
    );
  }
}
