import React, {Component, Fragment } from 'react';
import { fetchUsers } from '../../redux';
import { connect } from 'react-redux';
import Loader from '../../components/Loader/Loader';

class UsersContainer extends Component {

  componentDidMount() {
    if(!this.props.userData.users.length) this.props.fetchUsers();
  }

  render() {

    const users = this.props.userData.users.map(user => {
      return (
        <li key={user.id} className="list-group-item">
          <b>{user.name}</b> having email <b>{user.email}</b> works in <b>{user.company.name}</b>
        </li>
      )
    });

    const userContainer = this.props.userData.loading
     ? <Loader />
     : this.props.userData.error
      ? <h1>{ this.props.userData.error }</h1>
      : (
        <Fragment>
          <h1>Users</h1>
          <hr />
          <ul className="list-group">
            {users}
          </ul>
        </Fragment>
      )

    return (
      <div style={{textAlign: 'center', padding: '20px'}} className="userContainer">
        {userContainer}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
