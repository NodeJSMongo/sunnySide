import React, { Component } from 'react';
import MenuList from './MenuList';
import ItemDetails from'./ItemDetails';
import Welcome from './welcome';

export default class App extends Component{
  render(){
    return(
      <div className="card">
        <div>
          <Welcome />
        </div>
        <div className="card__menuList">
            <MenuList />
        </div>
        <div className="card__details">
          <ItemDetails />
        </div>
      </div>
    );
  }
}
