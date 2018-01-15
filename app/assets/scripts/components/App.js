import React, { Component } from 'react';
import MenuList from './MenuList';
import ItemDetails from'./ItemDetails';

export default class App extends Component{
  render(){
    return(
      <div class="gutters--vertical_gutter card">
        <div class="row__medium-3  row__b-margin-until-medium">
            <MenuList />
        </div>
        <div class="row__medium-9">
          <ItemDetails />
        </div>
      </div>
    );
  }
}
