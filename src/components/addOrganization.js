import React, { useState, useEffect } from "react";



import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";





const AddOrg = props => {
  const [org, setOrg] = useState([]);
  console.log("org", org);

  const handleChange = event => {
    setOrg({ ...org, [event.target.name]: event.target.value });
  };

  const createOrgReducer = useSelector(state => state.orgCreateReducer);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createOrg(org));
  };

  if (createOrgReducer.isFetching === true) {
    return <div id="creating"><h1>...Creating Organization Member</h1></div>;
  }

  const openForm = () => {
    document.getElementById("popDiv").style.display = "block";
  }

  const closeForm = () => {
    document.getElementById("popDiv").style.display = "none";
  }


  return (
    <>
    <div>
    <button class="close-button" onClick={closeForm}>Create</button>
    <button class="open-button" onClick={openForm}>Create Account</button>
      <div id="popDiv" className="popBox-container">
        <div className="topCreate">
          <h1>Create Organization</h1>
          <div className="closeButton">
            <button onClick={closeForm}>x</button>
          </div>
        </div>
        <div className="popBox">
          <div className="type">
            <div className="title">
              <label for="Name">Organization Name</label>
            </div>
            <div className="box">
              <input
                type="text"
                id="Name"
                placeholder="name"
                name="name"
                value={org.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="type">
            <div className="title">
              <label for="Email">Email</label>{" "}
            </div>
            <div className="box">
              {" "}
              <input
                type="email"
                name="email"
                id="Email"
                placeholder="email"
                value={org.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="type">
            <div className="title">
              <label for="Password">Password</label>
            </div>
            <div className="box">
              <input
                type="password"
                name="password"
                id="Password"
                placeholder="password"
                value={org.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="type">
            <div className="title">
              <label for="Password">Confirm Password</label>
            </div>
            <div className="box">
              <input
                type="password"
                name="password"
                id="Password"
                placeholder="password"
                value={org.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="CreateAccount">
          <button type="Submit" onClick={handleSubmit}>
            Create Account
          </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
export default AddOrg;