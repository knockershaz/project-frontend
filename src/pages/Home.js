import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
    const [user,setUser] = useState([])
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser= async()=>{
        const result = await axios.get("http://localhost:8080/users");
        setUser(result.data);
    }
    
  return (
    <div>
        <div className="container py-5">
        <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((user,index)=>(
          <tr>
            <th scope="row" key={index}>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              <button className="btn btn-primary mx-2">View</button>
              <button className="btn btn-outline-primary mx-2">Edit</button>
              <button className="btn btn-danger mx-2">Delete</button>
            </td>
          </tr>
            ))
          }
        </tbody>
      </table>
        </div>
    </div>
  );
}
