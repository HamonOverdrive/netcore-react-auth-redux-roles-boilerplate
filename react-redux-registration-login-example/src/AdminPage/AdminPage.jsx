import React from 'react';

// import { userService } from '@/_services';
import { userActions } from '../_actions';
import { connect } from 'react-redux';

class AdminPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(userActions.getAll());
    }

    handleDeleteUser(id) {
      return (e) => this.props.dispatch(userActions.delete(id));
  }

    render() {
        const { users, user } = this.props;
        console.log(users)
        return (
            <div>
                <h1>Admin Hello, {user.firstName}</h1>
                <p>This page can only be accessed by administrators.</p>
                <div>
                    All users from secure (admin only) api end point:
                    {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  // user is the current user logged in which is from the localstore in the reducer
  return {
      user,
      users
  };
}


const connectedAdminPage = connect(mapStateToProps)(AdminPage);
export { connectedAdminPage as AdminPage };
