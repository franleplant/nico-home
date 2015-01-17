var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

 


module.exports = React.createClass({




  render: function () {
    return (
      <div>
        <header>
            <h1> Nico's blog!  </h1>
        </header>
        <nav>
            <ul>
                <li><Link to="main">Main</Link></li>
                <li><Link to="identidad">Identidad</Link></li>
                <li><Link to="editorial">Editorial</Link></li>
                <li><Link to="web">Web</Link></li>
                <li><Link to="fun">Fun</Link></li>
            </ul>
        </nav>
        <div className="Content">
          <RouteHandler/>
        </div>


        <footer>This is a footer</footer>
      </div>
    );
  }
});
