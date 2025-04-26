import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = e =>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const user = {name, email}
      fetch(`http://localhost:5000/users/${loadedUser._id}`,{
            method: "PUT",
            headers: {
                  'content-type': 'application/json'
            },
            body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(data =>{
            if(data.modifiedCount > 0){
                  alert('User update Successfully')
            }
      })
  }

  console.log(loadedUser);
  return (
    <div>
      <p> Update User of Name: {loadedUser.name}</p>
      <div>
        <form onSubmit={handleUpdate}>
          <input type="text" defaultValue={loadedUser?.name} name="name" id="" />
          <br />
          <input type="email" defaultValue={loadedUser?.email} name="email" id="" />
          <br />
          <input type="submit" value="Update User" />
        </form>
      </div>
    </div>
  );
};

export default Update;
