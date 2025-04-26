import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const UsersPage = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDeleteUser = (id)=>{
      fetch(`http://localhost:5000/users/${id}`,{
            method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
           if(data.deletedCount > 0){
            alert('Deleted Successfully');
            const remaining = users.filter(user => user._id !== id);
            setUsers(remaining)
           }
      })
  }

  return (
    <div>
      <h3>Users Page.{users.length}</h3>
      <div>
            {
                  users.map(user => <p key={user._id}>{user.name}  ||email:{user.email}|| <button onClick={() =>handleDeleteUser(user._id)}>X</button> |
                  <Link to={`/update/${user._id}`}><button>Update</button></Link>
                  </p>)
            }
      </div>
    </div>
  );
};

export default UsersPage;
