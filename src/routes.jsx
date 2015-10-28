var React = require('react');
// ReactRouter is the actual library
var ReactRouter = require('react-router');
// HashHistory is an object that tells the router how you'll be keeping track of what page the user is on at any given time
var HashHistory = require('react-router/lib/hashhistory');
// Router is the actual router that will be deciding what content to show on the page at any given time
var Router = ReactRouter.Router;
// Route is an object that will be used to configure the router
var Route = ReactRouter.Route;
var Main = require('./components/main');

// Each of these route objects inside router, declares a possible location that the user can visit
// Child1 is given to hello, as this.props.children
// Because child1 is nested inside of hello, it was provided to hello as this.props.children
// When we render /1/2 in browser, we're rendering Child1 / Child2 / Hello
// When you use this object called HashHistory, it means that all routes that the user visits while in our SPA will be prefixed by a pound
module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>
)
