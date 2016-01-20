/** @jsx React.DOM */
var React = require('react');

var Route1 = React.createClass({
  render:function(){
    return (
        <div className="hero2">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <h1 className="title">Route 1</h1>
            </div>
          </div>
        </div>
    )
  }
});

module.exports = Route1;
