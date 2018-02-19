import React, { Component } from 'react';

class Welcome extends Component{
  render(){
    return (
      <div className="card__welcome">
        <h3 className="card__welcome__section-title">Your chance of getting a Canadian study permit is 99%, if you have submitted a <strong>Complete Application</strong>.</h3>

        <p className="card__welcome__description">
          MAJOR FIVE towards making a successful application.
        </p>
      </div>
    );
  }
}

export default Welcome;
