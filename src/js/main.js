/** @jsx React.DOM */
var React = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var createBrowserHistory = require('history/lib/createBrowserHistory')

var routes = (
  <Router>
    <Route path="/" component={require('./components/app')}>
      <IndexRoute component={require('./components/home/home')} />
      <Route path="route1" component={require('./components/route1/route1')} />
    </Route>
  </Router>
  );

ReactDom.render(routes, document.getElementById('main'))
