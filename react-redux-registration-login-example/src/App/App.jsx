import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { history, Role } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import { AdminPage } from '../AdminPage';

// do not need to use mapdispatch to props to invoke dispatch action creators because they are already defined and wrapped
// only need to worry about states now
import { userActions } from '../_actions';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(event) {
        event.preventDefault();

        const { dispatch } = this.props;
        dispatch(userActions.logout());
        history.push('/login');
    }


    render() {
        // right now role value is not being put in the backend database so link to admin needs to be user.role
        const { alert, user } = this.props;
        return (
            <Router history={history}>
            <div>
            {user &&
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        {user && <Link to="/admin" className="nav-item nav-link">Admin</Link>}
                        <a onClick={this.handleLogout} className="nav-item nav-link">Logout</a>
                    </div>
                </nav>
            }
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }

                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <PrivateRoute path="/admin" roles={[Role.Admin]} component={AdminPage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                            </div>

                    </div>
                </div>
                </div>
            </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    const { alert, authentication } = state;
    const { user } = authentication;
    return {
        user,
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
