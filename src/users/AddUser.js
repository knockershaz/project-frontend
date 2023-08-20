import axios from "axios";
import {React,useState} from "react";
import { useNavigate ,Link} from "react-router-dom";

export default function AddUser() {

    let navigate = useNavigate()

    const [user, setuser] = useState({
        name : "",
        username : "",
        email : ""
    })

    const{name,username,email} =user

    const onInputChange=(e)=>{
        setuser({...user,[e.target.name]:[e.target.value]})
    }

    const onSubmit= async(e)=>{
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/user/save",{
                name,
                username,
                email
            })
        } catch (error) {
            console.log(error);
        }
        navigate("/");
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2>Register User</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control "
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control "
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label" id="email">
              E-mail
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e)=>onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">Submit</button>
          <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
