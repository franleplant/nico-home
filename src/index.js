var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;



var Main = require('./main.react');
var Identity = require('./identity.react');
var Editorial = require('./editorial.react');
var Web = require('./web.react');
var Fun = require('./fun.react');
var App = require('./app.react');


var routes = (
    <Route name="base" path="/" handler={App}>
        <Route name="main" handler={Main}/>
        <Route name="identidad" handler={Identity}/>
        <Route name="editorial" handler={Editorial}/>
        <Route name="web" handler={Web}/>
        <Route name="fun" handler={Fun}/>
        <DefaultRoute handler={Main}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
