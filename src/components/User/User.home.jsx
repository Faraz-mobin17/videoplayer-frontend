import React, { useEffect, useState } from "react";
import axios from "axios";
function UserHome() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/v1/users/");
        console.log("resopnse data", response.data.data);
        setUsers(response.data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <span>Welcome {user.username}</span>
          <br />
          <span>Email: {user.email}</span>
        </div>
      ))}
    </div>
  );
}

export default UserHome;
