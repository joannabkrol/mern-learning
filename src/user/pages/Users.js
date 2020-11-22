import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "w2",
      name: "Victoria Shumaher",
      image:
        "https://images.unsplash.com/photo-1549212926-67debc84aa8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      places: 3,
    },
  ];

  return (
    <div>
      <h2>Users Works!!</h2>
      <UsersList items={USERS} />
    </div>
  );
};

export default Users;
