import React, { Component } from 'react';

class Welcome extends Component{
  render(){
    return (
      <div>
        <h3 class="section-title page-section">Welcome</h3>
        <p class="text">
          This section is build in react and redux. This might be an
          opportunity for you to see an example, how react and redux can
          be a part of an existing app.
        </p>
        <p>
          please, select any topic from left menu to see some must needed
          function and command you need to know about the selected technology.
        </p>
      </div>
    );
  }
}

export default Welcome;
