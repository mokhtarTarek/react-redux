import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fechUsers } from "../redux";
function UserContainer({ usersData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  console.log(usersData.loading);
  return usersData.loading ? (
    <h2>loading</h2>
  ) : usersData.error ? (
    <h2>{usersData.error}</h2>
  ) : (
    <div>
      <h2>User list</h2>
      <ul>
        {usersData &&
          usersData.users &&
          usersData.users.map((user) => <p key={user.id}>{user.name}</p>)}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    usersData: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fechUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
