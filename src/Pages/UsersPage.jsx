import { useLoaderData } from "react-router-dom";

const UsersPage = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h3>Users Page.{users.length}</h3>
      <div>
            {
                  users.map(user => <p key={user._id}>{user.name}  ||email:{user.email}</p>)
            }
      </div>
    </div>
  );
};

export default UsersPage;
