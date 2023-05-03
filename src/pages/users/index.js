import { Link } from "gatsby";
import React, { useEffect, useState } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>All users page</h3>
      {users?.map((user) => (
        <p key={user.id}>
          <Link to={user.username}>{user.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default UsersPage;
