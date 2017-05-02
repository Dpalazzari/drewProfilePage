var React       = require('react');
var ReactRouter = require('react-router-dom');
var Router      = ReactRouter.BrowserRouter;
var Route       = ReactRouter.Route;
var Switch      = ReactRouter.Switch;
var Home        = require('./Home');
var Sidebar     = require('./Sidebar');
var Projects    = require('./Projects');
var Future      = require('./Future');

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className='sidebar'>
          <Sidebar />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/futurePlans' component={Future} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
