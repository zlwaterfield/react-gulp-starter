/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;

var Header = React.createClass({
  render:function() {
    return (
        <nav className="navbar navbar-light bg-faded">
          <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
            &#9776;
          </button>
          <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <a className="navbar-brand" href="#">React Stater App</a>
            <ul className="nav navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#/route1">About</a>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
});

module.exports = Header;

