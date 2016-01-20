/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;

var Home = React.createClass({
  render:function() {
    return (
        <div className="hero">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <h1 className="title">Home</h1>
            </div>
          </div>
        </div>
    )
  }
});

module.exports = Home;