import $ from 'jquery';

class ShowMore{
  constructor(){
    this.showMoreInitial =$(".hideText__show-more");
    this.showlessInitial = $(".hideText__show-less");
    this.description =$(".hideText__description");
    this.showlessInitial.hide();
    this.description.hide();
    this.events();
  }

  events(){
    this.showMoreInitial.click(this.showMore.bind(this));
    //clicking the x close modal button
    this.showlessInitial.click(this.showless.bind(this));
  }

  showMore(){
  this.showlessInitial.show();
  this.description.show();
  this.showMoreInitial.hide();
  }

  showless(){
  //this.showMoreInitial.hide();
  this.showlessInitial.hide();
  this.description.hide();
  this.showMoreInitial.show();
  }
}
export default ShowMore;
