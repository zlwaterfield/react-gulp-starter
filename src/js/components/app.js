/** @jsx React.DOM */
var React = require('react');
var Header = require('./static/header');

var App = React.createClass({
  render:function(){
    return (
      <div className="container-main">
        <Header />
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
