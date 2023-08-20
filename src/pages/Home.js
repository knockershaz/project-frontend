import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Home() {
    const [user,setUser] = useState([])

    useEffect(() => {
        loadUser();
    }, []);

    const {id} = useParams();

    const loadUser= async()=>{
        const result = await axios.get("https://filthy-play-production.up.railway.app/users");
        setUser(result.data);
    }

    const deleteUser = async (id)=>{
        await axios.delete(`https://filthy-play-production.up.railway.app/user/${id}`);
        loadUser();
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
              <Link className="btn btn-primary mx-2"
              to={`/viewuser/${user.id}`}
              >View</Link>
              <Link className="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link>
              <button className="btn btn-danger mx-2"
              onClick={()=>deleteUser(user.id)}
              >Delete</button>
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
